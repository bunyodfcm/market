export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  stock: number;
  status: "in_stock" | "low_stock" | "out_of_stock";
  image: string;
}