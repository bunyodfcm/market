import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Icon } from '@iconify/react';

const Sidebar: React.FC = () => {
  const location = useLocation();

  const menuItems = [
    {
      path: '/dashboard',
      icon: 'mdi:view-dashboard',
      label: 'Dashboard',
      uzLabel: 'Bosh sahifa',
    },
    {
      path: '/orders',
      icon: 'mdi:order-bool-descending-variant',
      label: 'Orders',
      uzLabel: 'Buyurtmalar',
    },
    {
      path: '/products',
      icon: 'mdi:package-variant',
      label: 'Products',
      uzLabel: 'Mahsulotlar',
    },
    {
      path: '/sellers',
      icon: 'mdi:user-tie',
      label: 'Sellers',
      uzLabel: 'Sotuvchilar',
    },
    {
      path: '/users',
      icon: 'mdi:account-group',
      label: 'Users',
      uzLabel: 'Foydalanuvchilar',
    },
    {
      path: '/settings',
      icon: 'mdi:cog',
      label: 'Settings',
      uzLabel: 'Sozlamalar',
    },
  ];

  return (
    <div className="h-full bg-gray-50 dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
      {/* Logo va sarlavha */}
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <Icon icon="mdi:store" className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-gray-900 dark:text-white">
              Market
            </h1>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Admin Panel
            </p>
          </div>
        </div>
      </div>

      {/* Navigation menyu */}
      <nav className="p-4 space-y-2">
        {menuItems.map(item => {
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`
                flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors
                ${
                  isActive
                    ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                    : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                }
              `}
            >
              <Icon
                icon={item.icon}
                className={`w-5 h-5 ${
                  isActive ? 'text-blue-600 dark:text-blue-400' : ''
                }`}
              />
              <span className="font-medium">{item.uzLabel}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 dark:border-gray-700">
        <div className="text-xs text-gray-500 dark:text-gray-400 text-center">
          <p>Sudrab kengaytiring/toraytiring</p>
          <p className="mt-1">← → klaviatura bilan</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
