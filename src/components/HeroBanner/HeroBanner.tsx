import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const HeroBanner = () => {
  return (
    <div className="grid grid-cols-[repeat(20,minmax(50px,50px))] grid-rows-[repeat(12,minmax(50px,50px))]">
      <div className=" col-start-2 col-end-7 row-start-2 row-end-7 rounded-[4px] bg-neutral-300 "></div>
      <div className=" col-start-1 col-end-10 row-start-10 row-end-13 rounded-[4px] bg-neutral-200 "></div>
      <div className=" col-start-[16] col-end-[21] row-start-3 row-end-11 rounded-[4px] bg-neutral-300 "></div>
      <h2 className="col-start-4 row-start-5 w-[750px] text-center text-6xl font-bold">
        A new way to find teammates
      </h2>
      <div className="col-start-8 row-start-8 flex gap-4 text-lg font-bold">
        <Button
          asChild
          className=" h-12 rounded-[4px] bg-orange-500 px-8 text-lg font-bold text-white shadow-[0_4px_6px_-1px_rgba(249,115,22,0.3)] shadow-inner hover:bg-neutral-100 hover:text-orange-500"
        >
          <Link to="/createPlatform">Create Space</Link>
        </Button>
        <Button
          asChild
          className="h-12 rounded-[4px] bg-indigo-600 px-10 text-lg font-bold text-white shadow-[0_4px_6px_-1px_rgba(79,70,229,0.3)] shadow-inner hover:bg-neutral-100 hover:text-indigo-600"
        >
          <Link to="/joinPlatform">Join Space</Link>
        </Button>
      </div>
    </div>
  );
};

export default HeroBanner;
