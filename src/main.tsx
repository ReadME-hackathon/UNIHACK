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

import JoinRoom from "./routes/onboardingPages/onboardingStudent/JoinRoom";
import ProfileSetup from "./routes/onboardingPages/onboardingStudent/ProfileSetup";
import SpaceFeatures from "./routes/onboardingPages/onboardingTeacher/SpaceFeatures";
import CreateSpace from "./routes/onboardingPages/onboardingTeacher/CreateSpace";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<PublicLayout/>}>
      <Route index element={<LandingPage />} />
      <Route path="createPlatform" element={<LandingPage />} />
      <Route path="joinPlatform" element={<LandingPage />} />
      <Route path="signIn" element={<LandingPage />} />
      <Route path="1" element={<JoinRoom  />} />
      <Route path="2" element={<ProfileSetup />} />
      <Route path="3" element={<SpaceFeatures />} />
      <Route path="4" element={<CreateSpace />} />
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
