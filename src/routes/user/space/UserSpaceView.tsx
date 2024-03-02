import MembersList from "@/components/MembersList/MembersList";
import TutorialCard from "@/components/TutorialCard/TutorialCard";
import TutorialCardProps from "@/components/TutorialCard/TutorialCardProps";
import { getSpaceData } from "@/services/spacesServices";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useParams } from "react-router-dom";
import { Link2Icon } from "@radix-ui/react-icons";

import NewGroupPopup from "@/components/NewGroupPopup/NewGroupPopup";

const UserSpaceView = () => {
  const [displayPopup, setPopup] = useState<boolean>(false)
  const tutorialData: TutorialCardProps[] = [
    {
      name: "Tutorial 01",
      users: [
        "1P1go8lxq9NI16C8SgLQEZAfMKO2",
        "1P1go8lxq9NI16C8SgLQEZAfMKO2",
      ],
      size: 5,
      enrolled: 4,
      goal: "H1",
      timeCompat: 72,
      groupId:"1P1go8lxq9NI16C8SgLQEZAfMKO2"
    },
    {
      name: "Tutorial 04",
      users: [
        "1P1go8lxq9NI16C8SgLQEZAfMKO2",
        "1P1go8lxq9NI16C8SgLQEZAfMKO2",
      ],
      size: 5,
      enrolled: 4,
      goal: "H1",
      timeCompat: 72,
      groupId:"1P1go8lxq9NI16C8SgLQEZAfMKO2"
    },
    {
      name: "Tutorial 04",
      users: [
        "1P1go8lxq9NI16C8SgLQEZAfMKO2",
        "1P1go8lxq9NI16C8SgLQEZAfMKO2",
      ],
      size: 5,
      enrolled: 4,
      goal: "H1",
      timeCompat: 72,
      groupId:"1P1go8lxq9NI16C8SgLQEZAfMKO2"
    },
    {
      name: "Tutorial 04",
      users: [
        "1P1go8lxq9NI16C8SgLQEZAfMKO2",
        "1P1go8lxq9NI16C8SgLQEZAfMKO2",
      ],
      size: 5,
      enrolled: 4,
      goal: "H1",
      timeCompat: 72,
      groupId:"1P1go8lxq9NI16C8SgLQEZAfMKO2"
    },
    {
      name: "Tutorial 04",
      users: [
        "1P1go8lxq9NI16C8SgLQEZAfMKO2",
        "1P1go8lxq9NI16C8SgLQEZAfMKO2",
      ],
      size: 5,
      enrolled: 4,
      goal: "H1",
      timeCompat: 72,
      groupId:"1P1go8lxq9NI16C8SgLQEZAfMKO2"
    },
  ];

  const togglePopup = () => {
    setPopup(!displayPopup);
  };

  // Gets the space ID
  let { spaceId } = useParams();

  if (!spaceId) {
    spaceId = "";
  }

  const roomName = "Tutorial 01" // TEMP: Need to fetch space data with spaceId to get info

  // Grabbing data on load
  useEffect(() => {
    console.log("good luck!");
    getSpaceData(spaceId!);
  }, []);

  // Function for adding new group to space
  const addNewGroupToSpace = () => {
    console.log("New Group Added")
    return 
  }

  return (
    <>
    <div className={`flex w-full flex-row h-screen px-8 py-3 ${displayPopup ? "opacity-30" : ""}`}>
      <div className="w-2/3 pr-8">
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-bold">{`Code: ${spaceId}`}</h3>
          <h1 className="text-6xl font-bold">{roomName}</h1>
          <div className="flex items-center gap-7 my-6">
            <h2 className="text-3xl font-bold ">Groups</h2>
            <Button onClick={togglePopup} className="font-bold bg-neutral-200 hover:bg-neutral-200 rounded">Create Group</Button>
          </div>
        </div>
        <div className="3xl:grid-cols-4 grid grid-flow-row grid-cols-2 gap-4 2xl:grid-cols-3 overflow-y-auto">
          {tutorialData.map((tute) => (
            <TutorialCard {...tute} color={"bg-indigo-100"}/>
          ))}
           <a onClick={togglePopup} className="flex h-56 w-full hover:cursor-pointer flex-col rounded-[6px] bg-neutral-100 justify-center items-center text-center text-3xl leading-relaxed font-bold">
              + <br/>
              Create <br/>
              Group
           </a>
        </div>
      </div>
      <div className="w-1/3 flex flex-col justify-between gap-10 max-h-[950px] min-h-[700px]">
        <MembersList spaceId={spaceId}></MembersList>
        <div className="h-1/6 bg-neutral-100 mb-16 font-bold underline flex gap-5 items-center justify-center text-3xl"><Link2Icon className="scale-150"/>Share Link</div>
      </div>
    </div>
    {displayPopup ? (
        <NewGroupPopup onClose={togglePopup} onSubmit={addNewGroupToSpace}/>
      ): (<></>)}
    </>
  );
};

export default UserSpaceView;
