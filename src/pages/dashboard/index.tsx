import React from 'react';
import { useAuth } from '../../processes/auth/model/useSession';

const DashboardPage: React.FC = () => {
  const { logout } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Xush kelibsiz! Siz muvaffaqiyatli tizimga kirdingiz.
          </p>
          <button
            onClick={logout}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md"
          >
            Chiqish
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
