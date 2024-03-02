import TutorialCardProps from "./TutorialCardProps";

const TutorialCard = ({ name, avatars, size, enrolled, goal, timeCompat }: TutorialCardProps) => {
  return (
    <div className="flex h-56 w-full flex-col rounded-[6px] bg-orange-100 pl-3">
      <h3 className="mb-4 text-2xl font-bold">{name}</h3>
      <div className="mb-20 flex">
        {avatars.map((avatar) => (
          <img src={avatar} className="h-6 w-6 rounded-xl" />
        ))}
      </div>
      <p className="text-sm font-medium">
        Size: {enrolled}/{size}
      </p>
      <p className="text-sm font-medium">Goal: {goal}</p>
      <p className="text-sm font-medium">Time compatibility: {timeCompat}%</p>
    </div>
  );
};

export default TutorialCard;
