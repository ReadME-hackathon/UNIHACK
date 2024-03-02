import { signInWithGoogle } from "@/services/firestoreServices";
import "./SignIn.css";

const SignIn = () => {
  const signIn = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.log("Error signing in with google:", error);
    }
  };

  return (
    <div className="flex h-screen w-screen max-w-full flex-row">
      <div className=" h-full w-3/5 p-16">
        <img className="h-full w-full rounded"></img>
      </div>
      <div className="flex h-full w-2/5 items-center">
        <div className="flex flex-col gap-4 rounded bg-neutral-50 p-8">
          <img className=" h-80 w-80"></img>
          <button onClick={signIn} className="login-with-google-btn transition-all hover:shadow-md">
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
