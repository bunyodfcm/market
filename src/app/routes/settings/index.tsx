// src/routes/modules/SettingsRoutes.tsx
import { Routes, Route, Navigate } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import SettingsPage from '../../../pages/settings';

const General = lazy(() => import('../../../pages/settings/General'));
const Notifications = lazy(
  () => import('../../../pages/settings/Notifications')
);
const Security = lazy(() => import('../../../pages/settings/Security'));

export const SettingsRoutes = () => {
  return (
    <Suspense fallback={<div className="p-8">Loading Settings...</div>}>
      <Routes>
        {/* /settings parent route - path="" chunki /settings/* dan kelmoqda */}
        <Route path="" element={<SettingsPage />}>
          {/* Default ochiladigan sahifa */}
          <Route index element={<General />} />

          {/* Ichki sahifalar */}
          <Route path="general" element={<General />} />
          <Route path="security" element={<Security />} />
          <Route path="notifications" element={<Notifications />} />

          {/* Noma'lum yo'l bo'lsa general sahifaga qaytaradi */}
          <Route
            path="*"
            element={<Navigate to="/settings/general" replace />}
          />
        </Route>
      </Routes>
    </Suspense>
  );
};
