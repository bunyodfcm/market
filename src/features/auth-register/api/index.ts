import { apiClient } from '../../../shared/api/client';

export interface RegisterRequest {
  phone: string;
  nickname: string;
  password: string;
}

export interface RegisterResponse {
  message: string;
  token: string;
}

export const registerApi = {
  // Register API
  register: async (data: RegisterRequest): Promise<RegisterResponse> => {
    const response = await apiClient.post('/user/register', data);
    return response.data;
  },

  // Verify email API
  verifyEmail: async (token: string): Promise<{ message: string }> => {
    const response = await apiClient.post('/user/verify-email', { token });
    return response.data;
  },
  // Verify OTP API
  verifyOtp: async (
    otp: number
  ): Promise<{ message: string; user: any; token?: string }> => {
    // Pending token'ni Authorization header'ga qo'shish
    const pendingToken = sessionStorage.getItem('pending_token');

    // Temporary axios instance yaratish (pending token bilan)
    const axios = (await import('axios')).default;
    const tempClient = axios.create({
      baseURL:
        import.meta.env.VITE_API_BASE_URL || 'https://e-mall.webpack.uz/api',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
        ...(pendingToken ? { Authorization: `Bearer ${pendingToken}` } : {}),
      },
    });

    const response = await tempClient.post('/user/verify-otp', { otp });
    const data = response.data;

    // Token user.activeToken ichida bo'lishi mumkin
    return {
      ...data,
      token: data.token || data.user?.activeToken || '',
    };
  },

  // Resend verification email
  resendVerification: async (email: string): Promise<{ message: string }> => {
    const response = await apiClient.post('/user/resend-verification', {
      email,
    });
    return response.data;
  },
};
