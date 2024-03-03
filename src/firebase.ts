import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
export const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "unihack-36dcb.firebaseapp.com",
  projectId: "unihack-36dcb",
  storageBucket: "unihack-36dcb.appspot.com",
  messagingSenderId: "1013964470",
  appId: "1:1013964470:web:00a61d7e0ae6970d209017",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export const auth = getAuth(app);

export const functions = getFunctions(app);

// // Dev Only
if (process.env.NODE_ENV !== "production") {
  connectFunctionsEmulator(functions, "127.0.0.1", 5001);
}
