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

import AdminSpaceView from "./routes/admin/space/AdminSpaceView";
import UserSpaceView from "./routes/user/space/UserSpaceView";
import AdminMySpaces from "./routes/admin/mySpaces/AdminMySpaces";
import UserMySpaces from "./routes/user/mySpaces/UserMySpaces";

import JoinRoom from "./routes/onboardingPages/onboardingStudent/JoinRoom";
import ProfileSetup from "./routes/onboardingPages/onboardingStudent/ProfileSetup";

import CreateSpace from "./routes/onboardingPages/onboardingTeacher/CreateSpace";
import SpaceFeatures from "./routes/onboardingPages/onboardingTeacher/SpaceFeatures";

import { AuthProvider } from "@/auth/AuthContext.tsx";
import { AuthenticatedElement, UnauthenticatedElement } from "@/auth/AuthElements.tsx";

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<LandingPage />} />
        <Route path="signIn" element={<UnauthenticatedElement element={<SignIn />} />} />
      </Route>

      <Route path="user" element={<AuthenticatedElement element={<UserLayout />} />}>
        <Route index element={<DashboardHome />} />

        <Route path="space/*">
          <Route index element={<UserMySpaces />} />
          <Route path=":spaceId" element={<UserSpaceView />} />
        </Route>

        <Route path="join-room" element={<JoinRoom />} />
        <Route path="profile-setup" element={<ProfileSetup />} />
      </Route>

      <Route path="admin" element={<AuthenticatedElement element={<UserLayout />} />}>
        <Route index element={<DashboardHome />} />
        <Route path="space/*">
          <Route index element={<AdminMySpaces />} />
          <Route path=":spaceId" element={<AdminSpaceView />} />
        </Route>
        <Route path="create-space" element={<CreateSpace />} />
        <Route path="edit-space-features" element={<SpaceFeatures />} />
        <Route path="profile-setup" element={<ProfileSetup />} />
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
