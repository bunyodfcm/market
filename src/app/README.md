# APP Directory

Ilovaning **asosiy konfiguratsiyasi** va **ishga tushirish nuqtasi**. Bu papka butun ilovani birlashtiradi va sozlaydi.

## Vazifasi:

- 🚀 Ilovani ishga tushirish
- ⚙️ Global konfiguratsiya
- 🔗 Routing sozlash
- 📦 Provider'larni birlashtirish
- 🏪 Store (state management) sozlash

## Papkalar:

### **config/**

- Ilovaning asosiy sozlamalari
- Environment variables
- API endpoints
- Global constants

### **providers/**

- Context Provider'lar
- Theme Provider
- i18n (til) Provider
- Auth Provider

### **routes/**

- URL routing sozlamalari
- Route guards (himoya)
- Lazy loading
- Route konfiguratsiyasi

### **store/**

- Global state management
- Redux/Zustand store
- Middleware'lar
- Store konfiguratsiyasi

## Asosiy fayllar:

- `App.tsx` - Asosiy App komponenti
- `main.tsx` - Ilovani DOM ga ulash nuqtasi

## Misol:

```tsx
// App.tsx
function App() {
  return (
    <Providers>
      <Router>
        <Routes />
      </Router>
    </Providers>
  );
}
```
