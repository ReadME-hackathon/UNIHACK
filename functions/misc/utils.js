const { HttpsError } = require("firebase-functions/v2/https");

// When true, DEV_UID is used to authenticate
const DEV = true;
// User ID used for auth during development
const DEV_UID = "1P1go8lxq9NI16C8SgLQEZAfMKO2";

// Function to handle authentication and parameter checking
function handleAuthAndParams(context, data, requiredParams) {
  const uid = handleAuth(data, context);
  handleParams(data, requiredParams);
  return uid;
}

function handleAuth(data, context) {
  // Authentication
  const uid = DEV ? DEV_UID : context.auth.uid;
  if (!uid) {
    throw new HttpsError("unauthenticated", "Not authed.");
  }

  return uid;
}

function handleParams(data, requiredParams) {
  // Parameters check
  for (const param of requiredParams) {
    if (!(param in data)) {
      throw new HttpsError("invalid-argument", `Missing ${param}.`);
    }
  }
}

module.exports = { DEV, DEV_UID, handleAuthAndParams, handleParams, handleAuth };
