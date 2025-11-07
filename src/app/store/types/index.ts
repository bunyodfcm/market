// Store types
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
}

export interface Company {
  id: number;
  name: string;
  type: string;
  // Boshqa company fieldlar
}

export interface Notification {
  id: number;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  read: boolean;
  createdAt: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  description?: string;
  image?: string;
  category?: string;
  stock?: number;
}
