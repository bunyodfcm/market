import type { Product } from "./types";

export const products:Product[] = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 99.99,
      category: "Electronics",
      stock: 45,
      status: "in_stock",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 199.99,
      category: "Electronics",
      stock: 12,
      status: "low_stock",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop",
    },
    {
      id: 3,
      name: "Running Shoes",
      price: 79.99,
      category: "Sports",
      stock: 0,
      status: "out_of_stock",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&h=200&fit=crop",
    },
  ]

  export default products;