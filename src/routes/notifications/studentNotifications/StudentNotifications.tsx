import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getUserRequests, getUserSpaces } from "@/services/spacesServices";
import { useEffect } from "react";

interface NotificationInfo {
  name: string;
  img: string;
}

// This needs work
const StudentNotifications = () => {
  useEffect(() => {
    getUserSpaces().then((result: any) => {
      getUserRequests(result.memberSpaces).then((result) => {
        console.log(result);
      });
    });
  }, []);

  const NotificationCard = ({ name, img }: NotificationInfo) => {
    return (
      <div className="flex h-20 w-7/12 items-center justify-center rounded bg-indigo-500">
        <div className="flex w-[95%] items-center justify-between">
          <div className="flex gap-5">
            <Avatar>
              <AvatarImage src={img} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h2 className="text-3xl text-white">{name}</h2>
          </div>
          <h3 className="text-3xl text-white">90%</h3>
        </div>
      </div>
    );
  };
  return (
    <div className="flex h-[90vh] w-full items-center justify-center">
      <div className="flex h-[90%] w-3/4 flex-col justify-between">
        <h1 className="mb-5 text-5xl font-bold">Requests</h1>
        <h2 className="text-4xl font-bold">Incoming</h2>
        <div className="h-1/3 max-h-[450px] overflow-y-auto">
          <div className="flex flex-col gap-10">
            <NotificationCard name={"John Doe"} img={"https://github.com/shadcn.png"} />
            <NotificationCard name={"John Doe"} img={"https://github.com/shadcn.png"} />
            <NotificationCard name={"John Doe"} img={"https://github.com/shadcn.png"} />
            <NotificationCard name={"John Doe"} img={"https://github.com/shadcn.png"} />
          </div>
        </div>
        <h2 className="text-4xl font-bold">Outgoing</h2>
        <div className="h-1/3 max-h-[450px] overflow-y-auto">
          <div className="flex flex-col gap-10">
            <NotificationCard name={"John Doe"} img={"https://github.com/shadcn.png"} />
            <NotificationCard name={"John Doe"} img={"https://github.com/shadcn.png"} />
            <NotificationCard name={"John Doe"} img={"https://github.com/shadcn.png"} />
            <NotificationCard name={"John Doe"} img={"https://github.com/shadcn.png"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentNotifications;
