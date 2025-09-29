import { apiClient } from '../../../shared/api/client';

export interface LoginRequest {
  nickname: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user: {
    id: string;
    nickname: string;
    email?: string;
    role?: string;
  };
  refreshToken?: string;
}

export const authApi = {
  // Login API
  login: async (credentials: LoginRequest): Promise<LoginResponse> => {
    const response = await apiClient.post('/user/login', credentials);
    return response.data;
  },

  // Logout API
  logout: async (): Promise<void> => {
    await apiClient.post('/user/logout');
  },

  // Refresh token API
  refreshToken: async (refreshToken: string): Promise<LoginResponse> => {
    const response = await apiClient.post('/user/refresh', {
      refreshToken,
    });
    return response.data;
  },

  // Get user profile
  getProfile: async (): Promise<LoginResponse['user']> => {
    const response = await apiClient.get('/user/profile');
    return response.data;
  },
};
