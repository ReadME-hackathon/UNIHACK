// Functions related to the spaces
import { getFunctions, httpsCallable } from "firebase/functions";
import { CreateNewSpace } from "./models";
import { app, auth } from "../firebase";

const functions = getFunctions(app, "australia-southeast1");

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
        name: "Team 1",
        description: "Aiming for an H1 please join if interested",
        member_count: 5,
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

export async function getGroupData(groupId: string, spaceId: string) {
  try {
    let result = await httpsCallable(
      functions,
      "getGroupData",
    )({
      space_id: spaceId,
      group_id: groupId,
      uid: auth.currentUser?.uid,
    });

    console.log("DONE");
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function applyToGroup(groupId: string, spaceId: string) {
  try {
    let result = await httpsCallable(
      functions,
      "userRequestToJoinGroup",
    )({
      space_id: spaceId,
      group_id: groupId,
      uid: auth.currentUser?.uid,
    });

    console.log("DONE");
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
