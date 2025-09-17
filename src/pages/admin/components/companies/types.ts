// types.ts

export interface Address {
  street?: string;
  city?: string;
  region?: string;
  country?: string;
  zipCode?: string;
}

export interface Company {
  id?: number; // agar backend ID qaytarsa
  name: string;
  desc: string;
  address: Address;
  mainPhone: string;
  phones: string[];
  bannerUrl: string;
  logoUrl: string;
  emails: string[];
  websiteUrl: string;
  type: string;
  isActive: boolean;
  isBranch: boolean;
  companyId: number;
  categoryIds: number[];
}
