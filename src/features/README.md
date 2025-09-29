# FEATURES Directory

**Biznes funksiyalari** uchun mo'ljallangan papka. Har bir feature alohida biznes vazifani bajaradi va qayta ishlatilishi mumkin.

## Vazifasi:

- 🎯 Biznes logikani ajratish
- 🔄 Qayta ishlatiluvchi funksiyalar
- 🧪 Test qilish oson
- 🔗 API bilan aloqa
- 📊 State management

## Mavjud features:

### **auth-login/**

- Tizimga kirish funksiyasi
- Login form va validation
- Session management
- Social login

### **user-crud/**

- Foydalanuvchi CRUD amallar
- Create, Read, Update, Delete
- User management forms
- Admin panel functions

## Feature tuzilishi:

```
features/example-feature/
├── api/          # Server bilan aloqa
│   ├── index.ts  # API functions
│   └── types.ts  # API types
├── model/        # Business logic
│   ├── hooks.ts  # Custom hooks
│   ├── store.ts  # Local state
│   └── types.ts  # Business types
└── ui/           # UI components
    ├── Component.tsx
    └── index.ts  # Export
```

## Kelajakda qo'shilishi mumkin:

- `auth-register/` - Ro'yxatdan o'tish
- `auth-forgot-password/` - Parolni unutish
- `user-profile/` - Profil boshqaruvi
- `file-upload/` - Fayl yuklash
- `notifications/` - Bildirishnomalar

## Misol:

```tsx
// features/user-crud/ui/UserForm.tsx
export const UserForm = ({ onSubmit }) => {
  const { createUser } = useUserCrud();
  // Form logic here
};

// pages/users/index.tsx
import { UserForm } from 'features/user-crud';
```

## Qoidalar:

- Har bir feature mustaqil bo'lishi kerak
- Boshqa feature'larga bog'liq bo'lmasligi kerak
- Entities va shared'dan foydalanishi mumkin
- Pages tomonidan ishlatiladi
