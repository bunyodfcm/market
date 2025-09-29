# WIDGETS Directory

**Murakkab UI bloklar** va **kompozit komponentlar** uchun mo'ljallangan papka. Bir nechta feature va entity'larni birlashtirib, katta UI bloklar yaratadi.

## Vazifasi:

- 🧩 Murakkab UI komponentlar
- 🔗 Features'larni birlashtirish
- 📱 Layout komponentlari
- 🎛️ Navigatsiya elementlari
- 📊 Ma'lumot ko'rsatish widgetlari

## Mavjud widgets:

### **Sidebar/**

- Yon menyu komponenti
- Navigatsiya linklari
- User profil ko'rsatish
- Menu state management

### **Topbar/**

- Yuqori panel komponenti
- User actions
- Notifications
- Search functionality

### **DataTable/**

- Umumiy jadval komponenti
- Sorting va filtering
- Pagination
- CRUD actions

## Widget tuzilishi:

```
widgets/ExampleWidget/
├── model/        # Widget logic
│   ├── hooks.ts  # Widget hooks
│   ├── store.ts  # Widget state
│   └── index.ts  # Exports
├── ui/           # Widget UI
│   ├── Widget.tsx
│   ├── components/
│   └── index.ts
└── index.tsx     # Main export
```

## Widget vs Feature vs Shared farqi:

| Widget           | Feature                 | Shared              |
| ---------------- | ----------------------- | ------------------- |
| Murakkab UI blok | Biznes funksiyasi       | Oddiy komponent     |
| Sidebar, Header  | Login, CRUD             | Button, Input       |
| Layout elementi  | Vazifaga yo'naltirilgan | Qayta ishlatiluvchi |

## Misol:

```tsx
// widgets/Sidebar/ui/Sidebar.tsx
import { UserProfile } from 'features/user-profile';
import { Navigation } from 'shared/ui';

export const Sidebar = () => {
  return (
    <aside>
      <UserProfile />
      <Navigation />
    </aside>
  );
};

// pages/dashboard/index.tsx
import { Sidebar } from 'widgets/Sidebar';
```

## Kelajakda qo'shilishi mumkin:

- `Header/` - Sahifa header
- `Footer/` - Sahifa footer
- `SearchPanel/` - Qidiruv paneli
- `FilterPanel/` - Filter paneli
- `UserCard/` - User kartochkasi
- `StatsDashboard/` - Statistika dashboard

## Qoidalar:

- Features va entities'dan foydalanishi mumkin
- Pages tomonidan ishlatiladi
- Murakkab UI logikani o'z ichiga oladi
- Qayta ishlatiluvchi bo'lishi kerak
