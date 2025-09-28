import React, { createContext, useState, useEffect, type ReactNode } from 'react';  
import {
  getTranslation,
  type Locale,
  type TranslationKeys,
  i18nConfig,
  LOCALE_STORAGE_KEY,
} from '../../../shared/i18n';

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: TranslationKeys;
}

export const I18nContext = createContext<I18nContextType | null>(null);

interface I18nProviderProps {
  children: ReactNode;
}

export const I18nProvider: React.FC<I18nProviderProps> = ({ children }) => {
  const [locale, setLocaleState] = useState<Locale>(() => {
    const saved = localStorage.getItem(LOCALE_STORAGE_KEY) as Locale;
    return saved && i18nConfig.supportedLocales.includes(saved)
      ? saved
      : i18nConfig.defaultLocale;
  });

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem(LOCALE_STORAGE_KEY, newLocale);
    document.documentElement.lang = newLocale;
  };

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const value: I18nContextType = {
    locale,
    setLocale,
    t: getTranslation(locale),
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};
