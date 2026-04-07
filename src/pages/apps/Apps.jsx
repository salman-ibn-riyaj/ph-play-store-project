import React from "react";
import useData from "../../hooks/useData";
import AppCard from "../../components/AppCard/AppCard";
import { GridLoader } from "react-spinners";

const Apps = () => {
  const { apps, loading } = useData();
  // console.log(apps, loading, 'using hook');
  return (
    <div>
      <div className="text-center my-5 max-w-[45%] mx-auto space-y-2">
        <h2 className="font-bold text-3xl">Our All Applications</h2>
        <p>
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      {loading ? (
        <div className="text-center mt-3">
          <GridLoader color="fuchsia"/>
        </div>
      ) : (
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {apps.map((app, index) => (
            <AppCard app={app} key={index}></AppCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default Apps;
