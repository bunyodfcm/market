import React, { createContext, useEffect, type ReactNode } from 'react';
import { type ThemeContextType } from '../';

export const ThemeContext = createContext<ThemeContextType | null>(null);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // Har doim light mode - dark class'ni olib tashlaymiz
  useEffect(() => {
    document.documentElement.classList.remove('dark');
  }, []);

  const value: ThemeContextType = {
    theme: 'light',
    setTheme: () => {}, // No-op, faqat light qoladi
    isDark: false,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
