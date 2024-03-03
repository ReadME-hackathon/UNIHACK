import { signInWithGoogle } from "@/services/firestoreServices";
import { useNavigate } from "react-router-dom";
import "./SignIn.css";
import welcome from "@/assets/images/welcome.png"
import logo from "@/assets/images/logo.png"

const SignIn = () => {
  const navigate = useNavigate();

  const signIn = async () => {
    try {
      await signInWithGoogle();
      navigate("/user");
    } catch (error) {
      console.log("Error signing in with google:", error);
    }
  };

  return (
    <div className="flex h-screen w-screen max-w-full flex-row bg-indigo-800">
      <div className=" h-full w-3/5 p-16">
        <img className="h-full w-full rounded object-contain"src={welcome}></img>
      </div>
      <div className="flex h-full w-2/5 items-center">
        <div className="flex flex-col gap-4 rounded bg-neutral-50 p-8">
        <p className="text-4xl font-bold text-center">GroupSpace</p>
          <img className=" h-40 w-40"src={logo}></img>
          <button onClick={signIn} className="login-with-google-btn transition-all hover:shadow-md">
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
