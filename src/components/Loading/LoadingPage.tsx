import LoadingTeam from "@/components/Loading/LoadingTeam";
import "./LoadingTeamPage.css";

const LoadingTeamPage = () => {
  return (
    <div className="w-screen h-screen pt-[15%] fixed bg-slate-200">
      <LoadingTeam />
    </div>
  )
}

export default LoadingTeamPage;