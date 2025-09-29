# USER ENTITY Directory

**Foydalanuvchi** ob'ekti uchun mo'ljallangan papka. User ma'lumotlari va ular bilan bog'liq funksiyalar.

## Vazifasi:

- 👤 User ma'lumot modeli
- 🔗 User API functions
- 🎨 User UI komponentlari
- ✅ User validation
- 🏗️ User data transformation

## Papkalar:

### **api/**

- User-specific API calls
- CRUD operations
- User endpoints

### **model/**

- User types va interfaces
- User validation schemas
- User utility functions

### **ui/**

- User Avatar komponenti
- User Card komponenti
- User-related UI elements

## Misol:

```tsx
// model/types.ts
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'moderator';
  avatar?: string;
  createdAt: Date;
}

// ui/Avatar.tsx
export const UserAvatar = ({ user, size = 'md' }) => {
  return (
    <img
      src={user.avatar || '/default-avatar.png'}
      alt={user.name}
      className={`avatar-${size}`}
    />
  );
};
```
