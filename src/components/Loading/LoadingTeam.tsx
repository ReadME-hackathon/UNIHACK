import { Progress } from "../ui/progress";

const LoadingTeam = () => {
  return (
    <div className="flex flex-col gap-8 items-center m-auto mt-10">
      <h1 className="text-4xl font-bold">Finding your dream team...</h1>
      <div className="w-[400px] h-[300px] bg-indigo-400 "></div>
      <Progress className="w-20" />
    </div>
  );
};

export default LoadingTeam;