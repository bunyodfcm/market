import { Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";

// Lazy load sahifalar
const SellersPage = lazy(() => import("../../../pages/sellers"));
const SellerProfile = lazy(() => import("../../../pages/sellers/SellerProfile"));

export const SellerRoutes = () => {
  return (
    <Suspense fallback={<div>Loading Products...</div>}>
      <Routes>
        <Route index element={<SellersPage />} />
        <Route path="profile" element={<SellerProfile />} />

        {/* Agar path mos kelmasa, /products ga qaytaradi */}
        <Route path="*" element={<Navigate to="/sellers" replace />} />
      </Routes>
    </Suspense>
  );
};
