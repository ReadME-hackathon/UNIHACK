// import { db } from "../firebase";
import { app } from "../firebase";
import { getAuth, signInWithCredential } from "firebase/auth";
// import { useNavigate } from "react-router-dom";

export function isLoggedIn() {
  const auth = getAuth(app);

  const user = auth.currentUser;

  if (user) {
    console.log("logged IN");
    return true;
  } else {
    console.log("logged out");
    return false;
  }
}

export async function handleGoogleLoginSuccess(credentialResponse: any) {
  console.log(credentialResponse);
  try {
    const token = credentialResponse.credential;
    const auth = getAuth(app);

    // Sign in with the Google OAuth credential
    await signInWithCredential(auth, token);

    // // Redirect the user to the desired page after successful authentication
    // navigate("/");
  } catch (error) {
    console.error("Firebase authentication error:", error);
  }
}
