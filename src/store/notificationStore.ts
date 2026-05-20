import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Notification } from '../types';
import { mockNotifications } from '../data/mockData';

interface NotificationState {
  notifications: Notification[];
  addNotification: (n: Omit<Notification, 'id' | 'createdAt' | 'read'>) => void;
  markRead: (id: string) => void;
  markAllRead: () => void;
}

export const useNotificationStore = create<NotificationState>()(
  persist(
    (set) => ({
      notifications: [...mockNotifications],

      addNotification: (n) =>
        set(s => ({
          notifications: [
            { ...n, id: `n-${Date.now()}`, read: false, createdAt: new Date().toISOString() },
            ...s.notifications,
          ],
        })),

      markRead: (id) =>
        set(s => ({ notifications: s.notifications.map(n => n.id === id ? { ...n, read: true } : n) })),

      markAllRead: () =>
        set(s => ({ notifications: s.notifications.map(n => ({ ...n, read: true })) })),
    }),
    { name: 'sm-notifications-v1' }
  )
);
