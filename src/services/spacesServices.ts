// Functions related to the spaces
import { getFunctions, httpsCallable } from "firebase/functions";
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
  try {
    let result = await httpsCallable(
      functions,
      "getAllUserSpaces",
    )({
      uid: auth.currentUser?.uid,
    });

    console.log("DONE");
    console.log(result.data);

    return result.data;
  } catch (error) {
    console.log(error);
    throw error;
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

export async function createNewGroup(id: string) {
  try {
    let result = await httpsCallable(
      functions,
      "createGroupInSpace",
    )({
      space_id: id,
      group_data: {
        name: "The best team",
        description: "We are aiming high",
        member_count: 1,
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

export async function addUserToSpace(id: string) {
  try {
    const name = localStorage.getItem("displayName");
    const photo = localStorage.getItem("photoURL");

    let result = await httpsCallable(
      functions,
      "addUserToSpace",
    )({
      space_id: id,
      user_data: {
        name: name,
        photo: photo,
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

export async function getUserList(id: string) {
  try {
    let result = await httpsCallable(
      functions,
      "addUserToSpace",
    )({
      space_id: id,
      user_data: {
        name: "James",
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
