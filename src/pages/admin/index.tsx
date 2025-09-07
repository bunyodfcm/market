import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "../../components/layout/AdminLayout";
import Dashboard from "./components/Dashboard";
import Users from "./components/Users";
import Products from "./components/Products";

const AdminRoutes: React.FC = () => {
  return (
    <AdminLayout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<Navigate to="/admin" replace />} />
      </Routes>
    </AdminLayout>
  );
};

export default AdminRoutes;
