import MembersItem from "./MembersItem";
import { SpaceUser } from "@/services/models";

interface props {
  spaceUser: SpaceUser[];
}

const MembersList = ({ spaceUser }: props) => {
  if (!spaceUser || !Array.isArray(spaceUser) || spaceUser.length === 0) {
    // Return null or an appropriate fallback component
    return (
      <div className="flex w-full flex-col rounded bg-neutral-100 p-8 h-4/5 overflow-y-auto gap-5">
      <h3 className="mb-4 text-4xl font-bold">Members</h3>
      <div className="flex flex-col gap-4 ">
        <MembersItem
          name={""}
          photoUrl={""}
          status=""
          description={{ summary: "" }}
          ></MembersItem>
                  <MembersItem
          name={""}
          photoUrl={""}
          status=""
          description={{ summary: "" }}
          ></MembersItem>
                  <MembersItem
          name={""}
          photoUrl={""}
          status=""
          description={{ summary: "" }}
          ></MembersItem>
                  <MembersItem
          name={""}
          photoUrl={""}
          status=""
          description={{ summary: "" }}
          ></MembersItem>
      </div>
    </div>
    )
  }

  return (
    <div className="flex w-full flex-col rounded bg-neutral-100 p-8 h-4/5 overflow-y-auto gap-5">
      <h3 className="mb-4 text-4xl font-bold">Members</h3>
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
