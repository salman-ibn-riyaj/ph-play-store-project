import { createBrowserRouter } from "react-router";
import Apps from "../../pages/apps/Apps";
import Homepage from "../../pages/Homepage/Homepage";
import InstalledApps from "../../pages/InstalledApps/InstalledApps";
import RootLayout from "../../RootLayout/RootLayout";
import NotFound from "../../pages/NotFound";
import AppDetails from "../AppCard/AppDetails";
import Dashboard from "../Dashboard/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Homepage,
        loader: ()=> fetch('appsData.json')
      },

      {
        path: "/apps",
        Component: Apps,
      },
      {
        path: '/apps/:id',
        Component: AppDetails
      },
      {
        path: "/installedApps",
        Component: InstalledApps,
      },
      {
        path:'/dashboard',
        Component: Dashboard
      },
      { path: "*", Component: NotFound },
    ],
  },
  {
    path:'*',
    Component: NotFound
  }
]);
