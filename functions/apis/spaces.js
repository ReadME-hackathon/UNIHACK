const admin = require("firebase-admin");
admin.initializeApp();
const db = admin.firestore();

const { DEV, DEV_UID } = require("../index");
const { onCall, HttpsError } = require("firebase-functions/v2/https");

// const test_data = {
//   data: {
//     space_data: {
//       name: "Space Sample",
//       min_size: 1,
//       max_size: 3,
//       features: [
//         {
//           name: "numberFeature",
//           type: "NUMBER",
//           optional: false,
//         },
//         {
//           name: "textFeature",
//           type: "STRING",
//           optional: false,
//         },
//         {
//           name: "selectFeature", // aka dropdown
//           type: "SELECT",
//           options: ["option_1", "option_2", "option_3"],
//           optional: false,
//           multi_select: false, // e.g. multiple selections allowed?
//           ordered: false, // e.g. H1, H2a would need to be ordered
//         },
//         {
//           name: "checkboxFeature",
//           type: "CHECKBOX",
//           optional: false,
//         },
//         {
//           name: "availabilityFeature",
//           type: "AVAILABILITY",
//           optional: false,
//         },
//       ],
//     },
//   },
// };

// Ensures a space data is valid. (Doesn't have to be complete)
function ensureValidSpaceData(space_data) {
  if ("min_size" in space_data) {
    if (Number.isNaN(space_data.min_size) || space_data.min_size < 0) return "INVALID_MIN_SIZE";
  }

  if ("max_size" in space_data && Number.isNaN(space_data.max_size)) {
    return "INVALID_MAX_SIZE";
  }
  return null;
}

// Ensures a space data is complete and valid. Returns the error if something is wrong.
function ensureCompleteValidSpaceData(space_data) {
  if (!("name" in space_data)) return "NAME_MISSING";
  if (!("min_size" in space_data) || !("max_size" in space_data)) return "MIN_OR_MAX_SIZE_MISSING";

  const validityError = ensureValidSpaceData(space_data);
  if (validityError) return validityError;

  return null;
}

// Creates a space given space data. (space_id)
exports.createSpace = onCall(async ({ data, context }) => {
  // Authentication
  const uid = DEV ? DEV_UID : context.auth.uid;
  if (!uid) {
    throw new HttpsError("unauthenticated", "Not authed.");
  }

  // Parameters check
  if ((!"space_data") in data) {
    throw new HttpsError("invalid-argument", "Missing space_data.");
  }

  // Checks if the space data is well-formatted
  const spaceDataError = ensureCompleteValidSpaceData(data.space_data);
  if (spaceDataError) {
    throw new HttpsError("invalid-argument", spaceDataError);
  }

  // Append to DB
  const spaceRef = await db.collection("Spaces").add({
    created_by: uid,
    created_at: Date.now(),
    ...data.space_data,
  });

  return { space_id: spaceRef.id };
});

// Updates space data given space ID and new space data. (space_id, space_data)
exports.updateSpaceData = onCall(async ({ data, context }) => {
  // Authentication
  const uid = DEV ? DEV_UID : context.auth.uid;
  if (!uid) {
    throw new HttpsError("unauthenticated", "Not authed.");
  }

  // Parameters check
  if (!("space_id" in data) || !("space_data" in data)) {
    throw new HttpsError("invalid-argument", "Missing space_id or space_data.");
  }

  // Retrieve space reference
  const spaceRef = db.collection("Spaces").doc(data.space_id);
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
exports.deleteSpace = onCall(async ({ data, context }) => {
  // Authentication
  const uid = DEV ? DEV_UID : context.auth.uid;
  if (!uid) {
    throw new HttpsError("unauthenticated", "Not authed.");
  }

  // Parameters check
  if (!("space_id" in data)) {
    throw new HttpsError("invalid-argument", "Missing space_id.");
  }

  // Retrieve space reference
  const spaceRef = db.collection("Spaces").doc(data.space_id);
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
exports.getTeacherSpaces = onCall(async ({ data, context }) => {
  // Authentication
  const uid = DEV ? DEV_UID : context.auth.uid;
  if (!uid) {
    throw new HttpsError("unauthenticated", "Not authed.");
  }

  // Retrieve spaces created by the user
  const snapshot = await db.collection("Spaces").where("created_by", "==", uid).get();

  const spaces = [];
  snapshot.forEach((doc) => {
    spaces.push({
      space_id: doc.id,
      ...doc.data(),
    });
  });

  return { spaces };
});
