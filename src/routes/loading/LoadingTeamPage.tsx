import LoadingTeam from "@/components/Loading/LoadingTeam";
<<<<<<< HEAD
import "./LoadingTeamPage.css";
import planet from "@/assets/images/planet.png"

const LoadingTeamPage = () => {
  return (
    <img className="w-screen h-screen pt-[15%] fixed bg-slate-200 "src={planet} >
=======

const LoadingTeamPage = () => {
  return (
    <div className="w-screen h-screen pt-[10vh] fixed bg-slate-200">
>>>>>>> 10dc69a6ae6fd47673b89d04c448d4516a63c3d8
      <LoadingTeam />
    </img>
  )
}

export default LoadingTeamPage;