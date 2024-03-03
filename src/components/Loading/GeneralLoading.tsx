import loading_icon from "../../../public/loading_juggling.gif";

const GeneralLoading = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center m-auto">
      <img src={loading_icon} />
    </div>
  );
};

export default GeneralLoading;