import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerApi, type RegisterRequest } from '../api';

export const useRegister = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const navigate = useNavigate();

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


      // token qaytgani tekshiriladi
      // mavjud bo'lsa VerifyOTP ga o'tiladi
      if (response.token) {
         setSuccessMessage("Siz muvaffaqiyatli ro'yxatdan o'tdingiz!");
            // 3 soniyadan keyin login sahifasiga yo'naltirish
        setTimeout(() => {
          navigate('/verify-otp');
        }, 3000);
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

  const verifyOtp = async (token:string, otp:number) => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await registerApi.verifyOtp(token, otp);
      return response;
    } catch (err: any) {
      const errorMessage =
        err.response?.data?.message || 'Telefon raqam tasdiqlash xatoligi';
      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }

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
