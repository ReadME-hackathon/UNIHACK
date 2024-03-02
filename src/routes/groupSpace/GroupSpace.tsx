import TutorialCard from "@/components/TutorialCard/TutorialCard";
import TutorialCardProps from "@/components/TutorialCard/TutorialCardProps";

const GroupSpace = () => {
  const tutorialData: TutorialCardProps[] = [
    {
      name: "Tutorial 01",
      avatars: ["https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png", "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"],
      size: 5,
      enrolled: 4,
      goal: "H1",
      timeCompat: 72,
    },
    {
      name: "Tutorial 04",
      avatars: ["https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png", "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"],
      size: 5,
      enrolled: 4,
      goal: "H1",
      timeCompat: 72,
    },
    {
      name: "Tutorial 04",
      avatars: ["https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png", "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"],
      size: 5,
      enrolled: 4,
      goal: "H1",
      timeCompat: 72,
    },
    {
      name: "Tutorial 04",
      avatars: ["https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png", "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"],
      size: 5,
      enrolled: 4,
      goal: "H1",
      timeCompat: 72,
    },
    {
      name: "Tutorial 04",
      avatars: ["https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png", "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"],
      size: 5,
      enrolled: 4,
      goal: "H1",
      timeCompat: 72,
    },
  ]

  return (
    <div className="grid grid-rows-2 grid-flow-col auto-cols-[224px] gap-8 ">
      {tutorialData.map((tute) => (
        <TutorialCard {...tute} />
      ))}
    </div>
  );
}

export default GroupSpace;