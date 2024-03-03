import LoadingTeam from "@/components/Loading/LoadingTeam";
import "./LoadingTeamPage.css";
import planet from "@/assets/images/planet.png";

const LoadingTeamPage = () => {
  return (
    <img className="fixed h-screen w-screen bg-slate-200 pt-[15%] " src={planet}>
      <LoadingTeam />
    </img>
  );
};

export default LoadingTeamPage;
