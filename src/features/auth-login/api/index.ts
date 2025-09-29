import { apiClient } from '../../../shared/api/client';

export interface LoginRequest {
  nickname: string;
  password: string;
}

export interface User {
  id: number;
  activeToken: string;
  nickname: string;
  phone: string;
  firstName: string | null;
  lastName: string | null;
  middleName: string | null;
  bio: string | null;
  avatarUrl: string | null;
  adress: string | null;
  secondPhone: string | null;
  salary: number | null;
  isActive: boolean;
  isLoggedIn: boolean;
  companyLimit: number;
  deviceName: string;
  ipAddress: string;
  createdAt: string;
  updatedAt: string;
  emails: string[];
  phones: string[];
  roles: string[];
  orderAssignments: any[];
  userInCompanies: UserInCompany[];
}

export interface UserInCompany {
  userId: number;
  companyId: number;
  roles: string[];
}

export interface LoginResponse {
  message: string;
  user: User;
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
  getProfile: async (): Promise<User> => {
    const response = await apiClient.get('/user/profile');
    return response.data;
  },
};
