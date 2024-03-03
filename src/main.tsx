import React from "react";
import ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import "./index.css";

// Route imports
import LandingPage from "./routes/landing/LandingPage";
import PublicLayout from "./layouts/PublicLayout/PublicLayout";
import SignIn from "./routes/signIn/SignIn";
import UserLayout from "./layouts/UserLayout/UserLayout";
import DashboardHome from "./routes/dashboardHome/DashboardHome";
import Layout from "./layouts/Layout";

import UserSpaceView from "./routes/user/space/UserSpaceView";

import JoinRoom from "./routes/onboardingPages/onboardingStudent/JoinRoom";
import ProfileSetup from "./routes/onboardingPages/onboardingStudent/ProfileSetup";

import CreateSpace from "./routes/onboardingPages/onboardingTeacher/CreateSpace";
import TutorialCardDetail from "./components/TutorialCard/TutorialCardDetail";
// import SpaceFeatures from "./routes/onboardingPages/onboardingTeacher/SpaceFeatures";

import { AuthProvider } from "@/auth/AuthContext.tsx";
import { AuthenticatedElement, UnauthenticatedElement } from "@/auth/AuthElements.tsx";
import Requests from "@/routes/request/Requests.tsx";

export const URLs = {
  login: "login",
  app: "app",
  edit_space: "edit_space",
  edit_profile: "edit_profile",
  create_space: "create_space",
  space_features: "space-features",
  join_space: "join_space",
  requests: "requests",
};

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<LandingPage />} />
        <Route path={URLs.login} element={<UnauthenticatedElement element={<SignIn />} />} />
      </Route>

      <Route path={URLs.app} element={<AuthenticatedElement element={<UserLayout />} />}>
        <Route index element={<DashboardHome />} />

        <Route path=":space_id">
          <Route index element={<UserSpaceView />} />
          {/* <Route path={URLs.edit_space} element={<SpaceFeatures />} /> */}
          <Route path={URLs.edit_profile} element={<ProfileSetup />} />
          <Route path=":group_id" element={<TutorialCardDetail />} />
        </Route>

        <Route path={URLs.create_space} element={<CreateSpace />} />
        {/* <Route path={URLs.space_features} element={<SpaceFeatures />} /> */}
        <Route path={URLs.join_space} element={<JoinRoom />} />
        <Route path={URLs.requests} element={<Requests />} />
      </Route>
    </Route>,
  ]),
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
);
