import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { env } from '../../shared/config/env';
import type { User } from './types';

interface AuthState {
  // State
  user: User | null;
  token: string | null;
  pendingToken: string | null; // OTP tasdiqlash uchun
  isAuthenticated: boolean;
  isLoading: boolean;

  // Actions
  login: (token: string, user: User) => void;
  logout: () => void;
  setPendingToken: (token: string) => void;
  clearPendingToken: () => void;
  setUser: (user: User | null) => void;
  setLoading: (loading: boolean) => void;
  updateUser: (user: Partial<User>) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    set => ({
      // Initial state
      user: null,
      token: null,
      pendingToken: null,
      isAuthenticated: false,
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

      logout: () => {
        localStorage.removeItem(env.TOKEN_STORAGE_KEY);
        localStorage.removeItem(env.REFRESH_TOKEN_KEY);
        set({
          user: null,
          token: null,
          pendingToken: null,
          isAuthenticated: false,
          isLoading: false,
        });
        window.dispatchEvent(new Event('authStateChange'));
      },

      setPendingToken: token => {
        set({ pendingToken: token });
      },

      clearPendingToken: () => {
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
    }),
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
