import React from "react";
import { FaAppStoreIos } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import bannerImg from '../../assets/images/hero.png'

const Banner = () => {
  return (
    <div className="text-center space-y-2 min-h-[80vh]">
      <h2 className="text-6xl font-bold">
        We Build <br />
        <span className="text-purple-500">Productive</span> Apps
      </h2>

      <p>
        At HERO.IO, we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting. <br />
        Our goal is to turn your ideas into digital experiences that truly make
        an impact.
      </p>

      <div className="flex justify-center items-center gap-5 my-4">
        <button className="flex items-center gap-1 btn"><span className="text-green-500"><IoLogoGooglePlaystore /></span>Google Play</button>


        <button className="flex items-center gap-1 btn"><span className="text-red-300"><FaAppStoreIos /></span>App Store</button>
      </div>

      <img className="mx-auto" src={bannerImg} alt="" />
    </div>
  );
};

export default Banner;
