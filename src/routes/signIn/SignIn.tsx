import { signInWithGoogle } from "@/services/firestoreServices";
import "./SignIn.css";
import welcome from "@/assets/images/welcome.png"
import logo from "@/assets/images/logo.png"

const SignIn = () => {
  const signIn = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.log("Error signing in with google:", error);
    }
  };

  return (
<<<<<<< HEAD
    <div className="flex h-screen w-screen max-w-full flex-row bg-indigo-800">
      <div className=" h-full w-3/5 p-16">
        <img className="h-full w-full rounded object-contain"src={welcome}></img>
      </div>
      <div className="flex h-full w-2/5 items-center">
        <div className="flex flex-col gap-4 rounded bg-neutral-50 p-8">
        <p className="text-4xl font-bold text-center">GroupSpace</p>
          <img className=" h-40 w-40"src={logo}></img>
=======
    <div className="flex h-[90vh] w-screen max-w-full flex-row relative">
      <div className=" h-full w-5/6 p-16">
        <img className="h-full w-full rounded"></img>
      </div>
      <div className="flex h-full w-2/5 items-center">
        <div className="flex flex-col gap-4 rounded bg-white p-8 absolute left-[60%] shadow-lg">
          <img className=" h-80 w-80"></img>
>>>>>>> 10dc69a6ae6fd47673b89d04c448d4516a63c3d8
          <button onClick={signIn} className="login-with-google-btn transition-all hover:shadow-md">
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
