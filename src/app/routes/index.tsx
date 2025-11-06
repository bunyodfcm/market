import { Routes, Route, Navigate } from 'react-router-dom';
import { Suspense, lazy } from 'react';

// Lazy loading
const LoginPage = lazy(() => import('../../pages/login'));
const RegisterPage = lazy(() => import('../../pages/register'));
const DashboardPage = lazy(() => import('../../pages/dashboard'));
const UsersPage = lazy(() => import('../../pages/users'));
const ReviewsPage = lazy(() => import('../../pages/reviews'));
const TransactionsPage = lazy(() => import('../../pages/transactions'));
const NotFoundPage = lazy(() => import('../../pages/not-found'));
const VerifyOtpPage = lazy(() => import('../../pages/verify-otp'));

// Guards
import { AuthGuard, GuestGuard } from './guards';
import { ProductRoutes } from './products';
import { OrderRoutes } from './orders';
import { SellerRoutes } from './sellers';
import { SettingsRoutes } from './settings';

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
        <Route
          path="/verify-otp"
          element={
            <GuestGuard>
              <VerifyOtpPage />
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
          path="/settings/*"
          element={
            <AuthGuard>
              <SettingsRoutes />
            </AuthGuard>
          }
        />
        <Route
          path="/products/*"
          element={
            <AuthGuard>
              <ProductRoutes />
            </AuthGuard>
          }
        />
        <Route
          path="/orders/*"
          element={
            <AuthGuard>
              <OrderRoutes />
            </AuthGuard>
          }
        />
        <Route
          path="/sellers/*"
          element={
            <AuthGuard>
              <SellerRoutes />
            </AuthGuard>
          }
        />
        <Route
          path="/reviews"
          element={
            <AuthGuard>
              <ReviewsPage />
            </AuthGuard>
          }
        />
        <Route
          path="/transactions"
          element={
            <AuthGuard>
              <TransactionsPage />
            </AuthGuard>
          }
        />

        {/* Default redirect */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};
