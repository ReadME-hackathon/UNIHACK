import { Button } from "../ui/button";
import { Link } from "react-router-dom";

import opendoor from "@/assets/images/opendoor.png";
import highfive from "@/assets/images/highfive.png";
import constellation from "@/assets/images/constellation.png";
import highfive2 from "@/assets/images/highfive2.png";
import constellation2 from "@/assets/images/constellation2.png";

const HeroBanner = () => {
  return (
    <div className="grid grid-rows-[repeat(12,minmax(50px,50px))] grid-cols-[repeat(20,minmax(50px,50px))]">
      <img className=" col-start-1 col-end-6 row-start-2 row-end-7 rounded-[4px] "
      src={highfive2} ></img>
      <img className=" col-start-1 col-end-10 row-start-9 row-end-13 rounded-[4px] "
      src={constellation2}
      ></img>
      <img className=" col-start-[17] col-end-[26] row-start-4 row-end-15 rounded-[4px] "
       src={opendoor} alt="Image">
      </img>
      <h2 className="w-[750px] text-6xl font-bold text-center col-start-4 row-start-5">A new way to find teammates</h2>
      <div className="flex gap-4 col-start-8 row-start-8 font-bold text-lg">
        <Button asChild className=" px-8 h-12 font-bold text-lg text-white bg-orange-500 hover:text-orange-500 hover:bg-neutral-100 shadow-inner shadow-[0_4px_6px_-1px_rgba(249,115,22,0.3)] rounded-[4px]">
          <Link to="/createPlatform">Create Space</Link>
        </Button>
        <Button asChild className="px-10 h-12 font-bold text-lg text-white bg-indigo-600 hover:text-indigo-600 hover:bg-neutral-100 shadow-inner shadow-[0_4px_6px_-1px_rgba(79,70,229,0.3)] rounded-[4px]">
          <Link to="/joinPlatform">Join Space</Link>
        </Button>
      </div>
    </div>
    );
};

export default HeroBanner;
