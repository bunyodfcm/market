import { create } from 'zustand';
import type { User } from './types';

interface UserState {
  // State
  currentUser: User | null;
  selectedUserId: number | null;
  users: User[];
  filters: {
    search: string;
    role: string | null;
    isActive: boolean | null;
  };

  // Actions
  setCurrentUser: (user: User | null) => void;
  setSelectedUserId: (id: number | null) => void;
  setUsers: (users: User[]) => void;
  addUser: (user: User) => void;
  updateUser: (id: number, user: Partial<User>) => void;
  removeUser: (id: number) => void;
  setFilters: (filters: Partial<UserState['filters']>) => void;
  resetFilters: () => void;
}

export const useUserStore = create<UserState>(set => ({
  // Initial state
  currentUser: null,
  selectedUserId: null,
  users: [],
  filters: {
    search: '',
    role: null,
    isActive: null,
  },

  // Actions
  setCurrentUser: user => {
    set({ currentUser: user });
  },

  setSelectedUserId: id => {
    set({ selectedUserId: id });
  },

  setUsers: users => {
    set({ users });
  },

  addUser: user => {
    set(state => ({
      users: [...state.users, user],
    }));
  },

  updateUser: (id, userData) => {
    set(state => ({
      users: state.users.map(user =>
        user.id === id ? { ...user, ...userData } : user
      ),
      currentUser:
        state.currentUser?.id === id
          ? { ...state.currentUser, ...userData }
          : state.currentUser,
    }));
  },

  removeUser: id => {
    set(state => ({
      users: state.users.filter(user => user.id !== id),
      currentUser: state.currentUser?.id === id ? null : state.currentUser,
      selectedUserId: state.selectedUserId === id ? null : state.selectedUserId,
    }));
  },

  setFilters: newFilters => {
    set(state => ({
      filters: { ...state.filters, ...newFilters },
    }));
  },

  resetFilters: () => {
    set({
      filters: {
        search: '',
        role: null,
        isActive: null,
      },
    });
  },
}));
