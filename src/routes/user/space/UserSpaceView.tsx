import MembersList from "@/components/MembersList/MembersList";
import TutorialCard from "@/components/TutorialCard/TutorialCard";
import { createNewGroup, getSpaceData } from "@/services/spacesServices";

import { Space } from "@/services/models";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link2Icon } from "@radix-ui/react-icons";
import NewGroupPopup from "@/components/NewGroupPopup/NewGroupPopup";

const UserSpaceView = () => {
  const [spaceData, setSpaceData] = useState<Space>();
  const [displayPopup, setPopup] = useState<boolean>(false);
  const [spaceName, setSpaceName] = useState("");

  const togglePopup = () => {
    setPopup(!displayPopup);
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copied!");
  };

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
      <div
        className={`flex h-screen w-full flex-row px-8 py-3 ${displayPopup ? "opacity-30" : ""}`}
      >
        <div className="w-2/3 pr-8">
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-bold">{`Code: ${space_id}`}</h3>
            <h1 className="text-6xl font-bold">{spaceName}</h1>
            <div className="my-6 flex items-center gap-7">
              <h2 className="text-3xl font-bold ">Groups</h2>
              <Button
                onClick={togglePopup}
                className="rounded bg-neutral-200 font-bold hover:bg-neutral-200"
              >
                Create Group
              </Button>
            </div>
          </div>
          <div className="3xl:grid-cols-4 grid grid-flow-row grid-cols-2 gap-4 overflow-y-auto 2xl:grid-cols-3">
            {spaceData?.subcollections.groups ? (
              spaceData?.subcollections.groups.map((team: any, index) => (
                <TutorialCard
                  name={team.name}
                  enrolled={team.member_count}
                  size={spaceData?.space.max_size || 0}
                  description={team.description}
                  key={index}
                />
              ))
            ) : (
              <></>
            )}
            <a
              onClick={togglePopup}
              className="flex h-56 w-full flex-col items-center justify-center rounded-[6px] bg-neutral-100 text-center text-3xl font-bold leading-relaxed hover:cursor-pointer"
            >
              + <br />
              Create <br />
              Group
            </a>
          </div>
        </div>
        <div className="flex max-h-[950px] min-h-[700px] w-1/3 flex-col justify-between gap-10">
          <MembersList spaceUser={[]}></MembersList>
          <div
            onClick={copyLink}
            className="mb-16 flex h-1/6 items-center justify-center gap-5 bg-neutral-100 text-3xl font-bold underline hover:cursor-pointer"
          >
            <Link2Icon className="mt-2 scale-150" />
            Share Link
          </div>
        </div>
      </div>
      {displayPopup ? (
        <NewGroupPopup
          onClose={togglePopup}
          onSubmit={() => {
            createNewGroup(space_id).then(() => {
              window.location.reload();
            });
          }}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default UserSpaceView;
