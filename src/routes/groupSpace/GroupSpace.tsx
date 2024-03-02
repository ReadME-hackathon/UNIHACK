import MembersList from "@/components/MembersList/MembersList";
import TutorialCard from "@/components/TutorialCard/TutorialCard";
import TutorialCardProps from "@/components/TutorialCard/TutorialCardProps";
import { getSpaceData } from "@/services/spacesServices";

import { useParams } from "react-router-dom";

const GroupSpace = () => {
  const tutorialData: TutorialCardProps[] = [
    {
      name: "Tutorial 01",
      avatars: [
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
      ],
      size: 5,
      enrolled: 4,
      goal: "H1",
      timeCompat: 72,
    },
    {
      name: "Tutorial 04",
      avatars: [
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
      ],
      size: 5,
      enrolled: 4,
      goal: "H1",
      timeCompat: 72,
    },
    {
      name: "Tutorial 04",
      avatars: [
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
      ],
      size: 5,
      enrolled: 4,
      goal: "H1",
      timeCompat: 72,
    },
    {
      name: "Tutorial 04",
      avatars: [
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
      ],
      size: 5,
      enrolled: 4,
      goal: "H1",
      timeCompat: 72,
    },
    {
      name: "Tutorial 04",
      avatars: [
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
      ],
      size: 5,
      enrolled: 4,
      goal: "H1",
      timeCompat: 72,
    },
  ];

  // Gets the space ID
  let { spaceId } = useParams();

  if (!spaceId) {
    spaceId = "";
  }

  console.log("good luck!");
  getSpaceData(spaceId)
    .then((result) => {
      console.log(result);
      result;
    })
    .catch((error: any) => {
      console.log(error);
    });

  return (
    <div className="flex w-full flex-row p-8">
      <div className="w-2/3 pr-8">
        <div className="3xl:grid-cols-4 grid grid-flow-row grid-cols-2 gap-4 2xl:grid-cols-3 ">
          {tutorialData.map((tute) => (
            <TutorialCard {...tute} />
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
