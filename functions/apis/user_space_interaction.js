// // NOTE: Students will have their own userID once singed in via Google.
const db = require("firebase-admin").firestore();
const { onCall, HttpsError } = require("firebase-functions/v2/https");
const { handleAuthAndParams } = require("../misc/utils");

const sampleUserData = {
  name: "User Sample",
  features: [
    {
      name: "numberFeature",
      data: 2,
    },
    {
      name: "textFeature",
      data: "Hi! I am user.",
    },
    {
      name: "selectFeature", // aka dropdown
      data: ["option2", "option4"],
    },
    {
      name: "checkboxFeature",
      data: true,
    },
    {
      name: "availabilityFeature",
      data: null,
    },
  ],
};

// Adds a user to a space along with their user data
exports.addUserToSpace = onCall(async ({ data, context }) => {
  const uid = handleAuthAndParams(context, data, ["space_id", "user_data"]);

  // Retrieve space reference
  const spaceRef = db.collection("Spaces").doc(data.space_id);
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
exports.removeUserFromSpace = onCall(async ({ data, context }) => {
  const uid = handleAuthAndParams(context, data, ["space_id"]);

  // Retrieve space reference
  const spaceRef = db.collection("Spaces").doc(data.space_id);
  const spaceSnapshot = await spaceRef.get();

  // Check if space exists
  if (!spaceSnapshot.exists) {
    throw new HttpsError("not-found", "Space does not exist. (ID: " + data.space_id + ").");
  }

  // Remove user data from the space
  await spaceRef.collection("users").doc(uid).delete();

  return { success: true };
});

// Updates user data in a space
exports.updateUserSpaceData = onCall(async ({ data, context }) => {
  const uid = handleAuthAndParams(context, data, ["space_id", "user_data"]);

  // Retrieve space reference
  const spaceRef = db.collection("Spaces").doc(data.space_id);
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
exports.listUsersInSpace = onCall(async ({ data, context }) => {
  const uid = handleAuthAndParams(context, data, ["space_id"]);

  // Retrieve space reference
  const spaceRef = db.collection("Spaces").doc(data.space_id);
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
