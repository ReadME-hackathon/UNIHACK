import MembersItem from "./MembersItem";
import { SpaceUser } from "@/services/models";
import { Button } from "@/components/ui/button";
import { useParams } from "react-router-dom";
import { addUserToSpace } from "@/services/spacesServices";

interface props {
  spaceUser: SpaceUser[];
}

const MembersList = ({ spaceUser }: props) => {
  let { space_id } = useParams();

  const onUserJoin = () => {
    if (!space_id) {
      space_id = "";
    }

    addUserToSpace(space_id);
  };

  if (!spaceUser || !Array.isArray(spaceUser) || spaceUser.length === 0) {
    // Return null or an appropriate fallback component
    return (
      <div className="flex h-4/5 w-full flex-col gap-5 overflow-y-auto rounded bg-neutral-100 p-8">
        <div>
          <h3 className="mb-4 text-4xl font-bold">Members</h3>
          <Button variant="outline" onClick={onUserJoin}>
            Join
          </Button>
        </div>
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
    );
  }

  return (
    <div className="flex h-4/5 w-full flex-col gap-5 overflow-y-auto rounded bg-neutral-100 p-8">
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
