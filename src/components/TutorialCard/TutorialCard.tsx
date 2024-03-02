import TutorialCardProps from "./TutorialCardProps";

const TutorialCard = ({ name, size, enrolled, description }: TutorialCardProps) => {
  return (
    <div className="flex h-56 w-full flex-col rounded-[6px] bg-orange-100 p-8">
      <h3 className="text-2xl font-bold">{name}</h3>
      <p className="text-sm font-medium">
        Size: {enrolled}/{size}
      </p>
      {/* <div className="mb-20 flex">
        {avatars.map((avatar) => (
          <img src={avatar} className="h-6 w-6 rounded-xl" />
        ))}
      </div> */}
      <div className="mt-auto">
        <p className="text-sm font-medium">{description}</p>
      </div>
    </div>
  );
};

export default TutorialCard;
