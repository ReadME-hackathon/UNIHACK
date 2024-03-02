import { Outlet } from "react-router";
import { Toaster } from "sonner";

const Layout = () => {
  return (
    <div>
      <Outlet></Outlet>
      <Toaster />
    </div>
  );
};

export default Layout;
