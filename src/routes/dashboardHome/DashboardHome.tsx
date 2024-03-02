import TutorialCard from "@/components/TutorialCard/TutorialCard";
import { useEffect, useState } from "react";
import { getUserGroups } from "@/services/spacesServices";
import { Group } from "@/services/models";

const DashboardHome = () => {
  const [userData, setUserData] = useState<Group[]>();

  useEffect(() => {
    getUserGroups().then((result) => {
      if (result) {
        setUserData(result);
      }
    });
  }, []);

  return (
    <div className="flex max-w-screen-lg flex-col gap-8 px-16 pt-16">
      <h1 className="text-6xl font-bold">My GroupSpaces</h1>
      <div className="3xl:grid-cols-4 grid grid-flow-row grid-cols-2 gap-4 2xl:grid-cols-3 ">
        {userData?.map((team: any, index) => (
          <TutorialCard
            name={team.name}
            enrolled={team.member_count}
            description={team.description}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default DashboardHome;
