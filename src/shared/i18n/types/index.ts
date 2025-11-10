// i18n types
export type Locale = 'uz' | 'ru' | 'en';

export interface I18nConfig {
  defaultLocale: Locale;
  supportedLocales: Locale[];
}

export interface TranslationKeys {
  // Common
  common: {
    save: string;
    cancel: string;
    delete: string;
    edit: string;
    add: string;
    search: string;
    loading: string;
    error: string;
    success: string;
  };

  // Navigation
  nav: {
    dashboard: string;
    users: string;
    companies: string;
    products: string;
    settings: string;
  };

  // Auth
  auth: {
    login: string;
    logout: string;
    register: string;
    email: string;
    password: string;
    forgotPassword: string;
    nickname?: string;
    rememberMe?: string;
    orSignInWith?: string;
    dontHaveAccount?: string;
    loginSuccess?: string;
    loginError?: string;
  };
  // Dashboard
  dashboard: {
    welcome: string;
    stats: string;
    recentActivities: string;
  };
  // Users
  users: {
    userList: string;
    userProfile: string;
    createUser: string;
    editUser: string;
    deleteUser: string;
  };
  // Companies
  companies: {
    companyList: string;
    companyProfile: string;
    createCompany: string;
    editCompany: string;
    deleteCompany: string;
  };
  // Products
  products: {
    productList: string;
    productDetails: string;
    createProduct: string;
    editProduct: string;
    deleteProduct: string;
    categories: string;
    price: string;
    stock: string;
    description: string;
    image: string;
    name: string;
    addNewProduct: string;
    viewProduct: string;
    updateProduct: string;
    productCategory: string;
    productPrice: string;
    productStock: string;
    productDescription: string;
    productImage: string;
  };
  // Settings
  settings: {
    profileSettings: string;
    accountSettings: string;
    notificationSettings: string;
  };
}
