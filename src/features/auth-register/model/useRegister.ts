import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerApi, type RegisterRequest } from '../api';
import { useAuthStore } from '../../../app/store/auth.store';

export const useRegister = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const navigate = useNavigate();
  const { setPendingToken, clearPendingToken, login } = useAuthStore();

  const handleRegister = async (
    data: RegisterRequest & { confirmPassword: string }
  ) => {
    try {
      setIsLoading(true);
      setError(null);

      // Telefon raqamni tekshirish (faqat sonlar)
      const phoneRegex = /^[0-9+\-\s()]+$/;
      if (!phoneRegex.test(data.phone)) {
        throw new Error("Telefon raqam faqat sonlardan iborat bo'lishi kerak");
      }

      // Parol tasdiqlash
      if (data.password !== data.confirmPassword) {
        throw new Error('Parollar mos kelmaydi');
      }

      // API chaqirish (confirmPassword-ni olib tashlash)
      const { confirmPassword, ...apiData } = data;
      const response = await registerApi.register(apiData);

      // Pending token qaytgani tekshiriladi (OTP tasdiqlash uchun)
      // Bu token asosiy token emas, faqat OTP tasdiqlash uchun
      if (response.token) {
        // Pending token sifatida saqlash (asosiy token emas)
        setPendingToken(response.token);
        // Asosiy token localStorage'ga saqlanmaydi
        setSuccessMessage('OTP kodi SMS orqali yuborildi!');
        // Verify OTP sahifasiga yo'naltirish
        navigate('/verify-otp');
      } else {
        // Agar token bo'lmasa, xatolik ko'rsatish
        throw new Error(response.message || 'Registratsiya xatoligi');
      }

      // // Token mavjudligini tekshirish
      // if (response.token) {

      //   // Token saqlanmaydi, faqat success message ko'rsatiladi
      //   setSuccessMessage("Siz muvaffaqiyatli ro'yxatdan o'tdingiz!");

      //   // 3 soniyadan keyin login sahifasiga yo'naltirish
      //   setTimeout(() => {
      //     navigate('/login');
      //   }, 3000);
      // } else {
      //   // Agar token bo'lmasa, xatolik ko'rsatish
      //   throw new Error(response.message || 'Registratsiya xatoligi');
      // }

      return response;
    } catch (err: any) {
      const errorMessage =
        err.response?.data?.message || err.message || 'Registratsiya xatoligi';
      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const verifyEmail = async (token: string) => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await registerApi.verifyEmail(token);
      return response;
    } catch (err: any) {
      const errorMessage =
        err.response?.data?.message || 'Email tasdiqlash xatoligi';
      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const resendVerification = async (email: string) => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await registerApi.resendVerification(email);
      return response;
    } catch (err: any) {
      const errorMessage =
        err.response?.data?.message || 'Email qayta yuborish xatoligi';
      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const verifyOtp = async (otp: number) => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await registerApi.verifyOtp(otp);

      // OTP tasdiqlangandan keyin to'liq token va user olinadi
      // Token user.activeToken ichida bo'lishi mumkin
      const token = response.token || response.user?.activeToken;

      if (token && response.user) {
        // To'liq token va user'ni saqlash
        login(token, response.user);
        // Pending token'ni tozalash
        clearPendingToken();
        setSuccessMessage("Muvaffaqiyatli ro'yxatdan o'tdingiz!");
      } else {
        throw new Error("Token yoki user ma'lumotlari topilmadi");
      }

      return response;
    } catch (err: any) {
      const errorMessage =
        err.response?.data?.message || 'Telefon raqam tasdiqlash xatoligi';

      // Agar "jwt expired" xatolik bo'lsa, pending token'ni tozalash va register sahifasiga yo'naltirish
      if (
        errorMessage.toLowerCase().includes('jwt expired') ||
        errorMessage.toLowerCase().includes('expired')
      ) {
        clearPendingToken();
        setError(
          "Tasdiqlash kodi muddati tugagan. Iltimos, qayta ro'yxatdan o'ting."
        );
        // 3 soniyadan keyin register sahifasiga yo'naltirish
        setTimeout(() => {
          navigate('/register');
        }, 3000);
        throw err;
      }

      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    handleRegister,
    verifyEmail,
    verifyOtp,
    resendVerification,
    isLoading,
    error,
    successMessage,
    clearError: () => setError(null),
    clearSuccessMessage: () => setSuccessMessage(null),
  };
};
