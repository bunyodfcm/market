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
  const [open, setOpen] = useState(false); // 📱 Mobil uchun
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
    <>
      {/* 📱 Mobil menyu tugmasi */}
      <button
        onClick={() => setOpen(true)}
        className="md:hidden p-3 text-blue-600"
      >
        <Icon icon="ci:hamburger-md" width="28" height="28" />
      </button>

      {/* Overlay (mobil ochilganda) */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed md:static top-0 left-0 h-screen bg-white shadow-lg transition-all duration-300 flex flex-col z-50
          ${collapsed ? "w-16" : "w-64"}
          ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
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
          <div className="flex gap-2">
            {/* Collapse toggle */}
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="bg-white border-none p-2 hover:text-blue-700 transition-colors hidden md:block"
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
            {/* Mobil yopish tugmasi */}
            <button
              onClick={() => setOpen(false)}
              className="md:hidden p-2 text-red-600"
            >
              <Icon icon="ic:round-close" width="24" height="24" />
            </button>
          </div>
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
                onClick={() => setOpen(false)} // 📱 Mobilda avtomatik yopiladi
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
    </>
  );
};

export default Sidebar;