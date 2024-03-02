import TutorialCardProps from "./TutorialCardProps";

const TutorialCard = ({ name, avatars, size, enrolled, goal, timeCompat } : TutorialCardProps) => {
  return (
    <div className="flex flex-col  w-56 h-56 pl-3 rounded-[6px] bg-orange-100">
      <h3 className="text-2xl font-bold mb-4">{name}</h3>
      <div className="flex mb-20">
        {avatars.map((avatar) => (
          <img src={avatar} className="w-6 h-6 rounded-xl" />
        ))}
      </div>
      <p className="text-sm font-medium">Size: {enrolled}/{size}</p>
      <p className="text-sm font-medium">Goal: {goal}</p>
      <p className="text-sm font-medium">Time compatibility: {timeCompat}%</p>
    </div>
  );
};

export default TutorialCard;