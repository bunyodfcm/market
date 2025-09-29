# SHARED I18N Directory

**Internationalization** (ko'p tillilik) uchun papka. Ilovani turli tillarga tarjima qilish tizimi.

## Vazifasi:

- 🌍 Ko'p tillilik (i18n)
- 📝 Translation management
- 🔄 Til almashtirish
- 💾 Translation caching
- 🎯 Namespace management

## Papkalar:

### **locales/**

- Til fayllari
- `en/` - Ingliz tili
- `ru/` - Rus tili
- `uz/` - O'zbek tili

### **hooks/**

- useTranslation hook
- Translation utilities
- Language switching logic

### **types/**

- i18n TypeScript types
- Translation interfaces
- Locale configuration

## Fayllar:

- `config.ts` - i18n konfiguratsiyasi
- `index.ts` - Asosiy eksportlar

## Misol:

```tsx
// hooks/useTranslation.ts
export const useTranslation = () => {
  const { locale } = useI18n();

  const t = (key: string) => {
    return translations[locale][key] || key;
  };

  return { t };
};

// locales/uz/index.ts
export const uz = {
  'login.title': 'Tizimga kirish',
  'login.username': 'Foydalanuvchi nomi',
  'login.password': 'Parol',
};
```
