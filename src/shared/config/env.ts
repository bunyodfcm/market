// Environment variables konfiguratsiyasi
export const env = {
  // === DEVELOPMENT ===
  NODE_ENV: import.meta.env.NODE_ENV || 'development',
  APP_ENV: import.meta.env.VITE_APP_ENV || 'development',

  // === API CONFIGURATION ===
  API_BASE_URL:
    import.meta.env.VITE_API_BASE_URL || 'https://e-mall.webpack.uz/api',
  API_TIMEOUT: Number(import.meta.env.VITE_API_TIMEOUT) || 10000,

  // === AUTHENTICATION ===
  JWT_SECRET: import.meta.env.VITE_JWT_SECRET || 'default-secret',
  TOKEN_STORAGE_KEY: import.meta.env.VITE_TOKEN_STORAGE_KEY || 'auth_token',
  REFRESH_TOKEN_KEY: import.meta.env.VITE_REFRESH_TOKEN_KEY || 'refresh_token',

  // === APP CONFIGURATION ===
  APP_NAME: import.meta.env.VITE_APP_NAME || 'Market Admin',
  APP_VERSION: import.meta.env.VITE_APP_VERSION || '1.0.0',
  APP_DESCRIPTION:
    import.meta.env.VITE_APP_DESCRIPTION || 'Market Management System',

  // === FEATURES ===
  ENABLE_DARK_MODE: import.meta.env.VITE_ENABLE_DARK_MODE === 'true',
  ENABLE_I18N: import.meta.env.VITE_ENABLE_I18N === 'true',
  ENABLE_ANALYTICS: import.meta.env.VITE_ENABLE_ANALYTICS === 'true',

  // === EXTERNAL SERVICES ===
  GOOGLE_CLIENT_ID: import.meta.env.VITE_GOOGLE_CLIENT_ID || '',
  FACEBOOK_APP_ID: import.meta.env.VITE_FACEBOOK_APP_ID || '',

  // === DEBUGGING ===
  DEBUG_MODE: import.meta.env.VITE_DEBUG_MODE === 'true',
  LOG_LEVEL: import.meta.env.VITE_LOG_LEVEL || 'info',
} as const;

// Type safety uchun
export type EnvConfig = typeof env;

// Development mode tekshirish
export const isDevelopment = env.NODE_ENV === 'development';
export const isProduction = env.NODE_ENV === 'production';

// Feature flags
export const features = {
  darkMode: env.ENABLE_DARK_MODE,
  i18n: env.ENABLE_I18N,
  analytics: env.ENABLE_ANALYTICS,
  debug: env.DEBUG_MODE,
} as const;
