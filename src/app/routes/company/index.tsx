import { Routes, Route, Navigate } from 'react-router-dom';
import { Suspense, lazy } from 'react';


// Lazy load sahifalar
const CompaniesPage = lazy(() => import('../../../pages/companies'));
const CompanyPage = lazy(
  () => import('../../../pages/companies/CompanyPage')
);


export const CompanyRoutes = () => {
  return (
    <Suspense fallback={<div>Loading Companies...</div>}>
      <Routes>
        <Route index element={<CompaniesPage />} />
        <Route path="company" element={<CompanyPage />} />

        {/* Agar path mos kelmasa, /products ga qaytaradi */}
        <Route path="*" element={<Navigate to="/companies" replace />} />
      </Routes>
    </Suspense>
  );
};
