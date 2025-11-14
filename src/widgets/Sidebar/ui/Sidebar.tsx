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
      path: '/companies',
      icon: 'pixel:tech-companies',
      label: 'Companies',
      uzLabel: 'Kompaniyalar',
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
      path: '/reviews',
      icon: 'mdi:rate-review',
      label: 'Reviews',
      uzLabel: 'Sharhlar',
    },
    {
      path: '/transactions',
      icon: 'mdi:money-100',
      label: 'Transactions',
      uzLabel: 'Tranzaksiyalar',
    },
    {
      path: '/settings',
      icon: 'mdi:cog',
      label: 'Settings',
      uzLabel: 'Sozlamalar',
    },
  ];

  return (
    <div className="h-full bg-gray-50 border-r border-gray-200">
      {/* Logo va sarlavha */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <Icon icon="mdi:store" className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-gray-900">Market</h1>
            <p className="text-xs text-gray-500">Admin Panel</p>
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
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-700 hover:bg-gray-100'
                }
              `}
            >
              <Icon
                icon={item.icon}
                className={`w-5 h-5 ${isActive ? 'text-blue-600' : ''}`}
              />
              <span className="font-medium">{item.uzLabel}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
