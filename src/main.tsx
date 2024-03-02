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
import LoadingTeamPage from "./routes/loading/LoadingTeamPage";

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<PublicLayout />}>
      <Route index element={<LandingPage />} />
      <Route path="createPlatform" element={<LandingPage />} />
      <Route path="joinPlatform" element={<LandingPage />} />
      <Route path="loading-team" element={<LoadingTeamPage />} />
    </Route>,
    <Route path="signIn" element={<SignIn />} />,
  ]),
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
