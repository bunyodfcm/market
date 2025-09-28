import { uz } from './locales/uz';
import { ru } from './locales/ru';
import { en } from './locales/en';
import type { Locale, TranslationKeys } from './types';

export const translations = {
  uz,
  ru,
  en,
} as const;

export const getTranslation = (locale: Locale): TranslationKeys => {
  return translations[locale] || translations.uz;
};

export * from './types';
export * from './config';
export * from './hooks';
