import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

interface Props {
  element: React.ReactNode;
}

export const AuthenticatedElement: React.FC<Props> = ({ element }) => {
  const { isLoggedIn, isLoading } = useAuth();

  if (isLoading) {
    // TODO: Create a loading page
    return <div>Loading Auth Status...</div>;
  }

  return isLoggedIn ? element : <Navigate to="/signIn" />;
};

export const UnauthenticatedElement: React.FC<Props> = ({ element }) => {
  const { isLoggedIn, isLoading } = useAuth();

  if (isLoading) {
    // TODO: Create a loading page
    return <div>Loading Auth Status...</div>;
  }

  return !isLoggedIn ? element : <Navigate to="/user" />;
};
