import { Routes, Route, Navigate } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { useAuthStore } from '../../app/store/auth.store';

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

// Root redirect komponenti
const RootRedirect = () => {
  const { isAuthenticated, isLoading } = useAuthStore();

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Yuklanmoqda...</p>
        </div>
      </div>
    );
  }

  return <Navigate to={isAuthenticated ? '/dashboard' : '/login'} replace />;
};

// Not found redirect komponenti
const NotFoundRedirect = () => {
  const { isAuthenticated, isLoading } = useAuthStore();

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Yuklanmoqda...</p>
        </div>
      </div>
    );
  }

  // Login qilinmagan bo'lsa login sahifasiga redirect
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Login qilingan bo'lsa not found sahifasini ko'rsatish
  return (
    <Suspense
      fallback={
        <div className="h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Yuklanmoqda...</p>
          </div>
        </div>
      }
    >
      <NotFoundPage />
    </Suspense>
  );
};

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

        {/* Help page (public) */}
        <Route
          path="/help"
          element={
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  Help & Support
                </h1>
                <p className="text-gray-600">Yordam sahifasi</p>
              </div>
            </div>
          }
        />

        {/* Default redirect - authenticated bo'lsa dashboard, aks holda login */}
        <Route path="/" element={<RootRedirect />} />

        {/* Not found - authenticated bo'lsa ko'rsatish, aks holda login ga redirect */}
        <Route path="*" element={<NotFoundRedirect />} />
      </Routes>
    </Suspense>
  );
};
