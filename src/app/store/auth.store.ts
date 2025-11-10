import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { env } from '../../shared/config/env';
import type { User } from './types';
import { authApi } from '../../features/auth-login/api';

interface AuthState {
  // State
  user: User | null;
  token: string | null;
  pendingToken: string | null; // OTP tasdiqlash uchun
  isAuthenticated: boolean;
  isLoading: boolean;

  // Actions
  login: (token: string, user: User) => void;
  logout: () => Promise<void>;
  setPendingToken: (token: string) => void;
  clearPendingToken: () => void;
  setUser: (user: User | null) => void;
  setLoading: (loading: boolean) => void;
  updateUser: (user: Partial<User>) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    set => {
      // Initial state - token mavjudligini tekshirish
      const token = localStorage.getItem(env.TOKEN_STORAGE_KEY);
      const initialAuth = !!token;

      return {
        // Initial state
        user: null,
        token: token,
        pendingToken: null,
        isAuthenticated: initialAuth,
        isLoading: false,

        // Actions
        login: (token, user) => {
          localStorage.setItem(env.TOKEN_STORAGE_KEY, token);
          set({
            token,
            user,
            isAuthenticated: true,
            isLoading: false,
          });
          // Custom event dispatch qilish (mavjud kod bilan moslashish uchun)
          window.dispatchEvent(new Event('authStateChange'));
        },

        logout: async () => {
          try {
            // API'ga logout so'rov yuborish
            await authApi.logout();
          } catch (error) {
            // API xatosi bo'lsa ham logout qilish (offline mode)
            console.error('Logout API error:', error);
          } finally {
            // LocalStorage va state'ni tozalash
            localStorage.removeItem(env.TOKEN_STORAGE_KEY);
            localStorage.removeItem(env.REFRESH_TOKEN_KEY);
            set({
              user: null,
              token: null,
              pendingToken: null,
              isAuthenticated: false,
              isLoading: false,
            });
            // Custom event dispatch qilish (mavjud kod bilan moslashish uchun)
            window.dispatchEvent(new Event('authStateChange'));
            // Login sahifasiga yo'naltirish
            window.location.href = '/login';
          }
        },

        setPendingToken: token => {
          // Pending token'ni sessionStorage'ga saqlash (asosiy token emas)
          // SessionStorage ishlatiladi, chunki bu vaqtinchalik token
          sessionStorage.setItem('pending_token', token);
          set({ pendingToken: token });
        },

        clearPendingToken: () => {
          // Pending token'ni tozalash
          sessionStorage.removeItem('pending_token');
          set({ pendingToken: null });
        },

        setUser: user => {
          set({ user });
        },

        setLoading: loading => {
          set({ isLoading: loading });
        },

        updateUser: userData => {
          set(state => ({
            user: state.user ? { ...state.user, ...userData } : null,
          }));
        },
      };
    },
    {
      name: 'auth-storage',
      partialize: state => ({
        user: state.user,
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        // pendingToken va isLoading persist qilinmaydi
      }),
    }
  )
);
