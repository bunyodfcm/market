import { apiClient } from '../../../shared/api/client';
import type { User } from '../../../app/store/types';

export interface EditUserRequest {
  id: number;
  firstName?: string | null;
  lastName?: string | null;
  middleName?: string | null;
  secondPhone?: string | null;
  bio?: string | null;
  adress?: Record<string, any> | null;
  emails?: string[];
  phones?: string[];
  salary?: number | null;
}

export interface EditUserResponse {
  message: string;
  user: User;
}

export const userApi = {
  // Edit user profile
  editUser: async (data: EditUserRequest): Promise<EditUserResponse> => {
    const response = await apiClient.post('/user/edit', data);
    return response.data;
  },
};
