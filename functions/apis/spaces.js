const functions = require("firebase-functions");
const admin = require("firebase-admin");

exports.createSpace = functions.https.onCall(async (data, context) => {
  try {
    const { spaceName } = data;
    const uid = DEV ? DEV_UID : context.auth.uid;
    if (!uid) {
      throw new functions.https.HttpsError("unauthenticated", "User must be authenticated.");
    }

    const spaceRef = await db.collection("Spaces").add({
      name: spaceName,
      createdBy: uid,
      createdAt: Date.now(),
    });

    return { spaceId: spaceRef.id };
  } catch (error) {
    throw new functions.https.HttpsError("internal", error.message);
  }
});

exports.joinSpace = functions.https.onCall(async (data, context) => {
  try {
    const { spaceId } = data;
    const uid = DEV ? DEV_UID : context.auth.uid;

    if (!uid) {
      throw new functions.https.HttpsError("unauthenticated", "User must be authenticated.");
    }

    const spaceRef = db.collection("Spaces").doc(spaceId);
    const userRef = spaceRef.collection("Users").doc(uid);
    await userRef.set({
      userId: uid,
      joinedAt: admin.firestore.FieldValue.serverTimestamp(),
      availability: data.availability,
    });

    return { success: true };
  } catch (error) {
    throw new functions.https.HttpsError("internal", error.message);
  }
});
