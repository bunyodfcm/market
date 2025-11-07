// src/features/product-crud/api/productApi.ts
import { apiClient } from '../../../shared/api/client';
import type { Product } from '../../../app/store/types';

export const productApi = {
  // 🔹 Barcha mahsulotlarni olish
  fetchAll: async (params?:string): Promise<Product[]> => {
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
};
