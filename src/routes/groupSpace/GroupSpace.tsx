import MembersList from "@/components/MembersList/MembersList";
import TutorialCard from "@/components/TutorialCard/TutorialCard";
import TutorialCardProps from "@/components/TutorialCard/TutorialCardProps";
import { getSpaceData } from "@/services/spacesServices";

import { Space, Group } from "@/services/models";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const GroupSpace = () => {
  const [groupList, setGroupList] = useState<Group[]>([]);
  const [spaceData, setSpaceData] = useState<Space>();

  // Gets the space ID
  let { spaceId } = useParams();

  // When page initially loads
  useEffect(() => {
    if (!spaceId) {
      spaceId = "";
    }

    console.log("good luck!");
    getSpaceData(spaceId)
      .then((result) => {
        console.log(result);
        setSpaceData(result?.data as Space);
        if (!spaceData) {
          setGroupList(spaceData!.subcollections.groups);
        }
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="flex w-full flex-row p-8">
      <div className="w-2/3 pr-8">
        <div className="3xl:grid-cols-4 grid grid-flow-row grid-cols-2 gap-4 2xl:grid-cols-3 ">
          {groupList.map((team: any) => (
            <TutorialCard
              name={team.name}
              enrolled={team.member_count}
              size={spaceData?.space.max_size || 0}
              description={team.description}
            />
          ))}
        </div>
      </div>
      <div className="w-1/3">
        <MembersList spaceId={spaceId}></MembersList>
      </div>
    </div>
  );
};

export default GroupSpace;
