import MembersItem from "./MembersItem";
import { SpaceUser } from "@/services/models";

interface props {
  spaceUser: SpaceUser[];
}

const MembersList = ({ spaceUser }: props) => {
  if (!spaceUser || !Array.isArray(spaceUser)) {
    // Return null or an appropriate fallback component
    return null; // or <div>No members available</div>
  }

  return (
    <div className="flex w-full flex-col rounded bg-neutral-100 p-8">
      <h3 className="mb-4 text-2xl font-bold">Members</h3>
      <div className="flex flex-col gap-4 ">
        {spaceUser.map((value) => (
          <MembersItem
            name={value.name}
            photoUrl={value.user_id}
            status="Full"
            description={{ summary: "hi" }}
          ></MembersItem>
        ))}
      </div>
    </div>
  );
};

export default MembersList;
