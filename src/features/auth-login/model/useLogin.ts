import { useState } from 'react';
import { useAuth } from '../../../processes/auth/model/useSession';
import { authApi, type LoginRequest } from '../api';

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { login } = useAuth();

  const handleLogin = async (credentials: LoginRequest) => {
    try {
      setIsLoading(true);
      setError(null);

      // API chaqirish
      const response = await authApi.login(credentials);
      
      // Token saqlash
      login(response.token);
      
      return response;
    } catch (err: any) {
      const errorMessage = err.response?.data?.message || 'Login xatoligi';
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