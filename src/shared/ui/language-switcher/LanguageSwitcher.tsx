import React from 'react';
import { useTranslation } from '../../i18n';
import type { Locale } from '../../i18n';

const languages = [
  { code: 'uz' as Locale, name: "O'zbek", flag: '🇺🇿' },
  { code: 'ru' as Locale, name: 'Русский', flag: '🇷🇺' },
  { code: 'en' as Locale, name: 'English', flag: '🇺🇸' },
];

export const LanguageSwitcher: React.FC = () => {
  const { locale, setLocale } = useTranslation();

  return (
    <div className="relative inline-block">
      <select
        value={locale}
        onChange={e => setLocale(e.target.value as Locale)}
        className="appearance-none bg-white border border-gray-300 rounded-md px-3 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      >
        {languages.map(lang => (
          <option key={lang.code} value={lang.code}>
            {lang.flag} {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
};
