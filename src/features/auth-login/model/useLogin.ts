import { useState } from 'react';
import { useAuthStore } from '../../../app/store/auth.store';
import { authApi, type LoginRequest } from '../api';

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { login } = useAuthStore();

  const handleLogin = async (
    credentials: LoginRequest,
    rememberMe?: boolean
  ) => {
    try {
      setIsLoading(true);
      setError(null);

      // API chaqirish
      const response = await authApi.login(credentials);

      // Token va user'ni store'ga saqlash
      if (response.token && response.user) {
        login(response.token, response.user);

        // Remember me funksiyasi
        if (rememberMe) {
          localStorage.setItem('remember_me', 'true');
        } else {
          localStorage.removeItem('remember_me');
        }
      } else {
        throw new Error("Token yoki user ma'lumotlari topilmadi");
      }

      return response;
    } catch (err: any) {
      const errorMessage =
        err.response?.data?.message ||
        err.message ||
        'Login xatoligi yuz berdi';
      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    handleLogin,
    isLoading,
    error,
    clearError: () => setError(null),
  };
};
