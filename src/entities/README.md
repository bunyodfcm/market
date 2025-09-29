# ENTITIES Directory

**Biznes ob'ektlari** va **ma'lumot modellari** uchun mo'ljallangan papka. Loyihadagi asosiy ob'ektlarning tuzilishi va API'lari saqlanadi.

## Vazifasi:

- 📊 Ma'lumot modellarini aniqlash
- 🔗 Entity-specific API'lar
- 🎨 Entity UI komponentlari
- ✅ Validation qoidalari
- 🏗️ Ma'lumot transformatsiyasi

## Mavjud entities:

### **user/**

- Foydalanuvchi ob'ekti
- User ma'lumotlari va tipi
- User API functions
- Avatar komponenti

### **project/**

- Loyiha ob'ekti (hozircha bo'sh)
- Project ma'lumotlari
- Project-related functions

## Entity tuzilishi:

```
entities/example/
├── api/          # Entity-specific API
│   ├── index.ts  # API functions
│   └── types.ts  # API response types
├── model/        # Business model
│   ├── types.ts  # Entity types
│   ├── schema.ts # Validation schema
│   └── utils.ts  # Helper functions
└── ui/           # Entity UI components
    ├── Card.tsx  # Entity card
    ├── List.tsx  # Entity list
    └── index.ts  # Exports
```

## Entity vs Feature farqi:

| Entity              | Feature                 |
| ------------------- | ----------------------- |
| Ma'lumot modeli     | Biznes funksiyasi       |
| User, Product       | Login, CRUD             |
| Statik tuzilma      | Dinamik jarayon         |
| Qayta ishlatiluvchi | Vazifaga yo'naltirilgan |

## Misol:

```tsx
// entities/user/model/types.ts
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
}

// entities/user/ui/Avatar.tsx
export const UserAvatar = ({ user }: { user: User }) => {
  return <img src={user.avatar} alt={user.name} />;
};

// features/user-crud/ui/UserForm.tsx
import { User } from 'entities/user';
```

## Qoidalar:

- Faqat ma'lumot modellari va ularning API'lari
- Biznes logika bo'lmasligi kerak
- Features tomonidan ishlatiladi
- Shared komponentlardan foydalanishi mumkin
