// When true, DEV_UID is used to authenticate
const DEV = true;
// User ID used for auth during development
const DEV_UID = "1P1go8lxq9NI16C8SgLQEZAfMKO2";

const groups = require("./apis/groups");
const spaces = require("./apis/spaces");
const users = require("./apis/users");

exports.groups = groups.createGroup;

const sampleSpaceData = {
  name: "Space Sample",
  minSize: 1,
  maxSize: 3,
  features: {
    gradeTarget: {
      // use percentages for easier calculations
      type: "number",
    },
    hobbies: {
      type: "string[]",
      optional: true,
    },
  },
};

const sampleGroupData = {
  name: "Group Sample",
  privacy: "private",
  attributesRequirement: {
    gradeTarget: {
      min: 80,
    },
  },
};

const sampleUserData = {
  name: "User Sample",
  userName: "user",
  grade: 75,
  hobbies: ["tennis", "music"],
};

// createSpace(spaceData)
exports.spaces = spaces.createSpace;
// updateSpaceData(spaceID, spaceData)
exports.spaces = spaces.updateSpaceData;
// deleteSpace(spaceID)
exports.spaces = spaces.deleteSpace;
// joinSpace(spaceID, userID)
exports.spaces = spaces.joinSpace;
// getTeacherSpaces(userID)
exports.spaces = spaces.getTeacherSpaces;

// NOTE: Students will have their own userID once singed in via Google.
// addUserToSpace(userID, spaceID, features)
exports.users = users.addUserToSpace;
// removeUserFromSpace(userID, spaceID)
exports.users = users.removeUserFromSpace;
// updateUserSpaceData(userID, features)
exports.users = users.updateUserSpaceFeatures;
// userRequestPrivateGroup(userID, groupID)
exports.users = users.userRequestPrivateGroup;
// userInvitedToGroup(invitedID, groupID)
exports.users = users.userInvitedToGroup;
// processRequestDecision(requestID, approved?)
exports.users = users.processRequestDecision;
// userJoinGroup(userID, groupID)
exports.users = users.userJoinGroup;
// userLeaveGroup(userID, groupID, reason)
exports.users = users.userLeaveGroup;
// getUserGroup(userID, spaceID)
exports.users = users.getUserGroup;

// createGroupInSpace(leaderID, spaceID, groupData)
exports.groups = groups.createGroupInSpace;
// removeGroup(groupID)
exports.groups = groups.removeGroup;
// updateGroupData(groupID, groupData)
exports.groups = groups.updateGroupData;

// findTopMatches(userID)
exports.match = match.findTopMatches;
