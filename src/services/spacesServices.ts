// Functions related to the spaces
import { getFunctions, httpsCallable } from "firebase/functions";
import { isLoggedIn } from "./firestoreServices";

import { Group } from "./models";

const functions = getFunctions();

export async function getSpaceData(spaceId: string) {
  try {
    let result = await httpsCallable(functions, "getSpaceData")({ space_id: spaceId });
    return result;
  } catch (error) {
    console.log(error);
  }
}

export async function getUserGroups() {
  if (!isLoggedIn) {
    throw new Error("Not logged in");
  }

  const temp: Group[] = [
    {
      description: "I like to do something",
      leader_id: "1234",
      member_count: 4,
      members: ["hi"],
      name: "hi",
    },
    {
      description: "I like to do something",
      leader_id: "1234",
      member_count: 4,
      members: ["hi"],
      name: "hi",
    },
  ];

  return temp;
}
