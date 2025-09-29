# ROUTE GUARDS Directory

**Route himoya** komponentlari. Sahifalarga kirish huquqlarini nazorat qiladi.

## Vazifasi:

- 🔐 Authentication check
- 👮 Authorization check
- 🚪 Access control
- 🔄 Redirect logic
- 📊 Role-based routing

## Fayllar:

- `index.ts` - Barcha guard'larni eksport

## Guard turlari:

- `AuthGuard` - Foydalanuvchi login bo'lganini tekshiradi
- `RoleGuard` - Foydalanuvchi rolini tekshiradi
- `GuestGuard` - Faqat login bo'lmagan userlar uchun

## Misol:

```tsx
// guards/AuthGuard.tsx
export const AuthGuard = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
};
```
