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
  };
}
