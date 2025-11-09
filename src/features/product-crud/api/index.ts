// src/features/product-crud/api/productApi.ts
import { apiClient } from '../../../shared/api/client';
import type { Product } from '../../../app/store/types';

export const productApi = {
  // 🔹 Barcha mahsulotlarni olish
  fetchAll: async (params?:any): Promise<Product[]> => {
    const res = await apiClient.get(`/products/${params || ''}`);
    return res.data;
  },

  // 🔹 Yangi mahsulot qo‘shish
  create: async (product: Omit<Product, 'id'>): Promise<Product> => {
    const res = await apiClient.post('/product', product);
    return res.data;
  },

  // 🔹 Mahsulotni o‘chirish
  remove: async (id: string): Promise<void> => {
    await apiClient.delete(`/product/${id}`);
  },
  // 🔹 Bitta mahsulotni olish
    fetchById: async (id: string): Promise<Product> => {
    const res = await apiClient.get(`/product/${id}`);
    return res.data;
  },
  // 🔹 Mahsulotni yangilash
    update: async (id: string, product: Partial<Omit<Product, 'id'>>): Promise<Product> => {
    const res = await apiClient.put(`/product/${id}`, product);
    return res.data;
  },
  // 🔹 Kategoriya bo‘yicha mahsulotlarni olish
    fetchByCategory: async (categoryId: string): Promise<Product[]> => {
    const res = await apiClient.get(`/products/category/${categoryId}`);
    return res.data;
  },
  // 🔹 Kompaniya bo‘yicha mahsulotlarni olish
    fetchByCompany: async (companyId: string): Promise<Product[]> => {
    const res = await apiClient.get(`/products/company/${companyId}`);
    return res.data;
  },
  // 🔹 Qidiruv bo‘yicha mahsulotlarni olish
    search: async (query: string): Promise<Product[]> => {
    const res = await apiClient.get(`/products/search`, { params: { q: query } });
    return res.data;
  },
};
