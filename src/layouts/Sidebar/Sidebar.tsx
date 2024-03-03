import { useEffect, useRef } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ExitIcon, HomeIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";
import { BellIcon } from "lucide-react";
import { googleLogout } from "@/services/firestoreServices";
import { URLs } from "@/main.tsx";

// Define the type for the onSignOut prop

const Sidebar = () => {
  let sidebarHeight: string;
  sidebarHeight = `${window.innerHeight - 56}px`;

  const sidebarRef = useRef<HTMLDivElement>(null);
  const name = localStorage.getItem("displayName");
  const photoURL = localStorage.getItem("photoURL") || "/";

  useEffect(() => {
    if (sidebarRef.current) {
      sidebarRef.current.style.height = sidebarHeight;
    }
  }, []);

  const logout = async () => {
    try {
      await googleLogout();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex w-72 flex-col gap-8 bg-neutral-800 px-8 py-12" ref={sidebarRef}>
      <div className="flex flex-row items-center gap-2 text-orange-300">
        <Avatar>
          <AvatarImage src={photoURL} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <span className=" font-bold">{name}</span>
      </div>
      <div className="flex flex-col gap-2">
        <Link to={`/${URLs.app}`} className="flex flex-row items-center p-4 text-orange-300">
          <HomeIcon className="mr-2 h-4 w-4" /> Dashboard
        </Link>
        {/*TODO: The following should only show up when the user is in a space.*/}
        {/*<Link to="/" className="flex flex-row items-center p-4 text-orange-300">*/}
        {/*  <PersonIcon className="mr-2 h-4 w-4" /> Profile*/}
        {/*</Link>*/}
        <Link
          to={`/${URLs.app}/notifications`}
          className="flex flex-row items-center p-4 text-orange-300"
        >
          <BellIcon className="mr-2 h-4 w-4" /> Notifications
        </Link>
      </div>
      <div className=" mt-auto">
        <button onClick={logout} className="flex flex-row items-center p-4 text-orange-300">
          <ExitIcon className="mr-2 h-4 w-4" /> Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
