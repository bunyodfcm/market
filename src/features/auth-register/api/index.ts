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
  ): Promise<{ message: string }> => {
    const response = await apiClient.post(
      '/user/verify-otp',
      { otp }
    );
    return response.data;
  },

  // Resend verification email
  resendVerification: async (email: string): Promise<{ message: string }> => {
    const response = await apiClient.post('/user/resend-verification', {
      email,
    });
    return response.data;
  },
};
