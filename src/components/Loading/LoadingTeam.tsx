import { Progress } from "../ui/progress";

const LoadingTeam = () => {
  return (
    <div className="flex flex-col items-center m-auto">
      <h1 className="text-4xl font-bold mb-[10%]">Finding your dream team...</h1>
      <div className="w-5/12 h-[300px] bg-indigo-400 "></div>
      <Progress value={50} className="w-20" />
    </div>
  );
};

export default LoadingTeam;