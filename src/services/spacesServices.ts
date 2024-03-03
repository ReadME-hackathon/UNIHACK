// Functions related to the spaces
import { getFunctions, httpsCallable } from "firebase/functions";
import { isLoggedIn } from "./firestoreServices";
import { CreateNewSpace } from "./models";
import { auth } from "../firebase";

const functions = getFunctions();

export async function getSpaceData(spaceId: string) {
  try {
    let result = await httpsCallable(functions, "getSpaceData")({ space_id: spaceId });
    return result;
  } catch (error) {
    console.log(error);
  }
}

export async function getUserSpaces() {
  if (!isLoggedIn) {
    throw new Error("Not logged in");
  }

  try {
    let result = await httpsCallable(functions, "getMemberSpaces")({ uid: auth.currentUser?.uid });
    return result;
  } catch (error) {
    console.log(error);
  }
}

export async function test() {
  const result = await httpsCallable(
    functions,
    "getAllUserSpaces",
  )({ uid: "1P1go8lxq9NI16C8SgLQEZAfMKO2" });
  console.log(result);
}

export async function addUserToSpace() {
  const sample = {
    name: "Emma",
    features: [
      {
        name: "hobbies",
        data: ["Reading", "Writing"],
      },
      {
        name: "academic_year",
        data: "First Year",
      },
      {
        name: "average_score",
        data: 85,
      },
      {
        name: "schedule",
        data: {
          Monday: ["09:00", "10:00"],
          Tuesday: ["13:00", "14:00"],
          Friday: ["21:00"],
        },
      },
    ],
  };
  try {
    let result = await httpsCallable(
      functions,
      "addUserToSpace",
    )({ space_id: "SynQEMskRLe8wNncI0rw", user_data: sample });
    return result;
  } catch (error) {
    console.log(error);
  }
}

export async function createNewSpace(data: CreateNewSpace) {
  try {
    let result = await httpsCallable(
      functions,
      "createSpace",
    )({
      space_data: {
        name: data.roomName,
        min_size: data.minSize,
        max_size: data.maxSize,
        features: data.features,
      },
      uid: auth.currentUser?.uid,
    });

    console.log("DONE");
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
