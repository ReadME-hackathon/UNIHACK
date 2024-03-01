import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";

import { GoogleOAuthProvider } from "@react-oauth/google";

const PublicLayout = () => {
  return (
    <GoogleOAuthProvider clientId="1013964470-v6pc6mdo4f0ctek97kimggbpt04q04ft.apps.googleusercontent.com">
      <div>
        <Navbar></Navbar>
        <Outlet />
      </div>
    </GoogleOAuthProvider>
  );
};

export default PublicLayout;
