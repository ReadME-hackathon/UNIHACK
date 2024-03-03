import HeroBanner from "@/components/HeroBanner/HeroBanner";
import LandingBar from "@/components/Landing/LandingBar";
import LandingFeature from "@/components/Landing/LandingFeature";
import LandingFeatureProps from "@/components/Landing/LandingFeatureProps";
import Footer from "@/layouts/Footer/Footer";
import { motion } from "framer-motion";

const LandingPage = () => {
  const features: LandingFeatureProps[] = [
    {
      name: "Find collaborators",
      desc: "Discover individuals that suit your plans and connect with each other to start collaborating!",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Checkerboard_pattern.svg/1200px-Checkerboard_pattern.svg.png",
    },
    {
      name: "Join a dream team",
      desc: "Browse through groups doing the same project and choose your team based on shared goals!",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Checkerboard_pattern.svg/1200px-Checkerboard_pattern.svg.png",
    },
    {
      name: "Make your own",
      desc: "Create a GroupSpace to allow collaborators to find their perfect team. A hassle-free process for all those involved!",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Checkerboard_pattern.svg/1200px-Checkerboard_pattern.svg.png",
    },
  ];

  return (
    <div className="m-auto mb-10 max-w-screen-lg">
      <HeroBanner />
      <div className="mx-auto mt-14 flex w-[900px] flex-col gap-10 rounded-[6px] bg-neutral-200 pb-32 pt-8">
        <LandingBar />
        <div className="mt-4 flex flex-col items-center gap-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "anticipate", type: "tween" }}
            viewport={{ once: true }}
            className="max-w-md text-center text-6xl font-bold"
          >
            Less <span className=" text-orange-500">Stressing</span>, More{" "}
            <span className="text-indigo-500">Working</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: "anticipate", type: "tween" }}
            viewport={{ once: true }}
            className="mb-10 h-24 max-w-lg text-center font-medium"
          >
            Getting into groups shouldn’t take as much effort as it usually does. Luckily,
            GroupSpace is here to help you simplify the process and create a better experience!
          </motion.p>
        </div>
        <div className="grid gap-24 ">
          {features.map((feature) => (
            <LandingFeature {...feature} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
