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
    { name: "Companies", icon: HomeModernIcon, path: "/admin/companies" },
    { name: "Customers", icon: UsersIcon, path: "/admin/users" },
    { name: "Products", icon: ShoppingBagIcon, path: "/admin/products" },
    { name: "WareHouses", icon: DocumentTextIcon, path: "/admin/warehouses" },
    { name: "Analytics", icon: ChartBarIcon, path: "/admin/analytics" },
    { name: "Settings", icon: CogIcon, path: "/admin/settings" },
  ];

  return (
    <div
      className={`bg-white shadow-lg transition-all duration-300 ${
        collapsed ? "w-16" : "w-64"
      } transform transform-all duration-300`}
    >
      <div className="relative p-3 border-b text-blue-500 border-b border-r shadow-md">
        <div
          className="flex flex-row items-center justify-between space-x-2 text-blue-500 mb-4"
          style={{ fontWeight: "bold", fontSize: "1.2rem" }}
        >
          <div className="flex flex-row items-center gap-2">
            <div
              className={`drop-shadow-lg ${
                collapsed ? "hidden" : ""
              } items-center justify-center`}
            >
              <Icon icon="icon-park-outline:market" width="48" height="48" />
            </div>
            <h1
              className={`font-bold text-xl ${collapsed ? "hidden" : "block"}`}
            >
              Admin
              <span className="text-blue-500 text-sm block">E-MALL.UZ</span>
            </h1>
          </div>
          <button
            onClick={() => setCollapsed(!collapsed)}
            className={` bg-white border-none py-3 hover:text-blue-700 transition-colors ${
              collapsed ? "rotate-180" : ""
            }`}
          >
            <Icon icon="eva:menu-arrow-outline" width="24" height="24" />
          </button>
        </div>
      </div>

      <nav className={`mt-6  ${collapsed ? "mx-2" : "mx-4"} space-y-3`}>
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center py-3 ${collapsed  ? "px-2 justify-center":"px-4 "} text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors ${
                isActive
                  ? "bg-blue-50 text-blue-600 border-1 rounded-lg border-blue-600"
                  : ""
              }`}
            >
              <Icon className="w-5 h-5" />
              {!collapsed && <span className="ml-3">{item.name}</span>}
            </Link>
          );
        })}
      </nav>

      <div className={`bottom-0 w-full mt-6 pt-4 border-t ${collapsed  ? "px-2 justify-center":"px-4 "}`}>
        <button
          className={`w-full font-semibold flex items-center  px-4 py-3 space-x-2 text-red-700 hover:bg-red-50 hover:text-red-600 transition-colors`}
          onClick={() => {
            logout();
          }}
        >
          <Icon icon="tabler:logout-2" width="20" height="20" />
          <span className={` ${
                collapsed ? "hidden" : "block"
          }`}>Log Out</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
