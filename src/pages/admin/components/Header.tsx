import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BellIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Icon } from "@iconify/react/dist/iconify.js";


const Header: React.FC = () => {
  const [searchInput, setSearchInput] = useState("");
  const [darkmode, setDarkmode] = useState(false);
  const [adminMenuOpen, setAdminMenuOpen] = useState(false);
  const navigate = useNavigate()

  const toggleAdminMenu = () => {
    setAdminMenuOpen(!adminMenuOpen);
  };

  const toggleDarkMode = () => {
    setDarkmode(!darkmode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header className=" bg-white shadow-md border-b  border-gray-200 px-7 py-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="ml-8 pl-2 pr-4 py-0 border-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </div>
        </div>

        <div className=" relative flex items-center space-x-3">
          <button
            className="relative p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => toggleDarkMode()}
          >
            {darkmode ? (
              <Icon icon="tdesign:mode-dark" width="25" height="24" />
            ) : (
              <Icon icon="entypo:light-up" width="24" height="24" />
            )}
          </button>
          <button className="relative p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors">
            <BellIcon className="w-6 h-6" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          <div className="flex items-center space-x-0">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face"
              alt="User avatar"
              className="w-10 h-10 rounded-full cursor-pointer"
              onClick={()=>navigate('/admin/profile')}
            />
            <div className="md:block">
              <button
                onClick={() => toggleAdminMenu()}
                className="ml-2 flex items-center"
              >
                <Icon
                  icon={
                    adminMenuOpen
                      ? "iconamoon:arrow-up-2-duotone"
                      : "iconamoon:arrow-down-2-duotone"
                  }
                  width="24"
                  height="24"
                />
              </button>
              {adminMenuOpen && (
                <div className="absolute right-2 mt-10 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  <div>
                    <div className="px-4 py-2 border-b border-gray-200">
                      <p className="text-gray-800 font-semibold">Admin Menu</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-start border-gray-200 px-4 py-2 space-x-2">
                    <Icon icon="carbon:user-profile" width="24" height="24" />
                    <Link
                      to="/admin/profile"
                      className="block px-1 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Profile
                    </Link>
                  </div>
                  <div className="flex items-center justify-start border-gray-200 px-4 py-2 space-x-2">
                    <Icon icon="mingcute:settings-7-line" width="24" height="24" />
                  <Link
                    to="/admin/settings"
                    className="block px-1 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Settings
                  </Link>
                  </div>
                  <div className="flex items-center justify-start border-gray-200 px-4 py-2 space-x-2">
                  <Icon icon="ic:outline-design-services" width="24" height="24" />
                  <Link
                    to="/admin/services"
                    className="block px-1 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Services
                  </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
