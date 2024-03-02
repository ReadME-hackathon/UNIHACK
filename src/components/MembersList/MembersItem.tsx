import { MembersItemModel } from "./Members.models";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { HoverCard } from "@/components/ui/hover-card";

const MembersItem = ({ photoUrl, name, status, description }: MembersItemModel) => {
  return (
    <HoverCard>
        <div className="flex h-16 w-full flex-row items-center gap-4 rounded bg-white p-4 shadow-sm transition-all hover:shadow-md">
          <Avatar>
            <AvatarImage src={photoUrl} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <span className="font-bold">{name}</span>
          <span className="ml-auto">{status}</span>
        </div>
    </HoverCard>
  );
};

export default MembersItem;
