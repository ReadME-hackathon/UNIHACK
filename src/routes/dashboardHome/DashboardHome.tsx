import { useEffect, useState } from "react";
import { getUserSpaces } from "@/services/spacesServices";
import { Space } from "@/services/models";
import { Link } from "react-router-dom";

const DashboardHome = () => {
  const [userData, setUserData] = useState<Space[]>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getUserSpaces();
        if (result) {
          setUserData((result.data as { spacesArray: Space[] }).spacesArray);
          console.log(userData);
        }
      } catch (error) {
        console.error("Error fetching user spaces:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex max-w-screen-lg flex-col gap-8 px-16 pt-16">
      <h1 className="text-6xl font-bold">My GroupSpaces</h1>
      <div className="3xl:grid-cols-4 grid grid-flow-row grid-cols-2 gap-4 2xl:grid-cols-3 ">
        <SpaceCard id={"SynQEMskRLe8wNncI0rw"} title="Spanish Class" members="32 Members" key={1} />
        <SpaceCard
          id={"ZbhqwjcGy36k6yYzurO8"}
          title="Computing Class"
          members="16 Members"
          key={2}
        />
        <SpaceCard
          id={"rFyPzMBBX22K1jGTV6bc"}
          title="Algoritmics 10001"
          members="22 Members"
          key={3}
        />
      </div>
    </div>
  );
};

interface SpaceCardProps {
  title: string;
  id: string;
  members: string;
}

const SpaceCard = ({ id, title, members }: SpaceCardProps) => {
  return (
    <Link to={`${id}`}>
      <div className="flex h-56 w-full flex-col rounded-[6px] bg-orange-100 p-8">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p>{members}</p>
      </div>
    </Link>
  );
};

export default DashboardHome;
