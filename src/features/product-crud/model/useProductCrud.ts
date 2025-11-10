// src/features/product-crud/model/useProductCrud.ts
import { useEffect } from 'react';
import { useProductStore } from '../../../app/store/product.state';
import type { Product } from '../../../app/store/types';

export const useProductCrud = () => {
  const { products, isLoading, fetchProducts, addProduct, removeProduct } =
    useProductStore();

  // 🔹 Sahifa yuklanganda mahsulotlarni olish
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // 🔹 Yangi mahsulot qo‘shish
  const handleAdd = async (product: Omit<Product, 'id'>) => {
    await addProduct(product);
  };

  // 🔹 Mahsulotni o‘chirish
  const handleRemove = async (id: string) => {
    await removeProduct(id);
  };

  return {
    products,
    isLoading,
    handleAdd,
    handleRemove,
  };
};
