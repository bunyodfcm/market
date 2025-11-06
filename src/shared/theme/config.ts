import type { ThemeConfig } from './types';

export const themeConfig: ThemeConfig = {
  defaultTheme: 'light',
  supportedThemes: ['light', 'dark', 'system'],
};

export const THEME_STORAGE_KEY = 'app_theme';
