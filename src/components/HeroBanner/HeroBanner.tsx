import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { URLs } from "@/main.tsx";
import { motion, useScroll, useTransform } from "framer-motion";

import opendoor from "@/assets/images/opendoor.png";
// import highfive from "@/assets/images/highfive.png";
// import constellation from "@/assets/images/constellation.png";
import highfive2 from "@/assets/images/highfive2.png";
import constellation2 from "@/assets/images/constellation2.png";
import { useRef } from "react";

const HeroBanner = () => {
  const ref = useRef(null);

  let { scrollYProgress } = useScroll();
  let y1 = useTransform(scrollYProgress, [0, 1], ["0px", "900px"]);
  let y2 = useTransform(scrollYProgress, [0, 1], ["0px", "400px"]);
  let y3 = useTransform(scrollYProgress, [0, 1], ["0px", "500px"]);

  return (
    <div
      ref={ref}
      className="grid grid-cols-[repeat(20,minmax(50px,50px))] grid-rows-[repeat(12,minmax(50px,50px))]"
    >
      <motion.img
        style={{ y: y1 }}
        className="z-0 col-start-1 col-end-6 row-start-2 row-end-7 rounded-[4px] "
        src={highfive2}
      ></motion.img>
      <motion.img
        style={{ y: y2 }}
        className="z-10 col-start-1 col-end-10 row-start-9 row-end-13 rounded-[4px] "
        src={constellation2}
      ></motion.img>
      <motion.img
        style={{ y: y3 }}
        className=" row-end-15 col-start-[17] col-end-[26] row-start-4 rounded-[4px] "
        src={opendoor}
        alt="Image"
      ></motion.img>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 1, ease: "anticipate", type: "tween" }}
        viewport={{ once: true }}
        className="col-start-4 row-start-5 w-[750px] text-center text-6xl font-bold"
      >
        A new way to find teammates
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1, ease: "anticipate", type: "tween" }}
        viewport={{ once: true }}
        className="col-start-8 row-start-8 flex gap-4 text-lg font-bold"
      >
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
      </motion.div>
    </div>
  );
};

export default HeroBanner;
