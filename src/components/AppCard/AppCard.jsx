import React from "react";
import { IoMdStarOutline } from "react-icons/io";
import { MdFileDownload } from "react-icons/md";
import { Link } from "react-router";

const AppCard = ({ app }) => {
  return (
    <Link to={`/apps/${app.id}`} className="card bg-base-100 shadow-sm">
      <figure>
        <img className="p-2 h-50 w-auto" src={app.image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{app.title}</h2>

        <div className="flex items-center justify-between gap-4">
            <span className="text-green-500 bg-green-100 px-1 rounded-md flex items-center gap-1"><MdFileDownload />{app.downloads}</span>
            <span className="text-orange-500 bg-orange-100 px-1 rounded-md flex items-center gap-1"><IoMdStarOutline />{app.ratingAvg}</span>
        </div>
        
    
      </div>
    </Link>
  );
};

export default AppCard;
