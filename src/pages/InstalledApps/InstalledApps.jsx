import React, { useContext } from "react";
import { ContextApi } from "../../Context/ContextApi/ContextApi";
import { toast } from "react-toastify";

const InstalledApps = () => {
  const { installedApps, setInstalledApps } = useContext(ContextApi);
  console.log(installedApps);

  const handleUninstallApp = (installedApp) => {
    const filteredUninstalledApps = installedApps.filter(
      (item) => item.id !== installedApp.id,
    );

    setInstalledApps(filteredUninstalledApps);
    toast.warning(`${installedApp.title} uninstalled successfully`);
  };
  return (
    <div>
      {installedApps.length === 0 ? (
        <div className="text-3xl font-bold text-center my-5"> No installed App not found! </div>
      ) : (
        <div className="space-y-2 my-2 container mx-auto">
          {installedApps.map((installedApp, index) => (
            <div
              key={index}
              className="flex items-center justify-between gap-7 p-4 rounded-xl bg-amber-50 mb-2"
            >
              <div>
                <img className="h-25 w-auto" src={installedApp.image} alt="" />
                <h2 className="font-bold mt-3">{installedApp.title}</h2>
              </div>

              <div>
                <button className="btn btn-success">installed</button>

                <button
                  onClick={() => handleUninstallApp(installedApp)}
                  className="btn btn-error ml-3"
                >
                  Uninstall
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default InstalledApps;
