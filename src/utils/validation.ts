import { checkNickname, checkPhone } from "../services/authApi";

// Nickname tekshiruv
export const validateNickname = (nickname: string): string | null => {
  if (!nickname) return null;
  if (nickname.length < 3) return "Nickname kamida 3 ta belgidan iborat bo‘lishi kerak.";
  return null;
};

// Phone tekshiruv
export const validatePhone = (phone: string): string | null => {
  if (!phone) return null;
  if (!/^\d{9}$/.test(phone)) return "Telefon raqam 9 ta raqamdan iborat bo‘lishi kerak.";
  return null;
};
