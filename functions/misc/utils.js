const { onCall, HttpsError } = require("firebase-functions/v2/https");

// When true, DEV_UID is used to authenticate
const DEV = false;
// User ID used for auth during development
const DEV_UID = "1P1go8lxq9NI16C8SgLQEZAfMKO2";

// Function to handle authentication and parameter checking
function handleAuthAndParams(data, requiredParams) {
  const uid = handleAuth(data);
  handleParams(data, requiredParams);
  return uid;
}

function handleAuth(data) {
  // Authentication
  if (!("uid" in data)) {
    throw new HttpsError("unauthenticated", "User id is missing.");
  }

  return data.uid;
}

function handleParams(data, requiredParams) {
  // Parameters check
  for (const param of requiredParams) {
    if (!(param in data)) {
      throw new HttpsError("invalid-argument", `Missing ${param}.`);
    }
  }
}

// Wrapper function to configure CORS options for callable functions
function onCallWrapper(handler) {
  return onCall({ cors: ["https://findmygroup.netlify.app", "https://unihack-36dcb.web.app"], region: "australia-southeast1" }, handler);
}

module.exports = { DEV, DEV_UID, handleAuthAndParams, handleParams, handleAuth, onCallWrapper };
