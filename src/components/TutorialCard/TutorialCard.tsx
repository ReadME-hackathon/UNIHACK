import { Button } from "../ui/button";
import TutorialCardProps from "./TutorialCardProps";
import { useState } from "react";
import { useLocation } from "react-router-dom";

interface TutorialCardColor {
  color: string;
}

interface TutorialCardCombinedProps extends TutorialCardProps, TutorialCardColor {}

const TutorialCard = ({
  name,
  users,
  size,
  enrolled,
  goal,
  timeCompat,
  color,
  groupId,
}: TutorialCardCombinedProps) => {
  const [opened, setOpened] = useState<boolean>(false);
  const currentPath = useLocation().pathname;
  const isAdmin = currentPath.split("/").includes("admin");
  const toggleOpened = () => {
    setOpened(!opened);
  };

  // Fetch user data using users array of Id's
  console.log(users);
  const usersData = [
    { name: "John Smith" },
    { name: "John Smith" },
    { name: "John Smith" },
    { name: "John Smith" },
  ];

  // Need to change logic to edit backend data
  const deleteGroup = (event: React.MouseEvent<HTMLButtonElement>) => {
    alert("Group deleted!");
    event.stopPropagation();
  };

  const requestToGroup = (event: React.MouseEvent<HTMLButtonElement>) => {
    alert("Request sent!");
    event.stopPropagation();
  };

  return (
    <div
      key={groupId}
      className={`z-0 flex h-56 w-full flex-col rounded-[6px] ${color} justify-between px-5 py-3 hover:cursor-pointer`}
      onClick={toggleOpened}
    >
      {!isAdmin ? (
        !opened ? (
          <>
            <h3 className="mb-4 text-3xl font-bold">{name}</h3>
            <div className="mb-14 flex">
              {usersData.map((user) => (
                <div key={user.name} className="h-6 w-6 rounded-xl bg-gray-600" />
              ))}
            </div>
            <p className="text-sm font-medium">
              Size: {enrolled}/{size}
            </p>
            <p className="text-sm font-medium">Goal: {goal}</p>
            <p className="text-sm font-medium">Time compatibility: {timeCompat}%</p>
          </>
        ) : (
          <div className="flex h-full flex-col justify-between">
            <div className="max-h-1/2 m-3 grid grid-cols-2">
              {usersData.map((user, i) => (
                <div key={i} className="mb-2 flex gap-3">
                  <div className="h-6 w-6 rounded-xl bg-gray-600" />
                  <p className="text-base">{user.name}</p>
                </div>
              ))}
            </div>
            <Button
              onClick={(e) => requestToGroup(e)}
              className="z-20 rounded bg-indigo-200 hover:bg-indigo-300"
            >
              Request to Join
            </Button>
          </div>
        )
      ) : !opened ? (
        <>
          <h3 className="mb-4 text-3xl font-bold">{name}</h3>
          <div className="mb-14 flex">
            {usersData.map((user) => (
              <div key={user.name} className="h-6 w-6 rounded-xl bg-gray-600" />
            ))}
          </div>
          <p className="text-sm font-medium">
            Size: {enrolled}/{size}
          </p>
          <p className="text-sm font-medium">Goal: {goal}</p>
          <p className="text-sm font-medium">Time compatibility: {timeCompat}%</p>
        </>
      ) : (
        <div className="flex h-full flex-col justify-between">
          <div className="max-h-1/2 m-3 grid grid-cols-2">
            {usersData.map((user, i) => (
              <div key={i} className="mb-2 flex gap-3">
                <div className="h-6 w-6 rounded-xl bg-gray-600" />
                <p className="text-base">{user.name}</p>
              </div>
            ))}
          </div>
          <Button
            onClick={(e) => deleteGroup(e)}
            className="z-20 rounded bg-orange-200 hover:bg-orange-300"
          >
            Delete Group
          </Button>
        </div>
      )}
    </div>
  );
};

export default TutorialCard;
