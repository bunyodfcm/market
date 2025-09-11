export interface Warehouse {
  id: number;
  name: string;          // Omborxona nomi
  location: string;      // Manzil (shahar, tuman)
  capacity: number;      // Sig‘imi (masalan: 1000 dona mahsulot)
  manager: string;       // Mas’ul shaxs ismi
  phone: string;         // Telefon raqami
  isActive: boolean;     // Faol yoki yo‘qligi
  createdAt: string;     // Yaratilgan sana
}
