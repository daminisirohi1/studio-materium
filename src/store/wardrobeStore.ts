import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Project, WardrobeItem, WardrobeZone, ItemStatus } from '../types';
import { mockProjects, mockWardrobeItems } from '../data/mockData';

interface WardrobeState {
  activeProject: Project | null;
  projects: Project[];
  items: WardrobeItem[];

  setActiveProject: (project: Project) => void;
  clearActiveProject: () => void;

  addItem: (item: Omit<WardrobeItem, 'id' | 'addedAt' | 'status'>) => WardrobeItem;
  removeItem: (id: string) => void;
  updateItemStatus: (id: string, status: ItemStatus, note?: string) => void;
  updateItemZone: (id: string, zone: WardrobeZone) => void;
  updateItemQuantity: (id: string, quantity: number) => void;
  updateDesignerNote: (id: string, note: string) => void;

  getItemsByProject: (projectId: string) => WardrobeItem[];
  updateProjectStatus: (projectId: string, status: Project['status']) => void;
}

export const useWardrobeStore = create<WardrobeState>()(
  persist(
    (set, get) => ({
      activeProject: null,
      projects: [...mockProjects],
      items: [...mockWardrobeItems],

      setActiveProject: (project) => set({ activeProject: project }),
      clearActiveProject: () => set({ activeProject: null }),

      addItem: (itemData) => {
        const item: WardrobeItem = {
          ...itemData,
          id: `wi-${Date.now()}`,
          status: 'pending',
          addedAt: new Date().toISOString(),
        };
        set(s => ({ items: [...s.items, item] }));
        return item;
      },

      removeItem: (id) => set(s => ({ items: s.items.filter(i => i.id !== id) })),

      updateItemStatus: (id, status, note) =>
        set(s => ({
          items: s.items.map(i =>
            i.id === id ? { ...i, status, ...(note ? { clientNote: note } : {}) } : i
          ),
        })),

      updateItemZone: (id, zone) =>
        set(s => ({ items: s.items.map(i => (i.id === id ? { ...i, zone } : i)) })),

      updateItemQuantity: (id, quantity) =>
        set(s => ({ items: s.items.map(i => (i.id === id ? { ...i, quantity } : i)) })),

      updateDesignerNote: (id, note) =>
        set(s => ({ items: s.items.map(i => (i.id === id ? { ...i, designerNote: note } : i)) })),

      getItemsByProject: (projectId) => get().items.filter(i => i.projectId === projectId),

      updateProjectStatus: (projectId, status) =>
        set(s => ({
          projects: s.projects.map(p =>
            p.id === projectId ? { ...p, status, updatedAt: new Date().toISOString() } : p
          ),
          activeProject:
            s.activeProject?.id === projectId
              ? { ...s.activeProject, status }
              : s.activeProject,
        })),
    }),
    {
      name: 'sm-wardrobe-v1',
      partialize: (state) => ({
        projects: state.projects,
        items: state.items,
        activeProject: state.activeProject,
      }),
    }
  )
);
