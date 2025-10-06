import { Routes, Route, Navigate } from 'react-router-dom';
import { Suspense, lazy } from 'react';

// Lazy loading
const LoginPage = lazy(() => import('../../pages/login'));
const DashboardPage = lazy(() => import('../../pages/dashboard'));
const UsersPage = lazy(() => import('../../pages/users'));
const SettingsPage = lazy(() => import('../../pages/settings'));
const ProductsPage = lazy(() => import('../../pages/products'));

// Guards
import { AuthGuard, GuestGuard } from './guards';

export const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {/* Public routes */}
        <Route 
          path="/login" 
          element={
            <GuestGuard>
              <LoginPage />
            </GuestGuard>
          } 
        />
        
        {/* Protected routes */}
        <Route 
          path="/dashboard" 
          element={
            <AuthGuard>
              <DashboardPage />
           </AuthGuard>
          } 
        />
        <Route 
          path="/users" 
          element={
            <AuthGuard>
              <UsersPage />
            </AuthGuard>
          } 
        />
        <Route 
          path="/settings" 
          element={
            <AuthGuard>
              <SettingsPage />
            </AuthGuard>
          } 
        />
        <Route 
          path="/products" 
          element={
            // <AuthGuard>
              <ProductsPage />
            // </AuthGuard>
          } 
        />
        
        {/* Default redirect */}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </Suspense>
  );
};