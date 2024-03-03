import { MembersItemModel } from "./Members.models";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { HoverCard, HoverCardTrigger } from "@/components/ui/hover-card";

const MembersItem = ({ photoUrl, name, status }: MembersItemModel) => {
  if (name === "" && photoUrl === "" && status === "") {
    return (
      <HoverCard>
        <HoverCardTrigger>
          <div className="flex h-16 w-full flex-row items-center gap-4 rounded bg-white py-4 pl-4 pr-8 shadow-sm transition-all">
            <Avatar>
              <div className="h-16 w-16 rounded-full bg-gray-100"></div>
            </Avatar>
            <span className="h-1/2 w-full bg-gray-100"></span>
          </div>
        </HoverCardTrigger>
        {/*<HoverCardContent className=" backdrop-blur-sm">
        <div> This is a test feature {description.summary}</div>
      </HoverCardContent>*/}
      </HoverCard>
    );
  }
  return (
    <HoverCard>
      <HoverCardTrigger>
        <div className="flex h-16 w-full flex-row items-center gap-4 rounded bg-white py-4 pl-4 pr-8 shadow-sm transition-all">
          <Avatar>
            <AvatarImage src={photoUrl} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <span className="font-bold">{name}</span>
          <span className="ml-auto">{status}</span>
        </div>
      </HoverCardTrigger>
      {/*<HoverCardContent className=" backdrop-blur-sm">
        <div> This is a test feature {description.summary}</div>
      </HoverCardContent>*/}
    </HoverCard>
  );
};

export default MembersItem;
