import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import {
  HomeIcon,
  HomeModernIcon,
  UsersIcon,
  ShoppingBagIcon,
  ChartBarIcon,
  CogIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";
import { Icon } from "@iconify/react";

const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const { logout } = useAuth();

  const menuItems = [
    { name: "Dashboard", icon: HomeIcon, path: "/admin" },
    { name: "Kompaniya", icon: HomeModernIcon, path: "/admin/companies" },
    { name: "Ishchi-Xizmatchilar", icon: UsersIcon, path: "/admin/users" },
    { name: "Maxsulotlar", icon: ShoppingBagIcon, path: "/admin/products" },
    { name: "Omborlar", icon: DocumentTextIcon, path: "/admin/warehouses" },
    { name: "Hisobotlar", icon: ChartBarIcon, path: "/admin/analytics" },
    { name: "Sozlamalar", icon: CogIcon, path: "/admin/settings" },
  ];

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

          return (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center py-3 rounded-lg transition-colors ${
                collapsed ? "justify-center px-2" : "px-4"
              } ${
                isActive
                  ? "bg-blue-50 text-blue-600 border border-blue-600"
                  : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
              }`}
            >
              <IconComp className="w-5 h-5" />
              {!collapsed && <span className="ml-3">{item.name}</span>}
            </Link>
          );
        })}
      </nav>

      {/* Footer (Logout) */}
      <div
        className={`border-t p-4 ${
          collapsed ? "flex justify-center" : ""
        }`}
      >
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