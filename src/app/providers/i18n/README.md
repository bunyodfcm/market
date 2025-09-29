# I18N PROVIDER Directory

**Internationalization Provider** - til (language) switching uchun context provider.

## Vazifasi:

- 🌍 Til almashtirish
- 📝 Translation context
- 🔄 Locale management
- 💾 Til preference saqlash

## Fayllar:

- `I18nProvider.tsx` - Asosiy i18n context provider
- `index.ts` - Eksportlar

## Misol:

```tsx
// I18nProvider.tsx
export const I18nProvider = ({ children }) => {
  const [locale, setLocale] = useState('uz');

  return (
    <I18nContext.Provider value={{ locale, setLocale }}>
      {children}
    </I18nContext.Provider>
  );
};
```
