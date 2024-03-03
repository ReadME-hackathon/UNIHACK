import { useEffect, useState } from "react";
import { getUserSpaces, test } from "@/services/spacesServices";
import { Space } from "@/services/models";
import { Link } from "react-router-dom";

const DashboardHome = () => {
  const [userData, setUserData] = useState<Space[]>();

  useEffect(() => {
    getUserSpaces().then((result) => {
      if (result) {
        setUserData(result.data as Space[]);
      }
    });
  }, []);

  return (
    <div className="flex max-w-screen-lg flex-col gap-8 px-16 pt-16">
      <h1 className="text-6xl font-bold">My GroupSpaces</h1>
      <div className="3xl:grid-cols-4 grid grid-flow-row grid-cols-2 gap-4 2xl:grid-cols-3 ">
        {userData?.map((space: any, index) => (
          <SpaceCard title={space.name} id={space.space_id} key={index} />
        ))}
      </div>
      <button onClick={test}>NNN</button>
    </div>
  );
};

interface SpaceCardProps {
  title: string;
  id: string;
}

const SpaceCard = ({ title, id }: SpaceCardProps) => {
  return (
    <Link to={`space/${id}`}>
      <div className="flex h-56 w-full flex-col rounded-[6px] bg-orange-100 p-8">
        <h3 className="text-2xl font-bold">{title}</h3>
      </div>
    </Link>
  );
};

export default DashboardHome;
