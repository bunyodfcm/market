import axios from 'axios';
import type {
  AxiosInstance,
  AxiosResponse,
  AxiosError,
  InternalAxiosRequestConfig,
} from 'axios';
import { env } from '../config/env';

// Base API client
export const apiClient: AxiosInstance = axios.create({
  baseURL: env.API_BASE_URL,
  timeout: env.API_TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor - token qo'shish
apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem(env.TOKEN_STORAGE_KEY);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// Response interceptor - xatoliklarni boshqarish va token refresh
apiClient.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & {
      _retry?: boolean;
    };

    // 401 xatolik - token muddati tugagan
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // Token refresh qilish
        const refreshToken = localStorage.getItem(env.REFRESH_TOKEN_KEY);
        if (refreshToken) {
          const { authApi } = await import('../../features/auth-login/api');
          const response = await authApi.refreshToken(refreshToken);

          // Yangi token'ni saqlash
          localStorage.setItem(env.TOKEN_STORAGE_KEY, response.token);

          // Original request'ni qayta yuborish
          if (originalRequest.headers) {
            originalRequest.headers.Authorization = `Bearer ${response.token}`;
          }

          return apiClient(originalRequest);
        }
      } catch (refreshError) {
        // Refresh xatolik - logout qilish
        console.error('Token refresh failed:', refreshError);
        localStorage.removeItem(env.TOKEN_STORAGE_KEY);
        localStorage.removeItem(env.REFRESH_TOKEN_KEY);
        window.location.href = '/login';
        return Promise.reject(refreshError);
      }

      // Refresh token yo'q - logout qilish
      localStorage.removeItem(env.TOKEN_STORAGE_KEY);
      localStorage.removeItem(env.REFRESH_TOKEN_KEY);
      window.location.href = '/login';
    }

    return Promise.reject(error);
  }
);
