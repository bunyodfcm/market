import { Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";

// Lazy load sahifalar
const ProductsPage = lazy(() => import("../../../pages/products"));
const AddProductPage = lazy(() => import("../../../pages/products/AddProduct"));

export const ProductRoutes = () => {
  return (
    <Suspense fallback={<div>Loading Products...</div>}>
      <Routes>
        <Route index element={<ProductsPage />} />
        <Route path="add" element={<AddProductPage />} />

        {/* Agar path mos kelmasa, /products ga qaytaradi */}
        <Route path="*" element={<Navigate to="/products" replace />} />
      </Routes>
    </Suspense>
  );
};
