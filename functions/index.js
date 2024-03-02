const admin = require("firebase-admin");
admin.initializeApp();

// Exporting all the functions
module.exports = {
  ...require("./apis/group.js"),
  ...require("./apis/space"),
  ...require("./apis/user_group_interaction"),
  ...require("./apis/user_space_interaction"),
};
