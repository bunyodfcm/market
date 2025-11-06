import { Icon } from '@iconify/react';
import { useState, useRef, useEffect } from 'react';
import { useAuthStore } from '../../app/store';
import { useTranslation } from '../../shared/i18n/hooks/useTranslation';

const Topbar = () => {
  const { logout, user } = useAuthStore();
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Click outside to close menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <div className="flex items-center justify-between px-6 py-6 border-b-2 border-b-gray-200 bg-gray-50 shadow-sm">
      {/* Search Box */}
      <div className="flex items-center  rounded-md px-3 py-1 w-64">
        <Icon
          icon="mdi:search"
          width="24"
          height="24"
          className="text-gray-400 mr-2"
        />
        <input
          type="text"
          placeholder="Search"
          className="outline-none w-full text-gray-400 placeholder-gray-400"
        />
      </div>

      {/* Right Side Icons and Profile */}
      <div className="flex items-center space-x-6">
        {/* Sun Icon */}
        <Icon
          icon="mdi:white-balance-sunny"
          className="text-gray-400 cursor-pointer hover:text-gray-600"
          width="24"
          height="24"
        />

        {/* Notification Icon with red dot */}
        <div className="relative cursor-pointer">
          <Icon
            icon="mdi:bell"
            className="text-gray-400 hover:text-gray-600"
            width="24"
            height="24"
          />
          <span className="absolute top-0 right-0 block h-2 w-2 rounded-full ring-2 ring-white bg-red-600"></span>
        </div>

        {/* Profile Image with Dropdown */}
        <div className="relative" ref={menuRef}>
          <div
            className="flex items-center space-x-1 cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <img
              src={
                user?.avatarUrl ||
                'https://randomuser.me/api/portraits/men/75.jpg'
              }
              alt="profile"
              className="w-10 h-10 rounded-full object-cover"
            />
            <Icon
              icon="ep:arrow-down-bold"
              className={`text-gray-400 hover:text-gray-600 transition-transform ${
                isMenuOpen ? 'rotate-180' : ''
              }`}
              width="16"
              height="16"
            />
          </div>

          {/* Dropdown Menu */}
          {isMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
              {/* User Info */}
              <div className="px-4 py-2 border-b border-gray-200">
                <p className="text-sm font-medium text-gray-900">
                  {user?.nickname || 'User'}
                </p>
                <p className="text-xs text-gray-500 truncate">
                  {user?.phone || ''}
                </p>
              </div>

              {/* Menu Items */}
              <a
                href="/settings"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <div className="flex items-center">
                  <Icon icon="mdi:cog" className="mr-2" width="16" />
                  {t.nav.settings}
                </div>
              </a>

              {/* Logout Button */}
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center"
              >
                <Icon icon="mdi:logout" className="mr-2" width="16" />
                {t.auth.logout}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
