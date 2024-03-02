import HeroBanner from "@/components/HeroBanner/HeroBanner";
import LandingBar from "@/components/Landing/LandingBar";
import LandingFeature from "@/components/Landing/LandingFeature";
import LandingFeatureProps from "@/components/Landing/LandingFeatureProps";

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
    <div className="max-w-screen-lg m-auto mb-10">
      <HeroBanner />
      <div className="flex flex-col gap-10 w-[900px] rounded-[6px] pt-8 pb-32 mt-14 mx-auto bg-neutral-200">
        <LandingBar />
        <div className="flex flex-col items-center gap-6 mt-4">
          <h2 className="text-6xl font-bold text-center">Less Stressing, More Working</h2>
          <p className="w-[350px] h-24 mb-10 font-medium text-center">Getting into groups shouldn’t take as much effort as it usually does. Luckily, GroupSpace is here to help you simplify the process and create a better experience!</p>
        </div>
        <div className="grid gap-24 ">
              {features.map((feature) => (
                <LandingFeature {...feature} />
              ))}
            </div>
      </div>
    </div>
  );
};

export default LandingPage;
