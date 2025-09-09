import React from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="flex items-center justify-between mx-auto">
        <div
          className="flex flex-row items-center gap-2 text-blue-500"
          style={{ fontWeight: "bold", fontSize: "1.2rem" }}
        >
          <Icon icon="icon-park-outline:market" width="48" height="48" />
          E-MALL.UZ
        </div>
        <ul className="flex space-x-6">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-base font-semibold ${
                  isActive ? "text-blue-600 border-blue-600" : "text-gray-500"
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/help"
              className={({ isActive }) =>
                `text-base font-semibold ${
                  isActive ? "text-blue-600 border-blue-600" : "text-gray-500"
                }`
              }
            >
              Help
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/auth/login"
              className={({ isActive }) =>
                `text-base font-semibold ${
                  isActive ? "text-blue-600  border-blue-600" : "text-gray-500"
                }`
              }
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/auth/register"
              className={({ isActive }) =>
                `text-base font-semibold ${
                  isActive ? "text-blue-600  border-blue-600" : "text-gray-500"
                }`
              }
            >
              Register
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
