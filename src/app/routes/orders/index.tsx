import { Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";

// Lazy load sahifalar
const OrdersPage = lazy(() => import("../../../pages/orders"));
const OrderDetails = lazy(() => import("../../../pages/orders/OrderDetails"));

export const OrderRoutes = () => {
  return (
    <Suspense fallback={<div>Loading Orders...</div>}>
      <Routes>
        <Route index element={<OrdersPage />} />
        <Route path="details" element={<OrderDetails />} />

        {/* Agar path mos kelmasa, /products ga qaytaradi */}
        <Route path="*" element={<Navigate to="/orders" replace />} />
      </Routes>
    </Suspense>
  );
};
