# SHARED THEME Directory

**Dizayn tizimi** va **theme management** uchun papka. Ilovaning vizual ko'rinishini boshqaradi.

## Vazifasi:

- 🎨 Dizayn tizimi
- 🌙 Dark/Light mode
- 🎭 Theme switching
- 📏 Design tokens
- 🖼️ Color palette

## Papkalar:

### **hooks/**

- useTheme hook
- Theme switching logic
- Theme persistence

### **providers/**

- ThemeProvider komponenti
- Theme context
- Theme state management

### **types/**

- Theme TypeScript types
- Theme configuration interfaces

## Fayllar:

- `colors.ts` - Rang palitasi
- `fonts.ts` - Font konfiguratsiyasi
- `config.ts` - Theme konfiguratsiyasi
- `index.ts` - Asosiy eksportlar

## Misol:

```tsx
// hooks/useTheme.ts
export const useTheme = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return { theme, toggleTheme };
};

// colors.ts
export const colors = {
  primary: '#3167EB',
  secondary: '#64748b',
  success: '#00B517',
  // ...
};
```
