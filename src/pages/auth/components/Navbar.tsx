import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";

type NavItem = {
  name: string;
  path: string;
};

const navItems: NavItem[] = [
  { name: "Home", path: "/" },
  { name: "Help", path: "/help" },
  { name: "Login", path: "/auth/login" },
  { name: "Register", path: "/auth/register" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="flex items-center justify-between mx-auto max-w-7xl">
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
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `text-base font-semibold transition-colors ${
                    isActive ? "text-blue-600" : "text-gray-500 hover:text-blue-500"
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <Icon icon={isOpen ? "mdi:close" : "mdi:menu"} width="28" height="28" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col space-y-4 mt-4 p-4 bg-gray-50 rounded-lg shadow">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block text-base font-semibold transition-colors ${
                    isActive ? "text-blue-600" : "text-gray-600 hover:text-blue-500"
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;