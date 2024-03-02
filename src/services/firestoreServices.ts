// import { db } from "../firebase";
import { auth } from "../firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();

export function isLoggedIn() {
  const user = auth.currentUser;

  if (user) {
    console.log("logged IN");
    return true;
  } else {
    console.log("logged out");
    return false;
  }
}

export async function signInWithGoogle() {
  try {
    const results = await signInWithPopup(auth, provider);
    console.log(results);

    localStorage.setItem("displayName", results.user.displayName || "");
    localStorage.setItem("photoURL", results.user.photoURL || "");

    return true;
  } catch (error) {
    console.error("Error signing in with Google:", error);
    return false;
  }
}
