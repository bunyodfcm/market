export interface Company {
  id?: number;
  name: string;
  slug?: string; // URL uchun qisqa nom
  phone?: string;
  email?: string;
  website?: string;
  address?: string;
  logo?: string; // logo URL
  createdAt?: string; // ISO date
  isActive: boolean;
  employees?: number;
  revenueUSD?: number;
  categories?: string[]; // e.g. ["E-commerce", "Logistics"]
  description?: string;
}
