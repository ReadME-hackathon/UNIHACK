// When true, DEV_UID is used to authenticate
const DEV = true;
// User ID used for auth during development
const DEV_UID = "1P1go8lxq9NI16C8SgLQEZAfMKO2";

module.exports = { DEV, DEV_UID };

// Functions related to spaces.
module.exports = {
  ...require("./apis/spaces.js"),
};
