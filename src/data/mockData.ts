import type { User, Project, WardrobeItem, ClientProfile, Notification } from '../types';

const F = (kw: string, w = 600, h = 0, lk = 0) =>
  `https://loremflickr.com/${w}/${h || Math.round(w * 1.4)}/${kw}/all${lk ? '?lock=' + lk : ''}`;

export const mockUsers: User[] = [
  { id: 'u1', name: 'Priya Sharma',    email: 'priya@studiomaterium.com',   role: 'admin' },
  { id: 'u2', name: 'Arjun Mehta',     email: 'arjun@studiomaterium.com',   role: 'designer' },
  { id: 'u3', name: 'Kavya Nair',       email: 'kavya@studiomaterium.com',   role: 'designer' },
  { id: 'u4', name: 'Rahul Kapoor',    email: 'rahul@kapoorindustries.com',  role: 'client' },
  { id: 'u5', name: 'Natasha Singh',   email: 'natasha@nsingh.co',           role: 'client' },
  { id: 'u6', name: 'Vikram Malhotra',  email: 'vikram@malhotragroup.com',    role: 'client' },
];

export const mockProjects: Project[] = [
  {
    id: 'p1',
    name: 'Kapoor Residence — Master Wardrobe',
    clientId: 'u4',
    designerId: 'u2',
    status: 'review',
    createdAt: '2026-03-10T09:00:00Z',
    updatedAt: '2026-05-08T14:30:00Z',
    description: 'Full master wardrobe configuration for Rahul Kapoor — formal, business, sports and heritage sections.',
  },
  {
    id: 'p2',
    name: 'Singh Penthouse — His & Hers Wardrobe',
    clientId: 'u5',
    designerId: 'u3',
    status: 'configuring',
    createdAt: '2026-04-02T10:00:00Z',
    updatedAt: '2026-05-10T11:00:00Z',
    description: 'Dual wardrobe system for Natasha and partner. Shared accessories zone.',
  },
  {
    id: 'p3',
    name: 'Malhotra Estate — Dressing Room',
    clientId: 'u6',
    designerId: 'u2',
    status: 'briefing',
    createdAt: '2026-05-05T08:00:00Z',
    updatedAt: '2026-05-05T08:00:00Z',
    description: 'Heritage-inspired dressing room with walk-in wardrobe. Emphasis on formalwear and tailoring.',
  },
  {
    id: 'p4',
    name: 'Kapoor Residence — Guest Wardrobe',
    clientId: 'u4',
    designerId: 'u3',
    status: 'finalized',
    createdAt: '2026-01-15T09:00:00Z',
    updatedAt: '2026-03-01T16:00:00Z',
    description: 'Guest bedroom wardrobe — capsule collection.',
  },
];

export const mockClientProfiles: ClientProfile[] = [
  {
    userId: 'u4',
    gender: 'men',
    occasions: ['Black Tie · 8–10 per year', 'Business Formal · Daily', 'Golf · Weekends', 'Wedding Guest · 4–6 per year'],
    preferredBrands: ['Tom Ford', 'Canali', 'Brioni', 'Ralph Lauren'],
    avoidBrands: [],
    colorPalette: ['Black', 'Midnight Blue', 'Charcoal', 'Camel', 'Ivory'],
    lifestyle: ['International travel · monthly', 'Golf · twice weekly', 'Corporate board meetings'],
    notes: 'Prefers structured silhouettes. No synthetic fibres for formalwear.',
  },
  {
    userId: 'u5',
    gender: 'women',
    occasions: ['Cocktail Events · monthly', 'Business Casual · 3x week', 'Resort / Travel · quarterly'],
    preferredBrands: ['Acne Studios', 'COS', 'Loro Piana'],
    avoidBrands: ['Fast fashion'],
    colorPalette: ['Ivory', 'Camel', 'Black', 'Terracotta', 'Forest Green'],
    lifestyle: ['Remote work', 'Weekend travel', 'Yoga · daily'],
    notes: 'Minimalist aesthetic. Prefers natural fibres — cashmere, silk, linen.',
  },
  {
    userId: 'u6',
    gender: 'men',
    occasions: ['Formal Dinners · weekly', 'Black Tie · 15+ per year', 'Country pursuits · weekends'],
    preferredBrands: ['Brioni', 'Turnbull & Asser', 'John Lobb'],
    avoidBrands: [],
    colorPalette: ['Black', 'Charcoal', 'Navy', 'Tweed Browns', 'Ivory'],
    lifestyle: ['Estate management', 'Polo', 'Mumbai / Delhi bi-weekly'],
    notes: 'Classic bespoke tailoring aesthetic. Heritage and provenance important.',
  },
];

