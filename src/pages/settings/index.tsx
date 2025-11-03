// src/pages/settings/index.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import SettingsLayout from './SettingsLayout';

const SettingsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Sozlamalar
        </h1>

        <div className="min-h-screen bg-white dark:bg-gray-800 rounded-lg shadow p-6 mt-6">
          <div className="flex gap-8">
            {/* Chap ustun */}
            <div className="w-64 shrink-0 pr-6 border-r-2 border-r-gray-300">
              <SettingsLayout />
            </div>

            {/* O‘ng content */}
            <div className="flex-1">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
