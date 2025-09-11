import type { Warehouse } from "./types";

export const warehouses: Warehouse[] = [
  {
    id: 1,
    name: "Central Warehouse",
    location: "Tashkent, Yunusobod",
    capacity: 5000,
    manager: "Aliyev Bekzod",
    phone: "901234567",
    isActive: true,
    createdAt: "2025-09-11",
  },
  {
    id: 2,
    name: "Cafe Storage",
    location: "Tashkent, Chilonzor",
    capacity: 1500,
    manager: "Karimova Dilnoza",
    phone: "998901234568",
    isActive: true,
    createdAt: "2025-09-11",
  },
  {
    id: 3,
    name: "Shop Storage",
    location: "Samarkand, Registan",
    capacity: 2500,
    manager: "Rustamov Sardor",
    phone: "998901234569",
    isActive: false,
    createdAt: "2025-09-11",
  },
];
