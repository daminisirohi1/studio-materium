export type UserRole = 'admin' | 'designer' | 'client';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

export type ProjectStatus = 'briefing' | 'configuring' | 'review' | 'revisions' | 'finalized';

export interface Project {
  id: string;
  name: string;
  clientId: string;
  designerId: string;
  status: ProjectStatus;
  createdAt: string;
  updatedAt: string;
  description?: string;
}

export type WardrobeZone =
  | 'hanging-full'
  | 'hanging-half'
  | 'shelving'
  | 'drawers'
  | 'shoe-rack'
  | 'accessories';

export type ItemStatus = 'pending' | 'approved' | 'flagged';

export interface WardrobeItem {
  id: string;
  projectId: string;
  categoryId: string;
  categoryName: string;
  sectionTitle: string;
  name: string;
  variant: string;
  material: string;
  color: string;
  accessories: string[];
  brand: string;
  quantity: number;
  zone: WardrobeZone;
  status: ItemStatus;
  clientNote?: string;
  designerNote?: string;
  img: string;
  addedAt: string;
}

export interface CatalogCategory {
  id: string;
  name: string;
  parent: string;
  img: string;
  tag: string;
}

export interface CatalogItem {
  name: string;
  sub: string;
  mat?: string;
  col?: string;
  img: string;
  imgs?: string[];
}

export interface CatalogSection {
  title: string;
  items: CatalogItem[];
}

export interface StorageInfo {
  care: { ico: string; lbl: string }[];
  tips: string[];
  care_tips?: string[];
  img: string;
  annotations?: { title: string; detail: string }[];
  washing?: { temp: string; cycle: string; dry: string; iron: string; special?: string };
  hangers?: { type: string; barDia?: string; spacing: string; note?: string }[];
  blueprint?: { zone: string; height: string; depth: string; note: string }[];
}

export interface RetailInfo {
  tips: string[];
  brands: Record<string, string[]>;
  displayConfigs?: { name: string; desc: string; img: string }[];
  displayAccessories?: { name: string; desc: string; img: string }[];
  img: string;
  lighting?: { angle: string; lux: string; cct: string; fixture?: string };
  dimensions?: { label: string; value: string }[];
}

export interface CatalogProduct {
  banner: string;
  sections: CatalogSection[];
  storage?: StorageInfo;
  retail?: RetailInfo;
}

export interface ClientProfile {
  userId: string;
  gender: 'men' | 'women' | 'kids';
  occasions: string[];
  preferredBrands: string[];
  avoidBrands: string[];
  colorPalette: string[];
  lifestyle: string[];
  notes?: string;
}

export interface Notification {
  id: string;
  type: 'item-added' | 'item-approved' | 'item-flagged' | 'review-submitted' | 'project-finalized';
  message: string;
  projectId: string;
  read: boolean;
  createdAt: string;
}

export type Gender = 'men' | 'women' | 'kids';
