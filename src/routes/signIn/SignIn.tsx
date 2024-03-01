import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();

  return (
    <GoogleOAuthProvider clientId="1013964470-v6pc6mdo4f0ctek97kimggbpt04q04ft.apps.googleusercontent.com">
      <div className="flex h-screen w-screen max-w-full flex-row">
        <div className=" h-full w-3/5 p-16">
          <img className="h-full w-full rounded"></img>
        </div>
        <div className="flex h-full w-2/5 items-center">
          <div className="flex flex-col gap-4 rounded bg-neutral-50 p-8">
            <img className=" h-80 w-80"></img>
            <GoogleLogin
              onSuccess={() => {
                navigate("/");
              }}
              onError={() => {
                console.log("Login Failed");
              }}
            />
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default SignIn;
