import { useNavigate } from "react-router-dom";
import TutorialCardProps from "./TutorialCardProps";

const TutorialCard = ({ name, size, enrolled, description, id }: TutorialCardProps) => {
  const navigate = useNavigate();
  const onTutorialClick = () => {
    navigate(id);
  };

  return (
    <div
      className="flex h-56 w-full flex-col rounded-[6px] bg-orange-100 p-8"
      onClick={onTutorialClick}
    >
      <h3 className="text-2xl font-bold">{name}</h3>
      <p className="text-sm font-medium">
        {size ? `Size: ${enrolled}/${size}` : `${enrolled} Members`}
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
