import { Progress } from "../ui/progress";

const LoadingTeam = () => {
  return (
    <div className="flex flex-col items-center m-auto">
      <h1 className="text-4xl font-bold mb-[8vh]">Finding your dream team...</h1>
      <div className="w-5/12 h-[40vh] bg-indigo-400 mb-[6vh]"></div>
      <Progress value={70} className="w-[400px]" />
    </div>
  );
};

export default LoadingTeam;