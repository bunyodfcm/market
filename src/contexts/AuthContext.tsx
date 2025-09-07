import axios from "axios";
import React, { createContext, useState, useEffect } from "react";
import {
  loginUser,
  registerUser,
  verifyOtp,
  type User,
} from "../services/authApi";

interface AuthContextType {
  user: User | null;
  verifyOTP: (numberOTP: string) => Promise<boolean>;
  register: (
    nickname: string,
    phone: string,
    password: string
  ) => Promise<boolean>;
  login: (nickname: string, password: string) => Promise<boolean>;
  logout: () => void;
  resetPassword: (phone: string) => Promise<boolean>;
  isLoading: boolean;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem("user.activeToken");
        if (token) {
          const response = await axios.get(
            "https://e-mall.webpack.uz/api/user/me",
            {
              headers: {
                Authorization: token,
              },
            }
          );

          setUser(response.data.user);
        }
      } catch (error) {
        console.error("Auth check failed:", error);
        localStorage.removeItem("user");
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  //reset password
  const resetPassword = async (phone: string): Promise<boolean> => {
    try {
      setIsLoading(true);
      const response = await axios.post(
        "https://e-mall.webpack.uz/api/user/reset-password",
        {
          phone,
        }
      );
      const { token } = response.data;
      if (token) {
        localStorage.setItem("otpToken", token);
        return true;
      }
      return false;
    } catch (error: any) {
      console.error(
        "Reset password failed:",
        error.response?.data || error.message
      );
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  // verify OTP

  const verifyOTP = async (numberOTP: string): Promise<boolean> => {
    try {
      setIsLoading(true);

      // LocalStorage dan token olish
      const token = localStorage.getItem("otpToken");
      if (!token) {
        console.error("No token found. Please register or login first.");
        return false;
      }

      // OTP ni backendga yuborish (header + body bilan)
      const response = await verifyOtp({ numberOTP });

      const user = response.user;

      if (user) {
        // setUser(user);
        localStorage.setItem("user", JSON.stringify(user)); // yangi token bo‘lsa yangilab qo‘yiladi
        return true;
      }

      return false;
    } catch (error: any) {
      console.error(
        "OTP verification failed:",
        error.response?.data || error.message
      );
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  // ✅ Registratsiya funksiyasi
  const register = async (
    nickname: string,
    phone: string,
    password: string
  ): Promise<boolean> => {
    try {
      setIsLoading(true);

      const response = await registerUser({
        phone: phone,
        nickname: nickname,
        password: password,
      });

      const token = response.token;

      if (token) {
        // setUser(user);
        localStorage.setItem("otpToken", token);
        return true;
      }
      return false;
    } catch (error: any) {
      console.error("Register failed:", error.response?.data || error.message);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (
    nickname: string,
    password: string
  ): Promise<boolean> => {
    try {
      setIsLoading(true);

      const response = await loginUser({
        nickname: nickname,
        password: password,
      });

      const { user } = response;

      if (user) {
        setUser(user);
        localStorage.setItem("user", JSON.stringify(user));
        const activeToken = JSON.parse(localStorage.getItem("user") || "{}");

        localStorage.setItem("otpToken", activeToken.activeToken);

        return true;
      }
      return false;
    } catch (error: any) {
      console.error("Login failed:", error.response?.data || error.message);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("authToken");
  };

  const authValue: AuthContextType = {
    user,
    verifyOTP,
    register,
    login,
    logout,
    resetPassword,
    isLoading,
  };

  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};
