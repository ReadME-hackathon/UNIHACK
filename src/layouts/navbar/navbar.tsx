import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b backdrop-blur ">
      <div className="flex h-14 max-w-screen-lg flex-row items-center justify-between px-8">
        <div className=" flex flex-row items-center gap-4">
          <img className=" h-8 w-8"></img>
          <span className=" font-bold">BRANDNAME</span>
        </div>
        <div className="flex flex-row items-center gap-4">
          <Link className="transition-all hover:text-indigo-500" to={"/"}>
            Create team platform
          </Link>
          <Link className="transition-all hover:text-indigo-500" to={"/"}>
            Join team platform
          </Link>
          <Link className="transition-all hover:text-indigo-500" to={"/"}>
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