export const mockWardrobeItems: WardrobeItem[] = [
  {
    id: 'wi1', projectId: 'p1', categoryId: 'formalwear', categoryName: 'Formalwear',
    sectionTitle: 'Black Tie', name: 'Tuxedo', variant: 'Single-Breasted',
    material: 'Wool Barathea', color: '#111', accessories: ['Satin Bow Tie', 'White Pocket Square'],
    brand: 'Tom Ford', quantity: 2, zone: 'hanging-full', status: 'approved',
    img: F('tuxedo', 300, 420, 1), addedAt: '2026-05-01T10:00:00Z',
  },
  {
    id: 'wi2', projectId: 'p1', categoryId: 'formalwear', categoryName: 'Formalwear',
    sectionTitle: 'Black Tie', name: 'Dress Shirt', variant: 'Pleated Bib',
    material: 'Egyptian Cotton', color: '#ffffff', accessories: [],
    brand: 'Turnbull & Asser', quantity: 3, zone: 'hanging-half', status: 'approved',
    img: F('dressshirt', 300, 420, 2), addedAt: '2026-05-01T10:15:00Z',
  },
  {
    id: 'wi3', projectId: 'p1', categoryId: 'formalwear', categoryName: 'Formalwear',
    sectionTitle: 'Black Tie', name: 'Bow Tie', variant: 'Self-Tie Silk',
    material: 'Silk Grosgrain', color: '#111', accessories: [],
    brand: 'Drake\'s', quantity: 2, zone: 'accessories', status: 'approved',
    img: F('bowtie', 300, 420, 3), addedAt: '2026-05-01T10:20:00Z',
  },
  {
    id: 'wi4', projectId: 'p1', categoryId: 'suits-tailoring', categoryName: 'Suits & Tailoring',
    sectionTitle: 'Two-Piece Suit', name: 'Double-Breasted', variant: 'Midnight Blue',
    material: 'Wool-Cashmere', color: '#1e1e3a', accessories: [],
    brand: 'Canali', quantity: 1, zone: 'hanging-full', status: 'pending',
    img: F('suit,men,tailored', 300, 420, 4), addedAt: '2026-05-02T09:00:00Z',
  },
  {
    id: 'wi5', projectId: 'p1', categoryId: 'suits-tailoring', categoryName: 'Suits & Tailoring',
    sectionTitle: 'Two-Piece Suit', name: 'Slim Fit — Plain', variant: 'Charcoal',
    material: 'Super 120s Wool', color: '#3a3a3a', accessories: [],
    brand: 'Brioni', quantity: 2, zone: 'hanging-full', status: 'flagged',
    clientNote: 'Prefer a slightly darker charcoal — almost black.',
    img: F('suit,men,tailored', 300, 420, 5), addedAt: '2026-05-02T09:30:00Z',
  },
  {
    id: 'wi6', projectId: 'p1', categoryId: 'knitwear', categoryName: 'Knitwear',
    sectionTitle: 'Crewneck Jumpers', name: 'Cashmere Crew', variant: 'Camel',
    material: '100% Cashmere', color: '#c2b280', accessories: [],
    brand: 'Loro Piana', quantity: 3, zone: 'shelving', status: 'approved',
    img: F('knitwear,sweater,men', 300, 420, 6), addedAt: '2026-05-03T11:00:00Z',
  },
];

export const mockNotifications: Notification[] = [
  {
    id: 'n1', type: 'item-flagged', message: 'Rahul flagged: Slim Fit Plain suit — prefers darker charcoal.',
    projectId: 'p1', read: false, createdAt: '2026-05-08T14:22:00Z',
  },
  {
    id: 'n2', type: 'item-approved', message: 'Rahul approved: Tuxedo (Single-Breasted, Tom Ford)',
    projectId: 'p1', read: false, createdAt: '2026-05-08T14:20:00Z',
  },
  {
    id: 'n3', type: 'item-approved', message: 'Rahul approved: Dress Shirt (Pleated Bib, Turnbull & Asser)',
    projectId: 'p1', read: true, createdAt: '2026-05-08T14:18:00Z',
  },
];

export function getUserById(id: string): User | undefined {
  return mockUsers.find(u => u.id === id);
}

export function getProjectsByDesigner(designerId: string): Project[] {
  return mockProjects.filter(p => p.designerId === designerId);
}

export function getProjectsByClient(clientId: string): Project[] {
  return mockProjects.filter(p => p.clientId === clientId);
}

export function getItemsByProject(projectId: string): WardrobeItem[] {
  return mockWardrobeItems.filter(i => i.projectId === projectId);
}

export function getClientProfile(userId: string): ClientProfile | undefined {
  return mockClientProfiles.find(p => p.userId === userId);
}

export const statusLabels: Record<Project['status'], string> = {
  briefing: 'Briefing',
  configuring: 'Configuring',
  review: 'Awaiting Review',
  revisions: 'In Revisions',
  finalized: 'Finalized',
};

export const statusColors: Record<Project['status'], string> = {
  briefing: '#555',
  configuring: '#c9a96e',
  review: '#2d7a5c',
  revisions: '#c9a96e',
  finalized: '#444',
};
