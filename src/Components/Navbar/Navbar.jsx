import React from "react";
import { NavLink } from "react-router";
import DownloadButton from "../Home/DownloadButton";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              /> {" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? " text-blue-500" : "")}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? " text-blue-500" : "")}
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? " text-blue-500" : "")}
                to="/skill"
              >
                skill
              </NavLink>
            </li>
          <li>
              <NavLink
                className={({ isActive }) => (isActive ? " text-blue-500" : "")}
                to="/education"
              >
                Education
              </NavLink>
            </li>
          <li>
              <NavLink
                className={({ isActive }) => (isActive ? " text-blue-500" : "")}
                to="/project"
              >
                Project
              </NavLink>
            </li>
          <li>
              <NavLink
                className={({ isActive }) => (isActive ? " text-blue-500" : "")}
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <img
          className="w-12 h-12 rounded-full "
          src="https://i.ibb.co.com/K4nWhZV/428627388-422342900356265-7434904533576471488-n.jpg"
          alt=""
        />
        {/* <h5 className="btn btn-ghost text-xl"></h5> */}
        
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? " text-blue-500" : "")}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
              <NavLink
                className={({ isActive }) => (isActive ? " text-blue-500" : "")}
                to="/about"
              >
                About
              </NavLink>
            </li>
          <li>
              <NavLink
                className={({ isActive }) => (isActive ? " text-blue-500" : "")}
                to="/skill"
              >
                skill
              </NavLink>
            </li>
          <li>
              <NavLink
                className={({ isActive }) => (isActive ? " text-blue-500" : "")}
                to="/education"
              >
                Education
              </NavLink>
            </li>
          <li>
              <NavLink
                className={({ isActive }) => (isActive ? " text-blue-500" : "")}
                to="/project"
              >
                Project
              </NavLink>
            </li>
          <li>
              <NavLink
                className={({ isActive }) => (isActive ? " text-blue-500" : "")}
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
        </ul>
      </div>
      <div className="navbar-end gap-3">
            <DownloadButton></DownloadButton>
      </div>
    </div>
  );
};

export default Navbar;
