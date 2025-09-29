# SHARED UI Directory

**Asosiy UI komponentlar** uchun papka. Butun loyihada qayta ishlatiluvchi UI elementlar.

## Vazifasi:

- 🎨 Asosiy UI komponentlar
- 🔄 Qayta ishlatiluvchi elementlar
- 📱 Responsive design
- 🎭 Theme support
- ✅ Accessible components

## Mavjud komponentlar:

### **button/**

- Button komponenti
- Turli variant'lar (primary, secondary)
- Size options (sm, md, lg)

### **input/**

- Input komponenti
- Validation support
- Different types

### **form/**

- FormField komponenti
- Form wrapper
- Validation display

### **modal/**

- Modal komponenti
- Overlay va backdrop
- Close functionality

### **language-switcher/**

- Til almashtirish komponenti
- Dropdown menu
- Current language display

## Misol:

```tsx
// button/Button.tsx
export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  disabled = false,
}) => {
  return (
    <button
      className={`btn btn-${variant} btn-${size}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
```
