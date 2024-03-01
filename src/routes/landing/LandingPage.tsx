import HeroBanner from "@/components/HeroBanner/HeroBanner";
import LandingBar from "@/components/Landing/LandingBar";
import LandingFeature from "@/components/Landing/LandingFeature";
import LandingFeatureProps from "@/components/Landing/LandingFeatureProps";

const LandingPage = () => {
  const features: LandingFeatureProps[] = [
    {
      name: "Big title text",
      desc: "Body Text that describes something and makes the product look like something that people will actually use.",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Checkerboard_pattern.svg/1200px-Checkerboard_pattern.svg.png",
    },
    {
      name: "Big title text",
      desc: "Body Text that describes something and makes the product look like something that people will actually use.",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Checkerboard_pattern.svg/1200px-Checkerboard_pattern.svg.png",
    },
    {
      name: "Big title text",
      desc: "Body Text that describes something and makes the product look like something that people will actually use.",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Checkerboard_pattern.svg/1200px-Checkerboard_pattern.svg.png",
    },
  ];

  return (
    <div className="max-w-screen-lg m-auto mb-10">
      <HeroBanner />
      <div className="flex flex-col gap-10 pt-8 pb-32 rounded-xl bg-gray-200">
        <LandingBar />
        <div className="flex flex-col items-center gap-6">
          <h2 className="text-6xl font-bold text-center">Big title text</h2>
          <p className="w-[350px] h-24 mb-10 font-medium text-center">Body Text that describes something and makes the product look like something that people will actually use.</p>
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
