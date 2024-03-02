import { Button } from "../ui/button";

const HeroBanner = () => {
  return (
    <div className="grid grid-rows-[repeat(12,minmax(50px,50px))] grid-cols-[repeat(20,minmax(50px,50px))]">
      <div className=" col-start-2 col-end-7 row-start-2 row-end-7 rounded-[4px] bg-gray-300 "></div>
      <div className=" col-start-1 col-end-10 row-start-10 row-end-13 rounded-[4px] bg-gray-200 "></div>
      <div className=" col-start-[16] col-end-[21] row-start-3 row-end-11 rounded-[4px] bg-gray-300 "></div>
      <h2 className="w-[750px] text-6xl font-bold text-center col-start-4 row-start-5">A new way to find teammates</h2>
      <div className="flex gap-4 col-start-9 row-start-8">
        <Button variant="default" size="default" className="bg-gray-200">Start event</Button>
        <Button variant='default' className="bg-gray-200">Join event</Button>
      </div>
    </div>
    );
};

export default HeroBanner;
