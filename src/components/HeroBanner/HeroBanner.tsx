import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const HeroBanner = () => {
  return (
    <div className="grid grid-rows-[repeat(12,minmax(50px,50px))] grid-cols-[repeat(20,minmax(50px,50px))]">
      <div className=" col-start-2 col-end-7 row-start-2 row-end-7 rounded-[4px] bg-neutral-300 "></div>
      <div className=" col-start-1 col-end-10 row-start-10 row-end-13 rounded-[4px] bg-neutral-200 "></div>
      <div className=" col-start-[16] col-end-[21] row-start-3 row-end-11 rounded-[4px] bg-neutral-300 "></div>
      <h2 className="w-[750px] text-6xl font-bold text-center col-start-4 row-start-5">A new way to find teammates</h2>
      <div className="flex gap-6 col-start-8 row-start-8 font-bold text-lg">
        <Button asChild className=" px-10 h-12 font-bold text-lg text-white bg-orange-500 hover:text-orange-500 hover:bg-neutral-100 shadow-inner shadow-[0_4px_6px_-1px_rgba(249,115,22,0.3)] rounded-[4px]">
          <Link to="/createPlatform">Start event</Link>
        </Button>
        <Button asChild className="px-10 h-12 font-bold text-lg text-white bg-indigo-600 hover:text-indigo-600 hover:bg-neutral-100 shadow-inner shadow-[0_4px_6px_-1px_rgba(79,70,229,0.3)] rounded-[4px]">
          <Link to="/joinPlatform">Join event</Link>
        </Button>
      </div>
    </div>
    );
};

export default HeroBanner;
