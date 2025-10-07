import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export const useAuth = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // localStorage o'zgarishini kuzatish
  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem('auth_token');
      setIsAuthenticated(!!token);
      setIsLoading(false);
    };

    // Dastlabki tekshirish
    checkAuth();

    // Custom event listener - o'z tab/window da localStorage o'zgarishini kuzatish
    const handleCustomStorageChange = () => {
      checkAuth();
    };

    // Custom event yaratish
    window.addEventListener('authStateChange', handleCustomStorageChange);

    return () => {
      window.removeEventListener('authStateChange', handleCustomStorageChange);
    };
  }, []);

  const login = useCallback((token: string) => {
    localStorage.setItem('auth_token', token);
    setIsAuthenticated(true);
    setIsLoading(false);
    // Custom event dispatch qilish
    window.dispatchEvent(new Event('authStateChange'));
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem('auth_token');
    setIsAuthenticated(false);
    setIsLoading(false);
    // Custom event dispatch qilish
    window.dispatchEvent(new Event('authStateChange'));
    // Navigate faqat Router kontekstida ishlaydi
    if (typeof window !== 'undefined') {
      navigate('/login');
    }
  }, [navigate]);

  return {
    isAuthenticated,
    isLoading,
    login,
    logout,
  };
};
