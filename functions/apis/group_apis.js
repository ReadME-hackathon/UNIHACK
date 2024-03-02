// // NOTE: Students will have their own userID once singed in via Google.
const db = require("firebase-admin").firestore();
const { DEV, DEV_UID } = require("../index");
const { onCall, HttpsError } = require("firebase-functions/v2/https");

const sampleGroupData = {
  name: "Group Sample",
  description: "Hi, we are a friendly group!",
};

// Creates a group within a space
exports.createGroupInSpace = onCall(async ({ data, context }) => {
  // Authentication
  const uid = DEV ? DEV_UID : context.auth.uid;
  if (!uid) {
    throw new HttpsError("unauthenticated", "Not authed.");
  }

  // Parameters check
  if (!("space_id" in data) || !("group_data" in data)) {
    throw new HttpsError("invalid-argument", "Missing space_id or group_data.");
  }

  // Retrieve space reference
  const spaceRef = db.collection("Spaces").doc(data.space_id);
  const spaceSnapshot = await spaceRef.get();

  // Check if space exists
  if (!spaceSnapshot.exists) {
    throw new HttpsError("not-found", "Space does not exist. (ID: " + data.space_id + ").");
  }

  // Add group data to the space
  const groupData = {
    leader_id: uid,
    members: [uid],
    member_count: 1,
    ...data.group_data,
  };

  const groupRef = await spaceRef.collection("groups").add(groupData);

  return { group_id: groupRef.id };
});

// Removes a group
exports.removeGroup = onCall(async ({ data, context }) => {
  // Authentication
  const uid = DEV ? DEV_UID : context.auth.uid;
  if (!uid) {
    throw new HttpsError("unauthenticated", "Not authed.");
  }

  // Parameters check
  if (!("group_id" in data)) {
    throw new HttpsError("invalid-argument", "Missing group_id.");
  }

  // Retrieve group reference
  const groupRef = db.collection("groups").doc(data.group_id);
  const groupSnapshot = await groupRef.get();

  // Check if group exists
  if (!groupSnapshot.exists) {
    throw new HttpsError("not-found", "Group does not exist. (ID: " + data.group_id + ").");
  }

  // Check if user is the leader of the group
  const groupData = groupSnapshot.data();
  if (groupData.leader_id !== uid) {
    throw new HttpsError("permission-denied", "Only the group leader can remove the group.");
  }

  // Delete group
  await groupRef.delete();

  return { success: true };
});

// Updates group data
exports.updateGroupData = onCall(async ({ data, context }) => {
  // Authentication
  const uid = DEV ? DEV_UID : context.auth.uid;
  if (!uid) {
    throw new HttpsError("unauthenticated", "Not authed.");
  }

  // Parameters check
  if (!("group_id" in data) || !("group_data" in data)) {
    throw new HttpsError("invalid-argument", "Missing group_id or group_data.");
  }

  // Retrieve group reference
  const groupRef = db.collection("groups").doc(data.group_id);
  const groupSnapshot = await groupRef.get();

  // Check if group exists
  if (!groupSnapshot.exists) {
    throw new HttpsError("not-found", "Group does not exist. (ID: " + data.group_id + ").");
  }

  // Check if user is the leader of the group
  const groupData = groupSnapshot.data();
  if (groupData.leader_id !== uid) {
    throw new HttpsError("permission-denied", "Only the group leader can update group data.");
  }

  // Update group data
  await groupRef.update(data.group_data);

  return { success: true };
});
