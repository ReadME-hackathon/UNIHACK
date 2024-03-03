import { applyToGroup, getGroupData } from "@/services/spacesServices";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const TutorialCardDetail = () => {
  let { group_id } = useParams();
  let { space_id } = useParams();

  const [groupData, setGroupData] = useState<any>();

  useEffect(() => {
    getGroupData(group_id!, space_id!).then((result) => {
      setGroupData(result.data);
      console.log(groupData);
    });
  }, []);

  const onApply = () => {
    applyToGroup(group_id!, space_id!).then((result) => {
      console.log(result);
    });
  };

  return (
    <div className="flex flex-col gap-4 p-16">
      {groupData ? (
        <>
          <h1 className=" text-4xl font-bold">{groupData.group.name}</h1>
          <p>{`${groupData.group.members.length}/${groupData.group.member_count} Members`}</p>
          <p>{groupData.group.description}</p>
          <div>
            <button
              className=" rounded bg-orange-500 p-4 font-bold text-neutral-50 transition-all hover:scale-105"
              onClick={onApply}
            >
              Apply to Group
            </button>
          </div>
        </>
      ) : (
        "Loading..."
      )}
    </div>
  );
};

export default TutorialCardDetail;
