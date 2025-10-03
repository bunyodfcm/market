import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRegister } from '../model/useRegister';
import { Icon } from '@iconify/react';
import { Alert } from '../../../shared/ui/alert/Alert';

interface RegisterFormProps {
  onSuccess?: () => void;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({ onSuccess }) => {
  const {
    handleRegister,
    isLoading,
    error,
    successMessage,
    clearError,
    clearSuccessMessage,
  } = useRegister();
  const [formData, setFormData] = useState({
    phone: '',
    nickname: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await handleRegister(formData);
      onSuccess?.();
    } catch (err) {
      console.error('Registration failed:', err);
    }
  };

  return (
    <div className="max-w-md w-full space-y-8">
      {/* Register Form */}
      <div className="bg-white dark:bg-gray-800 py-8 px-6 shadow-lg rounded-lg">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Sign up
          </h2>
        </div>

        {/* Success Alert */}
        {successMessage && (
          <Alert
            variant="success"
            title="Muvaffaqiyat!"
            message={successMessage}
            onClose={clearSuccessMessage}
            className="mb-4"
          />
        )}

        {/* Error Alert */}
        {error && (
          <Alert
            variant="error"
            title="Xatolik"
            message={error}
            onClose={clearError}
            className="mb-4"
          />
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Phone Field */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Icon icon="mdi:phone" className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Phone number"
              pattern="[0-9+\-\s()]*"
              inputMode="numeric"
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 rounded-md placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              required
            />
          </div>

          {/* Nickname Field */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Icon icon="mdi:account" className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              name="nickname"
              value={formData.nickname}
              onChange={handleInputChange}
              placeholder="Username"
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 rounded-md placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              required
            />
          </div>

          {/* Password Field */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Icon icon="mdi:lock" className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Password"
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 rounded-md placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              required
            />
          </div>

          {/* Confirm Password Field */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Icon icon="mdi:lock-check" className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              placeholder="Confirm Password"
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 rounded-md placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              required
            />
          </div>

          {/* Legal Text */}
          <div className="text-xs text-gray-500 dark:text-gray-400">
            By signing up, you confirm that you've read and accepted our{' '}
            <a href="#" className="text-blue-600 hover:text-blue-500">
              User Notice
            </a>{' '}
            and{' '}
            <a href="#" className="text-blue-600 hover:text-blue-500">
              Privacy Policy
            </a>
            .
          </div>

          {/* Register Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Loading...' : 'Register'}
          </button>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300 dark:border-gray-600" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                or sign up with
              </span>
            </div>
          </div>

          {/* Social Login Buttons */}
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              className="w-full inline-flex items-center justify-center py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-sm font-medium text-gray-500 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
            >
              <Icon icon="logos:facebook" width="20" height="20" />
              <span className="ml-2">Facebook</span>
            </button>

            <button
              type="button"
              className="w-full inline-flex items-center justify-center py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-sm font-medium text-gray-500 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
            >
              <Icon icon="logos:google-icon" width="20" height="20" />
              <span className="ml-2">Google</span>
            </button>
          </div>

          {/* Login Link */}
          <div className="text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Already have an account?{' '}
              <Link
                to="/login"
                className="text-blue-600 hover:text-blue-500 font-medium"
              >
                Sign In
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
