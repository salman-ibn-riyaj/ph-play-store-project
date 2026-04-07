import React, { use, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router";
import AppCard from "../AppCard/AppCard";
import { RingLoader } from "react-spinners";
import useData from "../../hooks/useData";

// data fetch using promise
const dataPromise = fetch("/appsData.json").then((res) => res.json());

const TrendingApps = () => {
  const {apps, loading} = useData();
  return (
    <>
      <div className="space-y-4 my-6 text-center">
        <h2 className="text-3xl font-bold">Trending Apps</h2>
        <p>Explore All Trending Apps on the Market developed by us</p>
      </div>

      {loading ? (
        <div className="flex justify-center items-center">
            <RingLoader  color='purple'/>
        </div>
      ) : (
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {apps.slice(0,8).map((app, index) => (
            <AppCard app={app} key={index}></AppCard>
          ))}
        </div>
      )}

      <div className="my-3 text-center">
        <Link to='/apps'><button className="btn bg-purple-500 text-white">Show All</button></Link>
      </div>
    </>
  );
};

export default TrendingApps;
