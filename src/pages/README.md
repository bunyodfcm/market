# PAGES Directory

**URL routing** va **sahifalar** uchun mo'ljallangan papka. Har bir URL route uchun alohida papka yaratiladi.

## Vazifasi:

- 🌐 URL routing bilan bog'lash
- 📄 Sahifa layout yaratish
- 🔗 Features'larni birlashtirish
- 📊 Data loading (loader functions)
- 🎨 Page-specific UI

## Mavjud sahifalar:

### **dashboard/**

- Asosiy bosh sahifa
- Statistika va umumiy ma'lumotlar
- `loader.ts` - Ma'lumot yuklash

### **login/**

- Kirish sahifasi
- Auth form va social login
- Guest users uchun

### **users/**

- Foydalanuvchilar ro'yxati
- User CRUD operations
- `loader.ts` - Users ma'lumotini yuklash

### **settings/**

- Sozlamalar sahifasi
- User preferences
- System configuration

## Page tuzilishi:

```
pages/example/
├── index.tsx    # Sahifa komponenti
├── loader.ts    # Ma'lumot yuklash (opsional)
└── README.md    # Sahifa haqida ma'lumot
```

## Misol:

```tsx
// pages/users/index.tsx
import { UserTable } from 'features/user-crud';
import { useUsersLoader } from './loader';

export const UsersPage = () => {
  const users = useUsersLoader();
  return <UserTable users={users} />;
};
```

## Qoidalar:

- Har bir route uchun alohida papka
- Faqat layout va data loading
- Business logic features'da bo'lishi kerak
- SEO va meta ma'lumotlar
