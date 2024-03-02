import MembersList from "@/components/MembersList/MembersList";
import { useParams } from "react-router-dom";

const GroupSpace = () => {
  let { spaceId } = useParams();

  if (!spaceId) {
    spaceId = "";
  }

  return (
    <div className="flex w-full flex-row p-8">
      <div className="w-2/3">
        <p>{spaceId}</p>
      </div>
      <div className="w-1/3">
        <MembersList spaceId={spaceId}></MembersList>
      </div>
    </div>
  );
};

export default GroupSpace;
