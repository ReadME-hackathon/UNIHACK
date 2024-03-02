const functions = require("firebase-functions");
const admin = require("firebase-admin");

// const obj = {
//   data: {
//     spaceName: "TestSpace",
//   },
// };

// // createGroupInSpace(leaderID, spaceID, groupData)
// exports.groups = groups.createGroupInSpace;
// // removeGroup(groupID)
// exports.groups = groups.removeGroup;
// // updateGroupData(groupID, groupData)
// exports.groups = groups.updateGroupData;

const sampleGroupData = {
  name: "Group Sample",
  privacy: "private",
  attributesRequirement: {
    gradeTarget: {
      min: 80,
    },
  },
};

exports.createGroup = functions.https.onCall(async (data, context) => {
  try {
    const { spaceId, groupName, userIds } = data;
    const uid = DEV ? DEV_UID : context.auth.uid;

    if (!uid) {
      throw new functions.https.HttpsError("unauthenticated", "User must be authenticated.");
    }

    const spaceRef = db.collection("Spaces").doc(spaceId);
    const groupRef = await spaceRef.collection("Groups").add({
      name: groupName,
      createdBy: uid,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      members: userIds,
    });

    const batch = db.batch();
    for (const userId of userIds) {
      const userRef = spaceRef.collection("Users").doc(userId);
      batch.update(userRef, { groupId: groupRef.id });
    }
    await batch.commit();

    return { groupId: groupRef.id };
  } catch (error) {
    throw new functions.https.HttpsError("internal", error.message);
  }
});
