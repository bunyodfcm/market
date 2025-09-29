import React from 'react';
import { LoginForm } from '../../features/auth-login/ui/LoginForm';

const LoginPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">A</span>
                </div>
              </div>
              <span className="ml-2 text-xl font-semibold text-gray-900 dark:text-white">
                Admin
              </span>
            </div>

            {/* Navigation */}
            <nav className="flex space-x-4">
              <a
                href="#"
                className="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white px-3 py-2 text-sm font-medium"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white px-3 py-2 text-sm font-medium"
              >
                Help
              </a>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-500 px-3 py-2 text-sm font-medium"
              >
                Login
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white px-3 py-2 text-sm font-medium"
              >
                Register
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <LoginForm />
      </main>
    </div>
  );
};

export default LoginPage;
