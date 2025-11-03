// src/pages/settings/SettingsLayout.tsx
import { NavLink } from 'react-router-dom';

const SettingsLayout = () => {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `block px-3 py-2 rounded-md transition-colors ${
      isActive
        ? 'bg-gray-200 dark:bg-gray-700 font-semibold'
        : 'hover:bg-gray-100 dark:hover:bg-gray-700'
    }`;

  return (
    <nav className="flex flex-col space-y-2">
      <NavLink to="general" className={linkClass}>
        Umumiy
      </NavLink>
      <NavLink to="security" className={linkClass}>
        Xavfsizlik
      </NavLink>
      <NavLink to="notifications" className={linkClass}>
        Bildirishnomalar
      </NavLink>
    </nav>
  );
};

export default SettingsLayout;
