import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { URLs } from "@/main.tsx";

interface Props {
  element: React.ReactNode;
}

export const AuthenticatedElement: React.FC<Props> = ({ element }) => {
  const { isLoggedIn, isLoading } = useAuth();

  if (isLoading) {
    // TODO: Create a loading page
    return <div>Loading Auth Status...</div>;
  }

  return isLoggedIn ? element : <Navigate to={`/${URLs.login}`} />;
};

export const UnauthenticatedElement: React.FC<Props> = ({ element }) => {
  const { isLoggedIn, isLoading } = useAuth();

  if (isLoading) {
    // TODO: Create a loading page
    return <div>Loading Auth Status...</div>;
  }

  return !isLoggedIn ? element : <Navigate to={`/${URLs.app}`} />;
};
