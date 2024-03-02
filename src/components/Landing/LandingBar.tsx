const LandingBar = () => {
  return (
    <div className="flex h-10 gap-3 items-center m-auto">
      <div className="flex h-10 items-center w-[650px] pl-4 mr-4 rounded bg-neutral-50">
        <h4 className="text-sm font-medium">How GroupSpace Works</h4>
      </div>
      <div className="w-5 h-5 rounded-xl bg-neutral-500 "></div>
      <div className="w-5 h-5 rounded-xl bg-yellow-500 "></div>
      <div className="w-5 h-5 rounded-xl bg-red-500"></div>
    </div>
  );
};

export default LandingBar;