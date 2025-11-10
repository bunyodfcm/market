import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLogin } from '../model/useLogin';
import { Icon } from '@iconify/react';
import { useTranslation } from '../../../shared/i18n';
import { useToast } from '../../../shared/ui/toast';

interface LoginFormProps {
  onSuccess?: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onSuccess }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { showToast } = useToast();
  const { handleLogin, isLoading, error, clearError } = useLogin();
  const [formData, setFormData] = useState({
    nickname: '',
    password: '',
    rememberMe: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    clearError();

    try {
      await handleLogin(
        {
          nickname: formData.nickname,
          password: formData.password,
        },
        formData.rememberMe
      );

      // Muvaffaqiyatli login toast
      showToast({
        variant: 'success',
        title: t.common.success,
        message: t.auth.loginSuccess || 'Muvaffaqiyatli kirildi',
        duration: 3000,
      });

      // Muvaffaqiyatli login - dashboard sahifasiga yo'naltirish
      navigate('/');

      // Agar onSuccess callback berilgan bo'lsa, uni chaqirish
      onSuccess?.();
    } catch (err: any) {
      console.error('Login failed:', err);
      // Xatolik toast
      const errorMessage =
        err.response?.data?.message ||
        err.message ||
        t.auth.loginError ||
        'Login xatoligi yuz berdi';
      showToast({
        variant: 'error',
        title: t.common.error,
        message: errorMessage,
        duration: 5000,
      });
    }
  };

  const handleSocialLogin = (provider: 'telegram' | 'google') => {
    console.log(`Login with ${provider}`);
    // Social login logic here
  };

  return (
    <div className="max-w-md w-full space-y-8">
      {/* Login Form */}
      <div className="bg-white py-8 px-6 shadow-lg rounded-lg">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">{t.auth.login}</h2>
        </div>

        {/* Xatolik ko'rsatish (fallback, toast asosiy) */}
        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Nickname Field */}
          <div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <input
                type="text"
                name="nickname"
                value={formData.nickname}
                onChange={handleInputChange}
                placeholder={t.auth.nickname || 'Nickname'}
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900"
                required
                autoComplete="username"
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder={t.auth.password}
                className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900"
                required
                autoComplete="current-password"
              />
            </div>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleInputChange}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label className="ml-2 block text-sm text-gray-600">
                {t.auth.rememberMe || 'Remember me'}
              </label>
            </div>
            <a
              href="/forgot-password"
              className="text-sm text-blue-600 hover:text-blue-500"
            >
              {t.auth.forgotPassword}
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? t.common.loading : t.auth.login.toUpperCase()}
          </button>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                {t.auth.orSignInWith || 'or sign in with'}
              </span>
            </div>
          </div>

          {/* Social Login Buttons */}
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => handleSocialLogin('telegram')}
              className="w-full inline-flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors"
            >
              <Icon icon="logos:telegram" width="20" height="20" />
              <span className="ml-2">Telegram</span>
            </button>

            <button
              type="button"
              onClick={() => handleSocialLogin('google')}
              className="w-full inline-flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors"
            >
              <Icon icon="material-icon-theme:google" width="20" height="20" />
              <span className="ml-2">Google</span>
            </button>
          </div>

          {/* Sign Up Link */}
          <div className="text-center">
            <p className="text-sm text-gray-600">
              {t.auth.dontHaveAccount || "Don't have an account?"}{' '}
              <a
                href="/register"
                className="text-blue-600 hover:text-blue-500 font-medium"
              >
                {t.auth.register}
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
