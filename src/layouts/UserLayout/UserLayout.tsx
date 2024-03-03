import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router";

const UserLayout = () => {
  return (
    <div className="h-screen overflow-y-clip">
      <Navbar></Navbar>
      <div className="flex flex-row">
        <Sidebar></Sidebar>
        <div className="h-screen w-full overflow-y-scroll ">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default UserLayout;
