import {
  HomeModernIcon,
  ChartBarIcon,
  CogIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";

// export const menuItems = [
//     { name: "Dashboard", icon: HomeIcon, path: "/admin" },
//     { name: "Kompaniya", icon: HomeModernIcon, path: "/admin/companies" },
//     { name: "Ishchi-Xizmatchilar", icon: UsersIcon, path: "/admin/users" },
//     { name: "Maxsulotlar", icon: ShoppingBagIcon, path: "/admin/products" },
//
//
//
//   ];

import { Home, Users, ShoppingBag } from "lucide-react";

export const menuItems = [
  {
    name: "Dashboard",
    path: "/admin",
    icon: Home,
  },
  { name: "Kompaniya", icon: HomeModernIcon, path: "/admin/companies" },
  { name: "Omborlar", icon: DocumentTextIcon, path: "/admin/warehouses" },
  {
    name: "Xodimlar",
    icon: Users,
    children: [
      { name: "Kassirlar", path: "/employees/cashiers" },
      { name: "Sotuvchilar", path: "/employees/sellers" },
      { name: "Ishchilar", path: "/employees/workers" },
    ],
  },
  {
    name: "Mahsulotlar",
    path: "/admin/products",
    icon: ShoppingBag,
  },
  { name: "Hisobotlar", icon: ChartBarIcon, path: "/admin/analytics" },
  { name: "Sozlamalar", icon: CogIcon, path: "/admin/settings" },
];
