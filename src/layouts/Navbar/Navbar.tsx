import { BRANDNAME } from "@/constants";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { isLoggedIn } from "@/services/firestoreServices";
import logo from "@/assets/images/logo.png";

interface NavbarButtonProps {
  link: string;
  text: string;
}

const Navbar = () => {
  const [loginState, setLoginState] = useState<boolean>(false);

  useEffect(() => {
    isLoggedIn() ? setLoginState(true) : setLoginState(false);
  }, []);

  return (
    <nav className="sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="mx-auto flex h-14 max-w-screen-lg flex-row items-center justify-between px-8">
        <div className=" flex flex-row items-center gap-4">
          <img className="h-8 w-8" src={logo}></img>
          <Link to={"/"} className="font-bold transition-all hover:text-orange-500">
            {BRANDNAME}
          </Link>
        </div>
        <div className="flex flex-row items-center gap-6">
          <NavbarButton link="/createPlatform" text="Create team platform"></NavbarButton>
          <NavbarButton link="/joinPlatform" text="Join platform"></NavbarButton>
          {loginState ? (
            <NavbarButton link="/user" text="My dashboard"></NavbarButton>
          ) : (
            <NavbarButton link="/signIn" text="Sign in"></NavbarButton>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const NavbarButton = ({ link, text }: NavbarButtonProps) => {
  const location = useLocation();
  const [urlPath, setURLPath] = useState<string>("/");

  useEffect(() => {
    console.log(location.pathname);
    setURLPath(location.pathname);
  }, [location.pathname]);

  return (
    <Link
      className={
        urlPath == link
          ? "font-medium text-neutral-950 transition-all hover:text-indigo-600"
          : "font-medium text-neutral-800 transition-all hover:text-indigo-600"
      }
      to={link}
    >
      {text}
    </Link>
  );
};
