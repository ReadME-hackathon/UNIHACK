// import { db } from "../firebase";
import { app } from "../firebase";
import { getAuth } from "firebase/auth";

export function isLoggedIn() {
  const auth = getAuth(app);

  const user = auth.currentUser;

  if (user) {
    return true;
  } else {
    return false;
  }
}
