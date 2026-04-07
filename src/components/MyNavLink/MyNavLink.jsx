import React from "react";
import { NavLink } from "react-router";

const MyNavLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `${isActive ? "text-purple-500 border-b border-b-purple-500" : ""} font-semibold`
      }
    >
      {children}
    </NavLink>
  );
};

export default MyNavLink;
