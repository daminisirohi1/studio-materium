import { createBrowserRouter, Navigate } from 'react-router';
import { LandingPage } from './pages/LandingPage';
import { CategoriesPage } from './pages/CategoriesPage';
import { TypePage } from './pages/TypePage';
import { LoginPage } from './pages/auth/LoginPage';
import { AdminDashboard } from './pages/admin/AdminDashboard';
import { AdminProjectView } from './pages/admin/AdminProjectView';
import { AdminClientsPage } from './pages/admin/AdminClientsPage';
import { AdminDesignersPage } from './pages/admin/AdminDesignersPage';
import { AdminCataloguePage } from './pages/admin/AdminCataloguePage';
import { DesignerDashboard } from './pages/designer/DesignerDashboard';
import { ProjectView } from './pages/designer/ProjectView';
import { ClientDashboard } from './pages/client/ClientDashboard';
import { ReviewPage } from './pages/client/ReviewPage';

export const router = createBrowserRouter([
  { path: '/',                              element: <Navigate to="/login" replace /> },
  { path: '/login',                         element: <LoginPage /> },
  { path: '/wardrobe',                      element: <LandingPage /> },
  { path: '/wardrobe/categories',           element: <CategoriesPage /> },
  { path: '/wardrobe/item/:categoryId',     element: <TypePage /> },
  { path: '/admin',                         element: <AdminDashboard /> },
  { path: '/admin/project/:projectId',      element: <AdminProjectView /> },
  { path: '/admin/clients',                 element: <AdminClientsPage /> },
  { path: '/admin/designers',              element: <AdminDesignersPage /> },
  { path: '/admin/catalogue',              element: <AdminCataloguePage /> },
  { path: '/designer',                      element: <DesignerDashboard /> },
  { path: '/designer/project/:projectId',   element: <ProjectView /> },
  { path: '/client',                        element: <ClientDashboard /> },
  { path: '/client/review/:projectId',      element: <ReviewPage /> },
]);
