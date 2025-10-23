import { Routes, Route, Navigate } from 'react-router-dom';
import { Suspense, lazy } from 'react';

// Lazy loading
const LoginPage = lazy(() => import('../../pages/login'));
const RegisterPage = lazy(() => import('../../pages/register'));
const DashboardPage = lazy(() => import('../../pages/dashboard'));
const UsersPage = lazy(() => import('../../pages/users'));
const SettingsPage = lazy(() => import('../../pages/settings'));
const ReviewsPage = lazy(() => import('../../pages/reviews'));

// Guards
import { GuestGuard } from './guards';
import { ProductRoutes } from './products';
import { OrderRoutes } from './orders';
import { SellerRoutes } from './sellers';


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
        <Route
          path="/register"
          element={
            <GuestGuard>
              <RegisterPage />
            </GuestGuard>
          }
        />

        {/* Protected routes */}
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/products/*" element={<ProductRoutes />} />
        <Route path="/orders/*" element={<OrderRoutes />} />
        <Route path="/sellers/*" element={<SellerRoutes />} />
        <Route path="/reviews" element={<ReviewsPage />} />

        {/* Default redirect */}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </Suspense>
  );
};
