# APP CONFIG Directory

Ilovaning **asosiy konfiguratsiya** fayllari. Global sozlamalar va environment variables bu yerda saqlanadi.

## Vazifasi:

- ⚙️ Global konfiguratsiya
- 🔧 Environment variables
- 🌐 API endpoints
- 📊 Feature flags
- 🚀 App initialization settings

## Fayllar:

- `index.ts` - Asosiy konfiguratsiya eksport
- `env.ts` - Environment variables
- `api.ts` - API endpoints
- `features.ts` - Feature flags

## Misol:

```tsx
// config/index.ts
export const appConfig = {
  apiUrl: process.env.VITE_API_URL,
  appName: 'Market Admin',
  version: '1.0.0',
};
```
