import React from "react";
import navImg from "../../assets/images/logo.png";
import { NavLink } from "react-router";
import { LiaGithub } from "react-icons/lia";
import MyNavLink from "../MyNavLink/MyNavLink";
const Navbar = () => {

    const navItems = [
        {
            path:'/',
            text: "Home"
        },
        {
            path:'/apps',
            text: "Apps"
        },
        {
            path:'/installedApps',
            text: "Installation"
        }
    ]
  return (
    <nav className=" py-2 bg-white shadow">
      <div className="container mx-auto flex justify-between items-center">
        <img className="w-12.5" src={navImg} alt="" />

        <ul className="flex items-center gap-4">

            {
                navItems.map((item, index) => <MyNavLink key={index} to={item.path}>{item.text}</MyNavLink>)
            }
          {/* <li>
            <MyNavLink to={'/'}>Home</MyNavLink>
          </li>
          <li>
            <MyNavLink to={'/apps'}>Apps</MyNavLink>
          </li>
          <li>
            <MyNavLink to={'/installedApps'}>Installation</MyNavLink>
          </li> */}
        </ul>

        <button className="btn bg-purple-500 text-white">
          {" "}
          <LiaGithub /> Contribute
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
