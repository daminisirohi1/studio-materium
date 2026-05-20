import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { User } from '../types';
import { mockUsers } from '../data/mockData';

interface AuthState {
  user: User | null;
  login: (userId: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      login: (userId) => {
        const user = mockUsers.find(u => u.id === userId) ?? null;
        set({ user });
      },
      logout: () => set({ user: null }),
    }),
    { name: 'sm-auth' }
  )
);
