import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { URLs } from "@/main.tsx";

import opendoor from "@/assets/images/opendoor.png";
// import highfive from "@/assets/images/highfive.png";
// import constellation from "@/assets/images/constellation.png";
import highfive2 from "@/assets/images/highfive2.png";
import constellation2 from "@/assets/images/constellation2.png";

const HeroBanner = () => {
  return (
    <div className="grid grid-cols-[repeat(20,minmax(50px,50px))] grid-rows-[repeat(12,minmax(50px,50px))]">
      <img
        className=" col-start-1 col-end-6 row-start-2 row-end-7 rounded-[4px] "
        src={highfive2}
      ></img>
      <img
        className=" col-start-1 col-end-10 row-start-9 row-end-13 rounded-[4px] "
        src={constellation2}
      ></img>
      <img
        className=" row-end-15 col-start-[17] col-end-[26] row-start-4 rounded-[4px] "
        src={opendoor}
        alt="Image"
      ></img>
      <h2 className="col-start-4 row-start-5 w-[750px] text-center text-6xl font-bold">
        A new way to find teammates
      </h2>
      <div className="col-start-8 row-start-8 flex gap-4 text-lg font-bold">
        <Button
          asChild
          className=" h-12 rounded-[4px] bg-orange-500 px-8 text-lg font-bold text-white shadow-[0_4px_6px_-1px_rgba(249,115,22,0.3)] shadow-inner hover:bg-neutral-100 hover:text-orange-500"
        >
          <Link to={`/${URLs.app}/${URLs.create_space}`}>Create Space</Link>
        </Button>
        <Button
          asChild
          className="h-12 rounded-[4px] bg-indigo-600 px-10 text-lg font-bold text-white shadow-[0_4px_6px_-1px_rgba(79,70,229,0.3)] shadow-inner hover:bg-neutral-100 hover:text-indigo-600"
        >
          <Link to={`/${URLs.app}/${URLs.join_space}`}>Join Space</Link>
        </Button>
      </div>
    </div>
  );
};

export default HeroBanner;
