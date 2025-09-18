import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "./components/AdminLayout";
import Dashboard from "./components/Dashboard";
import Users from "./components/cutomers/Users";
import Products from "./components/products/Products";
import Companies from "./components/companies/Companies";
import Warehouses from "./components/warehouse/Warehouses";
import Analytics from "./components/analytics/Analystics";
import Profile from "./profile/Profile";

const AdminRoutes: React.FC = () => {
  return (
    <AdminLayout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/users" element={<Users />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/products" element={<Products />} />
        <Route path="/warehouses" element={<Warehouses />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="*" element={<Navigate to="/admin" replace />} />
      </Routes>
    </AdminLayout>
  );
};

export default AdminRoutes;
