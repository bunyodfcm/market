import type { ThemeConfig } from './types';

export const themeConfig: ThemeConfig = {
  defaultTheme: 'system',
  supportedThemes: ['light', 'dark', 'system'],
};

export const THEME_STORAGE_KEY = 'app_theme';
