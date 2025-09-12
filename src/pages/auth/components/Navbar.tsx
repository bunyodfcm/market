import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md p-4">
      <div className=" relative flex items-center justify-between mx-auto max-w-7xl">
        {/* Logo */}
        <div
          className="flex flex-row items-center gap-2 text-blue-500"
          style={{ fontWeight: "bold", fontSize: "1.2rem" }}
        >
          <Icon icon="icon-park-outline:market" width="40" height="40" />
          E-MALL.UZ
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-base font-semibold ${
                  isActive ? "text-blue-600" : "text-gray-500"
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
                  isActive ? "text-blue-600" : "text-gray-500"
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
                  isActive ? "text-blue-600" : "text-gray-500"
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
                  isActive ? "text-blue-600" : "text-gray-500"
                }`
              }
            >
              Register
            </NavLink>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Icon icon={isOpen ? "mdi:close" : "mdi:menu"} width="28" height="28" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="absolute top-full right-0 md:hidden flex flex-col space-y-4 mt-4 p-4 bg-gray-50 rounded-lg shadow transition-all duration-300">
          <li>
            <NavLink
              to="/"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block text-base font-semibold ${
                  isActive ? "text-blue-600" : "text-gray-600"
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/help"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block text-base font-semibold ${
                  isActive ? "text-blue-600" : "text-gray-600"
                }`
              }
            >
              Help
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/auth/login"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block text-base font-semibold ${
                  isActive ? "text-blue-600" : "text-gray-600"
                }`
              }
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/auth/register"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block text-base font-semibold ${
                  isActive ? "text-blue-600" : "text-gray-600"
                }`
              }
            >
              Register
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;