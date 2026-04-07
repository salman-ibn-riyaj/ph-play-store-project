import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import RootLayout from "./RootLayout/RootLayout";
import { RouterProvider } from "react-router/dom";
import Homepage from "./pages/Homepage/Homepage";
import Apps from "./pages/apps/Apps";
import InstalledApps from "./pages/InstalledApps/InstalledApps";
import { router } from "./components/Router/Router";



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
