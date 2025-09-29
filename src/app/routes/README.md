# APP ROUTES Directory

**URL routing** konfiguratsiyasi va **route guards** uchun papka. Ilovaning navigatsiya tizimini boshqaradi.

## Vazifasi:

- 🛣️ Route konfiguratsiyasi
- 🛡️ Route guards (himoya)
- 🔄 Lazy loading
- 📍 Navigation logic
- 🚪 Access control

## Papkalar:

### **guards/**

- Route himoya logikasi
- Auth guards
- Role-based access

### **{guards}/**

- Route guards implementation

## Fayllar:

- `index.tsx` - Asosiy routing konfiguratsiyasi

## Misol:

```tsx
// routes/index.tsx
export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/dashboard"
        element={
          <AuthGuard>
            <DashboardPage />
          </AuthGuard>
        }
      />
    </Routes>
  );
};
```
