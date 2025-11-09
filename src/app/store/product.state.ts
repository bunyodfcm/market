// src/store/product.store.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { productApi } from '../../features/product-crud/api';
import type { Product } from './types';

interface ProductState {
  products: Product[];
  isLoading: boolean;
  fetchProducts: (params?: any) => Promise<void>;
  addProduct: (product: Omit<Product, 'id'>) => Promise<void>;
  removeProduct: (id: string) => Promise<void>;
}

export const useProductStore = create<ProductState>()(
  persist(
    (set, get) => ({
      products: [],
      isLoading: false,

      // 🔹 Mahsulotlarni yuklash
      fetchProducts: async (params) => {
        set({ isLoading: true });
        try {
          //   // URL query
          //   const query = new URLSearchParams({
          //     q: String(params?.q || 1),
          //     categoryId: String(params?.categoryId || 1),
          //     subCategoryId: String(params?.subCategoryId || 1),
          //     companyId: String(params?.companyId || 1),
          //   }).toString();
          const data = await productApi.fetchAll(params);
          set({ products: data });
        } catch (err) {
          console.error('Fetch error:', err);
        } finally {
          set({ isLoading: false });
        }
      },

      // 🔹 Mahsulot qo‘shish
      addProduct: async product => {
        try {
          const newProduct = await productApi.create(product);
          set({ products: [...get().products, newProduct] });
        } catch (err) {
          console.error('Add product error:', err);
        }
      },

      // 🔹 Mahsulotni o‘chirish
      removeProduct: async id => {
        try {
          await productApi.remove(id);
          set({ products: get().products.filter(p => p.id !== id) });
        } catch (err) {
          console.error('Delete product error:', err);
        }
      },
    }),
    {
      name: 'product-storage',
      partialize: state => ({ products: state.products }),
    }
  )
);
