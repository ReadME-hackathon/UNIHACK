import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface NotificationInfo {
    name: string,
    img: string,
}

const StudentNotifications = () => {
    const  NotificationCard = ({name,img}:NotificationInfo) => {
        return(
            <div className="bg-indigo-500 h-20 w-7/12 flex items-center justify-center rounded">
                <div className="flex items-center justify-between w-[95%]">
                    <div className="flex gap-5">
                        <Avatar>
                            <AvatarImage src={img} />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <h2 className="text-white text-3xl">{name}</h2>
                    </div>
                    <h3 className="text-white text-3xl">90%</h3>
                </div>
            </div>
        )
    }
    return(
        <div className="w-full h-[90vh] flex justify-center items-center">
            <div className="w-3/4 h-[90%] flex-col flex justify-between">
                <h1 className="text-5xl font-bold mb-5">Requests</h1>
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
    )
}

export default StudentNotifications;