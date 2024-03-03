import LoadingTeam from "@/components/Loading/LoadingTeam";
import "./LoadingTeamPage.css";
import planet from "@/assets/images/planet.png"

const LoadingTeamPage = () => {
  return (
    <img className="w-screen h-screen pt-[15%] fixed bg-slate-200 "src={planet} >
      <LoadingTeam />
    </img>
  )
}

export default LoadingTeamPage;