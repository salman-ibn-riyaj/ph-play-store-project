import React, { useContext } from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { ContextApi } from "../../Context/ContextApi/ContextApi";
import useData from "../../hooks/useData";

const Dashboard = () => {

    const {installedApps} = useContext(ContextApi);
    console.log(installedApps);

    const {apps} = useData();
    console.log(apps);

    const uninstalledApps = apps.length - installedApps.length
  const data = [
    { name: "installed Apps", value: installedApps.length, fill: "#0088FE" },
    { name: "uninstalled Apps", value: uninstalledApps, fill: "#00C49F" },
  ];

  return (
    <div className="container mx-auto shadow mt-5 p-4"> 
    <h2 className="font-bold text-2xl">installed and uninstalled statistics chart</h2>
      <PieChart
        style={{
          width: "100%",
          maxWidth: "500px",
          maxHeight: "80vh",
          aspectRatio: 1,
          margin: '0 auto'
        }}
        responsive
      >
        <Pie
          data={data}
          innerRadius="80%"
          outerRadius="100%"
          // Corner radius is the rounded edge of each pie slice
          cornerRadius="50%"
          fill="#8884d8"
          // padding angle is the gap between each pie slice
          paddingAngle={5}
          dataKey="value"
          isAnimationActive={true}
        />
        <Legend></Legend>
        <Tooltip></Tooltip>
      </PieChart>
    </div>
  );
};

export default Dashboard;
