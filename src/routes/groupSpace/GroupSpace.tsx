import MembersList from "@/components/MembersList/MembersList";
import TutorialCard from "@/components/TutorialCard/TutorialCard";
import { getSpaceData } from "@/services/spacesServices";

import { Space } from "@/services/models";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const GroupSpace = () => {
  const [spaceData, setSpaceData] = useState<Space>();

  // Gets the space ID
  let { spaceId } = useParams();

  // When page initially loads
  useEffect(() => {
    if (!spaceId) {
      spaceId = "";
    }

    getSpaceData(spaceId)
      .then((result) => {
        console.log(result);
        setSpaceData(result?.data as Space);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="flex w-full flex-row p-8">
      <div className="w-2/3 pr-8">
        <div className="3xl:grid-cols-4 grid grid-flow-row grid-cols-2 gap-4 2xl:grid-cols-3 ">
          {spaceData?.subcollections.groups.map((team: any, index) => (
            <TutorialCard
              name={team.name}
              enrolled={team.member_count}
              size={spaceData?.space.max_size || 0}
              description={team.description}
              key={index}
            />
          ))}
        </div>
      </div>
      <div className="w-1/3">
        <MembersList spaceUser={spaceData?.subcollections.users!}></MembersList>
      </div>
    </div>
  );
};

export default GroupSpace;
