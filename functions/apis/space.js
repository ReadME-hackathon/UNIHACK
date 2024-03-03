const db = require("firebase-admin").firestore();
const { HttpsError, onCall } = require("firebase-functions/v2/https");
const { handleAuthAndParams, handleParams, onCallWrapper, handleAuth } = require("../misc/utils");

// Ensures a space data is valid. (Doesn't have to be complete)
// TODO: Ensure feature names are strictly unique within the space.
function ensureValidSpaceData(space_data) {
  if ("min_size" in space_data) {
    if (Number.isNaN(space_data.min_size) || space_data.min_size < 0) {
      throw new HttpsError("invalid-argument", "INVALID_MIN_SIZE");
    }
  }

  if ("max_size" in space_data && Number.isNaN(space_data.max_size)) {
    throw new HttpsError("invalid-argument", "INVALID_MAX_SIZE");
  }
  return null;
}

// Ensures a space data is complete and valid. Returns the error if something is wrong.
function ensureCompleteValidSpaceData(space_data) {
  if (!("name" in space_data)) {
    throw new HttpsError("invalid-argument", "Missing 'name' in space_data.");
  }
  if (!("min_size" in space_data) || !("max_size" in space_data)) {
    throw new HttpsError("invalid-argument", "Missing 'min_size' or 'max_size' in space_data.");
  }

  ensureValidSpaceData(space_data);
}

// Creates a space given space data. (space_id)

exports.createSpace = onCallWrapper(async ({ data }) => {

  const uid = handleAuthAndParams(data, ["space_data"]);

  ensureCompleteValidSpaceData(data.space_data);

  // Append to DB
  const spaceRef = await db.collection("spaces").add({
    created_by: uid,
    created_at: Date.now(),
    ...data.space_data,
  });

  return { space_id: spaceRef.id };
});

// Updates space data given space ID and new space data. (space_id, space_data)
// TODO: Ensure min size is <= max size, even after using updateSpaceData.
exports.updateSpaceData = onCallWrapper(async ({ data }) => {
  const uid = handleAuthAndParams(data, ["space_id", "space_data"]);

  // Retrieve space reference
  const spaceRef = db.collection("spaces").doc(data.space_id);
  const spaceSnapshot = await spaceRef.get();

  // Check if space exists
  if (!spaceSnapshot.exists) {
    throw new HttpsError("not-found", "Space does not exist. (ID: " + data.space_id + ").");
  }

  // Check if user is authorized to update space data
  const spaceData = spaceSnapshot.data();
  if (spaceData.created_by !== uid) {
    throw new HttpsError(
      "permission-denied",
      "User does not have permission to update this space.",
    );
  }

  // Update space data
  await spaceRef.update({
    ...data.space_data,
  });

  return { success: true };
});

// Deletes a space given its ID (space_id)
exports.deleteSpace = onCallWrapper(async ({ data }) => {
  const uid = handleAuthAndParams(data, ["space_id"]);

  // Retrieve space reference
  const spaceRef = db.collection("spaces").doc(data.space_id);
  const spaceSnapshot = await spaceRef.get();

  // Check if space exists
  if (!spaceSnapshot.exists) {
    throw new HttpsError("not-found", "Space does not exist. (ID: " + data.space_id + ").");
  }

  // Check if user is authorized to delete the space
  const spaceData = spaceSnapshot.data();
  if (spaceData.created_by !== uid) {
    throw new HttpsError(
      "permission-denied",
      "User does not have permission to delete this space.",
    );
  }

  // Delete space
  await spaceRef.delete();

  return { success: true };
});

// Retrieves spaces created by a given user ()
exports.getOwnedSpaces = onCallWrapper(async ({ data }) => {
  const uid = handleAuthAndParams(data, []);

  // Retrieve spaces created by the user
  const snapshot = await db.collection("spaces").where("created_by", "==", uid).get();

  const spaces = [];
  snapshot.forEach((doc) => {
    spaces.push({
      space_id: doc.id,
      ...doc.data(),
    });
  });

  return { spaces };
});

// Retrieves spaces where the current user is a member
exports.getMemberSpaces = onCallWrapper(async ({ data }) => {
  const uid = handleAuthAndParams(data, []);

  // Retrieve spaces where the user is a member
  const memberSpacesSnapshot = await db.collection("spaces").get();

  const memberSpaces = [];
  memberSpacesSnapshot.forEach((spaceDoc) => {
    const usersCollectionRef = spaceDoc.ref.collection("users");
    usersCollectionRef
      .where("user_id", "==", uid)
      .get()
      .then((querySnapshot) => {
        if (!querySnapshot.empty) {
          memberSpaces.push({
            space_id: spaceDoc.id,
            ...spaceDoc.data(),
          });
        }
      });
  });

  return { memberSpaces };
});

// Retrieves spaces where the current user is a member and spaces owned by the current user
exports.getAllUserSpaces = onCallWrapper(async ({ data }) => {
  const uid = handleAuth(data);

  // Retrieve spaces where the user is a member
  const memberSpacesSnapshot = await db.collection("spaces").get();

  const memberSpaces = [];
  memberSpacesSnapshot.forEach((spaceDoc) => {
    const usersCollectionRef = spaceDoc.ref.collection("users");
    usersCollectionRef
      .where("user_id", "==", uid)
      .get()
      .then((querySnapshot) => {
        if (!querySnapshot.empty) {
          memberSpaces.push({
            space_id: spaceDoc.id,
            ...spaceDoc.data(),
          });
        }
      });
  });

  // Retrieve spaces owned by the user
  const ownedSnapshot = await db.collection("spaces").where("created_by", "==", uid).get();
  const ownedSpaces = [];

  ownedSnapshot.forEach((doc) => {
    ownedSpaces.push({
      space_id: doc.id,
      ...doc.data(),
    });
  });

  return { memberSpaces, ownedSpaces };
});

// Get space data by space ID
exports.getSpaceData = onCallWrapper(async ({ data }) => {
  handleParams(data, ["space_id"]);

  // Retrieve space reference
  console.log(data.space_id);
  const spaceRef = db.collection("spaces").doc(data.space_id);
  const spaceSnapshot = await spaceRef.get();

  // Check if space exists
  if (!spaceSnapshot.exists) {
    throw new HttpsError("not-found", "Space does not exist. (ID: " + data.space_id + ").");
  }

  // Get space data
  const spaceData = spaceSnapshot.data();

  // Retrieve subcollections within the space document
  const subcollections = await spaceRef.listCollections();

  // Create an object to hold subcollection data
  const subcollectionData = {};

  // Fetch data for each subcollection
  for (const subcollection of subcollections) {
    const documents = await subcollection.get();
    subcollectionData[subcollection.id] = documents.docs.map((doc) => doc.data());
  }

  // Combine space data with subcollection data
  const responseData = {
    space: spaceData,
    subcollections: subcollectionData,
  };

  return responseData;
});
