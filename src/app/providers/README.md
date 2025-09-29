# APP PROVIDERS Directory

**Context Provider'lar** va **global state provider'lar** uchun papka. Ilovaning global context'larini boshqaradi.

## Vazifasi:

- 🎭 Theme Provider
- 🌍 i18n Provider
- 🔐 Auth Provider
- 🏪 Store Provider
- 🔗 Router Provider

## Papkalar:

### **i18n/**

- Til (language) provider
- Translation context
- Locale switching

## Misol:

```tsx
// providers/index.tsx
export const AppProviders = ({ children }) => {
  return (
    <ThemeProvider>
      <I18nProvider>
        <AuthProvider>
          <StoreProvider>{children}</StoreProvider>
        </AuthProvider>
      </I18nProvider>
    </ThemeProvider>
  );
};
```
