import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import { Icon } from "@iconify/react";
import { menuItems } from "./data";

const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null); // sub-menu uchun
  const location = useLocation();
  const { logout } = useAuth();

  const toggleSubMenu = (name: string) => {
    setOpenMenu(openMenu === name ? null : name);
  };

  return (
    <div
      className={`bg-white shadow-lg transition-all duration-300 h-screen flex flex-col 
        ${collapsed ? "w-16" : "w-64"}`}
    >
      {/* Header */}
      <div className="p-3 border-b text-blue-500 shadow-sm flex justify-between items-center">
        <div className="flex items-center gap-2">
          {!collapsed && (
            <>
              <Icon icon="icon-park-outline:market" width="36" height="36" />
              <h1 className="font-bold text-lg">
                Admin
                <span className="text-blue-500 text-sm block">E-MALL.UZ</span>
              </h1>
            </>
          )}
        </div>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="bg-white border-none p-2 hover:text-blue-700 transition-colors"
        >
          <Icon
            icon="eva:menu-arrow-outline"
            width="24"
            height="24"
            className={`transition-transform duration-300 ${
              collapsed ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      {/* Menu */}
      <nav className={`mt-6 flex-1 ${collapsed ? "mx-2" : "mx-4"} space-y-2`}>
        {menuItems.map((item) => {
          const IconComp = item.icon;
          const isActive = location.pathname === item.path;

          if (item.children) {
            // 🔹 Sub-menu
            return (
              <div key={item.name}>
                <button
                  onClick={() => toggleSubMenu(item.name)}
                  className={`flex items-center w-full py-3 rounded-lg transition-colors ${
                    collapsed ? "justify-center px-2" : "px-4"
                  } ${
                    openMenu === item.name
                      ? "bg-blue-50 text-blue-600 border border-blue-600"
                      : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  }`}
                >
                  {IconComp && <IconComp className="w-5 h-5" />}
                  {!collapsed && <span className="ml-3">{item.name}</span>}
                  {!collapsed && (
                    <Icon
                      icon="mdi:chevron-down"
                      className={`ml-auto transition-transform ${
                        openMenu === item.name ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </button>

                {/* Sub-menu items */}
                {openMenu === item.name && !collapsed && (
                  <div className="ml-8 mt-1 space-y-1">
                    {item.children.map((sub) => {
                      const subActive = location.pathname === sub.path;
                      return (
                        <Link
                          key={sub.name}
                          to={sub.path}
                          className={`block py-2 px-3 rounded-md text-sm transition-colors ${
                            subActive
                              ? "bg-blue-100 text-blue-600"
                              : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                          }`}
                        >
                          {sub.name}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          }

          // 🔹 Oddiy menu
          return (
            <Link
              key={item.name}
              to={item.path!}
              className={`flex items-center py-3 rounded-lg transition-colors ${
                collapsed ? "justify-center px-2" : "px-4"
              } ${
                isActive
                  ? "bg-blue-50 text-blue-600 border border-blue-600"
                  : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
              }`}
            >
              {IconComp && <IconComp className="w-5 h-5" />}
              {!collapsed && <span className="ml-3">{item.name}</span>}
            </Link>
          );
        })}
      </nav>

      {/* Footer (Logout) */}
      <div className={`border-t p-4 ${collapsed ? "flex justify-center" : ""}`}>
        <button
          onClick={logout}
          className="flex items-center text-red-700 hover:bg-red-50 hover:text-red-600 transition-colors px-4 py-2 rounded-lg w-full justify-center md:justify-start"
        >
          <Icon icon="tabler:logout-2" width="20" height="20" />
          {!collapsed && <span className="ml-2 font-semibold">Log Out</span>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
