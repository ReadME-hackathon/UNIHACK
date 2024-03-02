// // NOTE: Students will have their own userID once singed in via Google.
const admin = require("firebase-admin");
const db = admin.firestore();
const { FieldValue, Filter } = require("firebase-admin/firestore");
const { onCall, HttpsError } = require("firebase-functions/v2/https");
const { handleAuthAndParams } = require("../misc/utils");

// Create a request when a user requests to join a group. The leader can approve or reject this.
exports.userRequestToJoinGroup = onCall(async ({ data, context }) => {
  const uid = handleAuthAndParams(context, data, ["group_id", "space_id"]);

  // Retrieve space reference
  const spaceRef = db.collection("spaces").doc(data.space_id);
  const groupRef = spaceRef.collection("groups").doc(data.group_id);
  const groupSnapshot = await groupRef.get();

  if (!groupSnapshot.exists) {
    throw new HttpsError("not-found", "Group does not exist in this space.");
  }

  const leader_id = groupSnapshot.data().leader_id;

  // Check if there's already an existing request to the same group or leader
  const existingRequest = await spaceRef
    .collection("requests")
    .where("from_id", "==", uid)
    .where("target_group_id", "==", data.group_id)
    .get();

  // TODO: Check user is not already part of the group
  if (!existingRequest.empty) {
    throw new HttpsError("already-exists", "There is already a request to join this group.");
  }

  // Add request to the group
  const request = await spaceRef.collection("requests").add({
    from_id: uid,
    to_id: leader_id,
    target_group_id: data.group_id,
    type: "REQUEST_TO_JOIN",
    timestamp: Date.now(),
  });

  return { success: true, request_id: request.id };
});

// Create a request when a user is invited to a group by the leader. Only the leader can do this.
exports.userInvitedToGroup = onCall(async ({ data, context }) => {
  // Authentication
  const uid = handleAuthAndParams(context, data, ["group_id", "invited_id", "space_id"]);

  // Extract necessary data
  const { group_id, invited_id, space_id } = data;

  // Retrieve space reference
  const spaceRef = db.collection("spaces").doc(space_id);

  // Check if the authenticated user is the leader of the group
  const groupRef = spaceRef.collection("groups").doc(group_id);
  const groupSnapshot = await groupRef.get();
  if (!groupSnapshot.exists) {
    throw new HttpsError("not-found", "Group does not exist.");
  }
  const groupData = groupSnapshot.data();
  if (groupData.leader_id !== uid) {
    throw new HttpsError("permission-denied", "Only the group leader can invite users.");
  }

  // Add request to the group
  const request = await spaceRef.collection("requests").add({
    from_id: uid,
    to_id: invited_id,
    target_group_id: group_id,
    type: "INVITE_TO_JOIN",
    timestamp: Date.now(),
  });

  return { success: true, request_id: request.id };
});

// Either accept the request or remove the request (decline).
exports.processRequestDecision = onCall(async ({ data, context }) => {
  // Validate input parameters
  const uid = handleAuthAndParams(context, data, ["request_id", "approved", "space_id"]);

  // Retrieve request data
  const { request_id, approved, space_id } = data;

  // Retrieve request reference
  const spaceRef = db.collection("spaces").doc(space_id);
  const requestRef = spaceRef.collection("requests").doc(request_id);
  const requestSnapshot = await requestRef.get();

  // Check if request exists
  if (!requestSnapshot.exists) {
    throw new HttpsError("not-found", "Request does not exist.");
  }

  const requestData = requestSnapshot.data();
  const { target_group_id, type, from_id, to_id } = requestData;

  const groupRef = spaceRef.collection("groups").doc(target_group_id);

  // Check if the user has permission to handle this request
  if (type === "INVITE_TO_JOIN" && uid !== to_id) {
    throw new HttpsError(
      "permission-denied",
      "User does not have permission to handle this request.",
    );
  }

  if (type === "REQUEST_TO_JOIN") {
    const groupSnapshot = await groupRef.get();
    const groupData = groupSnapshot.data();

    // Check if the user is the leader of the target group
    if (groupData.leader_id !== uid) {
      throw new HttpsError("permission-denied", "User is not the leader of the target group.");
    }
  }

  // Process decision
  if (approved) {
    // Update group members array
    await groupRef.update({
      members: FieldValue.arrayUnion(from_id), // Add the user to the group's members
    });
  }

  // Delete the request
  await requestRef.delete();

  return { success: true };
});

exports.userLeaveGroup = onCall(async ({ data, context }) => {
  // Authentication
  const uid = handleAuthAndParams(context, data, ["space_id", "group_id"]);

  // Retrieve group reference
  const groupRef = db.collection(`spaces/${data.space_id}/groups`).doc(data.group_id);
  const groupSnapshot = await groupRef.get();

  // Check if group exists
  if (!groupSnapshot.exists) {
    throw new HttpsError("not-found", "Group does not exist in this space.");
  }

  // Remove user from the members list
  await groupRef.update({
    members: admin.firestore.FieldValue.arrayRemove(uid),
  });

  return { success: true };
});

// Kicks a user from a group
exports.kickUserFromGroup = onCall(async ({ data, context }) => {
  const uid = handleAuthAndParams(context, data, ["space_id", "group_id", "kicked_user_id"]);

  // Retrieve group reference
  const groupRef = db.collection(`spaces/${data.space_id}/groups`).doc(data.group_id);
  const groupSnapshot = await groupRef.get();

  // Check if group exists
  if (!groupSnapshot.exists) {
    throw new HttpsError("not-found", "Group does not exist in this space.");
  }

  // Check if the user running this function is the leader of the group
  const groupData = groupSnapshot.data();
  if (groupData.leader_id !== uid) {
    throw new HttpsError("permission-denied", "You are not authorized to perform this action.");
  }

  // Remove the user from the group
  await groupRef.update({
    members: admin.firestore.FieldValue.arrayRemove(data.kicked_user_id),
  });

  return { success: true };
});

// Finds if a user belongs to a group. Can have no group.
exports.getUserGroup = onCall(async ({ data, context }) => {
  // Authentication
  const uid = handleAuthAndParams(context, data, ["space_id"]);

  // Retrieve group reference
  const querySnapshot = await db
    .collection(`spaces/${data.space_id}/groups`)
    .where("members", "array-contains", uid)
    .get();

  // Check if no groups are found
  if (querySnapshot.empty) {
    return { group_id: null, msg: "Not part of any groups." };
  }

  // Check if multiple groups are found
  if (querySnapshot.size > 1) {
    throw new HttpsError(
      "failed-precondition",
      "User is part of multiple groups. This is not allowed.",
    );
  }

  // Get the first document in the query snapshot
  const doc = querySnapshot.docs[0];

  // Set the group object
  return {
    group_id: doc.id,
    ...doc.data(),
  };
});

exports.getUserRequests = onCall(async ({ data, context }) => {
  const uid = handleAuthAndParams(context, data, ["space_id"]);

  // Retrieve requests relevant to the user
  const requestsRef = db.collection(`spaces/${data.space_id}/requests`);
  const userRequestsSnapshot = await requestsRef
    .where(Filter.or(Filter.where("to_id", "==", uid), Filter.where("from_id", "==", uid)))
    .get();

  const userRequests = [];
  userRequestsSnapshot.forEach((doc) => {
    userRequests.push({
      request_id: doc.id,
      ...doc.data(),
    });
  });

  return { userRequests };
});
