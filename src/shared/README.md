# SHARED Directory

**Umumiy kod** va **qayta ishlatiluvchi komponentlar** uchun mo'ljallangan papka. Butun loyiha bo'ylab ishlatiluvchi kod bu yerda saqlanadi.

## Vazifasi:

- 🔧 Utility functions
- 🎨 UI komponentlar (Button, Input)
- ⚙️ Konfiguratsiya
- 🌐 API client
- 🎭 Theme va dizayn tizimi
- 🌍 Internationalization (i18n)

## Papkalar tuzilishi:

### **api/**

- HTTP client (axios/fetch)
- API konfiguratsiyasi
- Request/response interceptors
- Query utilities

### **ui/**

- Asosiy UI komponentlar
- Button, Input, Modal
- Form komponentlari
- Layout komponentlari

### **lib/**

- Utility functions
- Helper functions
- Formatters va parsers
- Common algorithms

### **hooks/**

- Custom React hooks
- useDebounce, useToggle
- Umumiy state logic
- Lifecycle hooks

### **config/**

- Environment variables
- App konfiguratsiyasi
- Constants
- Feature flags

### **theme/**

- Dizayn tizimi
- Colors, fonts, spacing
- Theme provider
- Dark/light mode

### **i18n/**

- Tillar (locales)
- Translation hooks
- i18n konfiguratsiyasi
- Language switching

### **types/**

- Global TypeScript types
- Common interfaces
- Utility types
- API types

### **constants/**

- Global constants
- Routes
- Roles
- Status codes

### **styles/**

- Global CSS
- Tailwind CSS
- Component styles
- Animations

## Misol:

```tsx
// shared/ui/Button/Button.tsx
export const Button = ({ children, variant = 'primary' }) => {
  return <button className={`btn btn-${variant}`}>{children}</button>;
};

// features/auth-login/ui/LoginForm.tsx
import { Button } from 'shared/ui/Button';
```

## Qoidalar:

- Hech qanday papkani import qilmaydi
- Faqat external libraries'dan foydalanadi
- Barcha qatlamlar tomonidan ishlatilishi mumkin
- Business logic bo'lmasligi kerak
- Generic va reusable bo'lishi kerak
