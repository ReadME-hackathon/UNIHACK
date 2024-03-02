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
  signInWithPopup(auth, provider)
    .then((results) => {
      console.log(results);
      return true;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
}
