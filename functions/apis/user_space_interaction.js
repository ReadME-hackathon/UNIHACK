// // NOTE: Students will have their own userID once singed in via Google.
const db = require("firebase-admin").firestore();
const { HttpsError } = require("firebase-functions/v2/https");
const { handleAuthAndParams, onCallWrapper } = require("../misc/utils");

// Adds a user to a space along with their user data
exports.addUserToSpace = onCallWrapper(async ({ data }) => {
  const uid = handleAuthAndParams(data, ["space_id", "user_data"]);

  // Retrieve space reference
  const spaceRef = db.collection("spaces").doc(data.space_id);
  const spaceSnapshot = await spaceRef.get();

  // Check if space exists
  if (!spaceSnapshot.exists) {
    throw new HttpsError("not-found", "Space does not exist. (ID: " + data.space_id + ").");
  }

  // Add user data to the space
  await spaceRef.collection("users").doc(uid).set(data.user_data);

  return { success: true };
});

// Removes a user from a space
exports.removeUserFromSpace = onCallWrapper(async ({ data }) => {
  const uid = handleAuthAndParams(data, ["space_id"]);

  // Retrieve space reference
  const spaceRef = db.collection("spaces").doc(data.space_id);
  const spaceSnapshot = await spaceRef.get();

  // Check if space exists
  if (!spaceSnapshot.exists) {
    throw new HttpsError("not-found", "Space does not exist. (ID: " + data.space_id + ").");
  }

  // Remove user data from the space
  await spaceRef.collection("users").doc(uid).delete();

  return { success: true };
});

// Kicks a user from a space
exports.kickUserFromSpace = onCallWrapper(async ({ data }) => {
  const uid = handleAuthAndParams(data, ["space_id", "kicked_user_id"]);

  // Check if the user running this function is the creator of the space (teacher)
  const spaceRef = db.collection("spaces").doc(data.space_id);
  const spaceSnapshot = await spaceRef.get();

  if (!spaceSnapshot.exists) {
    throw new HttpsError("not-found", "Space does not exist. (ID: " + data.space_id + ").");
  }

  const spaceData = spaceSnapshot.data();

  if (spaceData.created_by !== uid) {
    throw new HttpsError("permission-denied", "You are not authorized to perform this action.");
  }

  // Remove the user from the space
  await spaceRef.collection("users").doc(data.kicked_user_id).delete();

  return { success: true };
});

// Updates user data in a space
exports.updateUserSpaceData = onCallWrapper(async ({ data }) => {
  const uid = handleAuthAndParams(data, ["space_id", "user_data"]);

  // Retrieve space reference
  const spaceRef = db.collection("spaces").doc(data.space_id);
  const spaceSnapshot = await spaceRef.get();

  // Check if space exists
  if (!spaceSnapshot.exists) {
    throw new HttpsError("not-found", "Space does not exist. (ID: " + data.space_id + ").");
  }

  // Update user data in the space
  await spaceRef.collection("users").doc(uid).update(data.user_data);

  return { success: true };
});

// List all users within a space
exports.listUsersInSpace = onCallWrapper(async ({ data }) => {
  const uid = handleAuthAndParams(data, ["space_id"]);

  // Retrieve space reference
  const spaceRef = db.collection("spaces").doc(data.space_id);
  const spaceSnapshot = await spaceRef.get();

  // Check if space exists
  if (!spaceSnapshot.exists) {
    throw new HttpsError("not-found", "Space does not exist. (ID: " + data.space_id + ").");
  }

  // Retrieve users within the space
  const usersQuerySnapshot = await spaceRef.collection("users").get();

  const users = [];
  usersQuerySnapshot.forEach((doc) => {
    users.push({
      user_id: doc.id,
      ...doc.data(),
    });
  });

  return { users };
});
