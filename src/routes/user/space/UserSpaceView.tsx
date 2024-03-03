import MembersList from "@/components/MembersList/MembersList";
import TutorialCard from "@/components/TutorialCard/TutorialCard";
import { getSpaceData } from "@/services/spacesServices";

import { Space } from "@/services/models";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link2Icon } from "@radix-ui/react-icons";
import NewGroupPopup from "@/components/NewGroupPopup/NewGroupPopup";

const UserSpaceView = () => {
  const [spaceData, setSpaceData] = useState<Space>();
  const [displayPopup, setPopup] = useState<boolean>(false)
  const [spaceName, setSpaceName] = useState("");

  const togglePopup = () => {
    setPopup(!displayPopup);
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href)
    alert("Link copied!")
  }

  // Gets the space ID
  let { space_id } = useParams();

  // When page initially loads
  useEffect(() => {
    if (!space_id) {
      space_id = "";
    }

    getSpaceData(space_id)
      .then((result) => {
        console.log(result);
        setSpaceName((result?.data as { space: { name: string } }).space.name);
        setSpaceData(result?.data as Space);
      })
      .catch((error: unknown) => {
        console.log(error);
      });
  }, []);

  return (
    <>
    <div className={`flex w-full flex-row h-screen px-8 py-3 ${displayPopup ? "opacity-30" : ""}`}>
      <div className="w-2/3 pr-8">
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-bold">{`Code: ${space_id}`}</h3>
          <h1 className="text-6xl font-bold">{spaceName}</h1>
          <div className="flex items-center gap-7 my-6">
            <h2 className="text-3xl font-bold ">Groups</h2>
            <Button onClick={togglePopup} className="font-bold bg-neutral-200 hover:bg-neutral-200 rounded">Create Group</Button>
          </div>
        </div>
        <div className="3xl:grid-cols-4 grid grid-flow-row grid-cols-2 gap-4 2xl:grid-cols-3 overflow-y-auto">
          {spaceData?.subcollections.groups
            ? spaceData?.subcollections.groups.map((team: any, index) => (
                <TutorialCard
                  name={team.name}
                  enrolled={team.member_count}
                  size={spaceData?.space.max_size || 0}
                  description={team.description}
                  key={index}
                />
              ))
            : <></>}
           <a onClick={togglePopup} className="flex h-56 w-full hover:cursor-pointer flex-col rounded-[6px] bg-neutral-100 justify-center items-center text-center text-3xl leading-relaxed font-bold">
              + <br/>
              Create <br/>
              Group
           </a>
        </div>
      </div>
      <div className="w-1/3 flex flex-col justify-between gap-10 max-h-[950px] min-h-[700px]">
        <MembersList spaceUser={[]}></MembersList>
        <div onClick={copyLink} className="hover:cursor-pointer h-1/6 bg-neutral-100 mb-16 font-bold underline flex gap-5 items-center justify-center text-3xl"><Link2Icon className="scale-150 mt-2"/>Share Link</div>
      </div>
    </div>
    {displayPopup ? (
      <NewGroupPopup onClose={togglePopup} onSubmit={()=>{}}/>
      ): (<></>)}
    </>
  );
};

export default UserSpaceView;








