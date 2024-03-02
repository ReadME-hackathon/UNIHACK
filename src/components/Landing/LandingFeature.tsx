import LandingFeatureProps from "./LandingFeatureProps";

const LandingFeature = ({ name, desc, img } : LandingFeatureProps) => {
  return (
    <div className="flex flex-row gap-36 items-center w-[800px] m-auto">
      <div className="flex flex-col gap-6">
        <h3 className="text-4xl font-bold">{name}</h3>
        <p className="h-24 font-medium">{desc}</p>
      </div>
      <img src={img} className="w-96 h-96"/>
    </div>
  );
};

export default LandingFeature;