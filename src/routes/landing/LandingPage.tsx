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
    <div className="max-w-screen-lg">
      <HeroBanner />

      <div>
        <h2>Big title text</h2>
        <p>Body Text that describes something and makes the product look like something that people will actually use.</p>
        <LandingBar />
        <div className="grid">
              {features.map((feature) => (
                <LandingFeature {...feature} />
              ))}
            </div>
      </div>
      
    </div>
  );
};

export default LandingPage;
