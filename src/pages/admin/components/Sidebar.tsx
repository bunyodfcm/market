import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  HomeIcon, 
  UsersIcon, 
  ShoppingBagIcon, 
  ChartBarIcon,
  CogIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline';

const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: 'Dashboard', icon: HomeIcon, path: '/admin' },
    { name: 'Users', icon: UsersIcon, path: '/admin/users' },
    { name: 'Products', icon: ShoppingBagIcon, path: '/admin/products' },
    { name: 'Orders', icon: DocumentTextIcon, path: '/admin/orders' },
    { name: 'Analytics', icon: ChartBarIcon, path: '/admin/analytics' },
    { name: 'Settings', icon: CogIcon, path: '/admin/settings' },
  ];

  return (
    <div className={`bg-white shadow-lg transition-all duration-300 ${collapsed ? 'w-16' : 'w-64'}`}>
      <div className="p-4 border-b">
        <h1 className={`font-bold text-xl text-gray-800 ${collapsed ? 'hidden' : 'block'}`}>
          Admin Panel
        </h1>
      </div>
      
      <nav className="mt-6">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors ${
                isActive ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600' : ''
              }`}
            >
              <Icon className="w-5 h-5" />
              {!collapsed && <span className="ml-3">{item.name}</span>}
            </Link>
          );
        })}
      </nav>
      
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-3 top-20 bg-white border border-gray-200 rounded-full p-1 shadow-md hover:shadow-lg transition-shadow"
      >
        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={collapsed ? "M9 5l7 7-7 7" : "M15 19l-7-7 7-7"} />
        </svg>
      </button>
    </div>
  );
};

export default Sidebar;