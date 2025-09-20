export interface User {
  id: number;
  nickname: string;
  phone: string;
  roles: string;
  isActive: boolean;
  actions?: string;
}