import LandingFeatureProps from "./LandingFeatureProps";

const LandingFeature = ({ name, desc, img } : LandingFeatureProps) => {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col">
        <h3>{name}</h3>
        <p>{desc}</p>
      </div>
      <img src={img} />
    </div>
  );
};

export default LandingFeature;