import { create } from 'zustand';
import type { Notification } from './types';

interface NotificationState {
  // State
  notifications: Notification[];
  unreadCount: number;

  // Actions
  setNotifications: (notifications: Notification[]) => void;
  addNotification: (notification: Notification) => void;
  markAsRead: (id: number) => void;
  markAllAsRead: () => void;
  removeNotification: (id: number) => void;
  clearNotifications: () => void;
}

export const useNotificationStore = create<NotificationState>(set => ({
  // Initial state
  notifications: [],
  unreadCount: 0,

  // Actions
  setNotifications: notifications => {
    const unreadCount = notifications.filter(n => !n.read).length;
    set({ notifications, unreadCount });
  },

  addNotification: notification => {
    set(state => {
      const notifications = [notification, ...state.notifications];
      const unreadCount = notifications.filter(n => !n.read).length;
      return { notifications, unreadCount };
    });
  },

  markAsRead: id => {
    set(state => {
      const notifications = state.notifications.map(n =>
        n.id === id ? { ...n, read: true } : n
      );
      const unreadCount = notifications.filter(n => !n.read).length;
      return { notifications, unreadCount };
    });
  },

  markAllAsRead: () => {
    set(state => {
      const notifications = state.notifications.map(n => ({
        ...n,
        read: true,
      }));
      return { notifications, unreadCount: 0 };
    });
  },

  removeNotification: id => {
    set(state => {
      const notifications = state.notifications.filter(n => n.id !== id);
      const unreadCount = notifications.filter(n => !n.read).length;
      return { notifications, unreadCount };
    });
  },

  clearNotifications: () => {
    set({ notifications: [], unreadCount: 0 });
  },
}));
