# Market - E-commerce Platform

Modern va professional e-commerce platformasi React, TypeScript va Feature-Sliced Design arxitekturasi bilan qurilgan.

## 🚀 Texnologiyalar

- **React 19.1.1** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool va dev server
- **Tailwind CSS v4** - Styling framework
- **Feature-Sliced Design** - Arxitektura pattern

## 📁 Loyiha Strukturasi

```
market/
├── public/                     # Static fayllar
│   └── vite.svg
├── src/
│   ├── app/                    # 🔧 Dastur konfiguratsiyasi
│   │   ├── App.tsx            # Asosiy App komponenti
│   │   ├── main.tsx           # Entry point
│   │   ├── config/            # Dastur sozlamalari
│   │   ├── providers/         # Context providerlar
│   │   │   └── i18n/          # ✅ Ko'p tillilik provideri
│   │   ├── routes/            # 🚧 Routing konfiguratsiyasi
│   │   └── store/             # 🚧 Global state management
│   │
│   ├── pages/                  # 📄 Sahifalar qatlami
│   │   ├── dashboard/         # 🚧 Bosh sahifa
│   │   ├── users/             # 🚧 Foydalanuvchilar sahifasi
│   │   └── settings/          # 🚧 Sozlamalar sahifasi
│   │
│   ├── widgets/               # 🧩 Katta komponentlar
│   │   ├── Sidebar/           # 🚧 Yon panel
│   │   ├── Topbar/            # 🚧 Yuqori panel
│   │   └── DataTable/         # 🚧 Ma'lumotlar jadvali
│   │
│   ├── features/              # ⚙️ Biznes logika
│   │   ├── auth-login/        # 🚧 Kirish funksiyasi
│   │   └── user-crud/         # 🚧 Foydalanuvchi CRUD
│   │
│   ├── entities/              # 📊 Ma'lumotlar modellari
│   │   ├── user/              # 🚧 Foydalanuvchi entity
│   │   └── project/           # 🚧 Loyiha entity
│   │
│   └── shared/                # 🔗 Umumiy resurslar
│       ├── api/               # 🚧 API client
│       ├── ui/                # 🎨 UI komponentlari
│       │   ├── button/        # 🚧 Tugma komponenti
│       │   ├── input/         # 🚧 Input komponenti
│       │   ├── modal/         # 🚧 Modal komponenti
│       │   └── form/          # 🚧 Forma komponentlari
│       ├── hooks/             # 🪝 Custom hook'lar
│       ├── lib/               # 📚 Utility funksiyalar
│       ├── constants/         # 📋 Konstantalar
│       ├── types/             # 🏷️ TypeScript types
│       ├── i18n/              # ✅ Ko'p tillilik tizimi
│       │   ├── locales/
│       │   │   ├── uz/        # ✅ O'zbek tili
│       │   │   ├── ru/        # ✅ Rus tili
│       │   │   └── en/        # ✅ Ingliz tili
│       │   └── hooks/         # ✅ i18n hook'lari
│       └── styles/            # 🎨 Global stillar
│
├── tailwind.config.ts          # ✅ Tailwind konfiguratsiyasi
├── vite.config.ts             # ✅ Vite konfiguratsiyasi
├── tsconfig.json              # ✅ TypeScript konfiguratsiyasi
└── package.json               # ✅ Dependencies
```

## 🎯 Hozirgi Holat

### ✅ Tugallangan

- [x] Loyiha strukturasi (Feature-Sliced Design)
- [x] TypeScript konfiguratsiyasi
- [x] Tailwind CSS v4 sozlash
- [x] Ko'p tillilik tizimi (O'zbek, Rus, Ingliz)
- [x] I18n Context Provider
- [x] Asosiy App komponenti
- [x] Vite konfiguratsiyasi

### 🚧 Ishlanmoqda

- [ ] UI komponentlari (Button, Input, Modal, Form)
- [ ] API client konfiguratsiyasi
- [ ] Routing tizimi (React Router)
- [ ] Autentifikatsiya tizimi

### 📋 Rejalashtirilgan

#### Phase 1: Asosiy Infrastruktura (1-2 hafta)

- [ ] **Routing tizimi**
  - React Router v6 integratsiya
  - Route guards va protected routes
  - Breadcrumb navigatsiya
- [ ] **API Client**
  - Axios yoki Fetch wrapper
  - Request/Response interceptors
  - Error handling
- [ ] **State Management**
  - Zustand yoki Redux Toolkit
  - Async state management
- [ ] **UI Kit**
  - Button, Input, Select komponentlari
  - Modal, Toast, Loading komponentlari
  - Form validation (React Hook Form + Zod)

#### Phase 2: Autentifikatsiya (1 hafta)

- [ ] **Auth System**
  - Login/Register formalar
  - JWT token management
  - Session persistence
  - Role-based access control
- [ ] **User Management**
  - User profile
  - Password reset
  - Account settings

#### Phase 3: Asosiy Funksiyalar (2-3 hafta)

- [ ] **Dashboard**
  - Analytics widgets
  - Quick actions
  - Recent activities
- [ ] **User CRUD**
  - User list va filtering
  - User creation/editing
  - User roles va permissions
- [ ] **Data Table**
  - Sorting, filtering, pagination
  - Bulk actions
  - Export functionality

#### Phase 4: E-commerce Funksiyalar (3-4 hafta)

- [ ] **Product Management**
  - Product entities
  - Category management
  - Inventory tracking
- [ ] **Order Management**
  - Order processing
  - Payment integration
  - Order history
- [ ] **Company/Vendor Management**
  - Multi-vendor support
  - Company profiles
  - Vendor analytics

#### Phase 5: Advanced Features (2-3 hafta)

- [ ] **Search va Filtering**
  - Global search
  - Advanced filters
  - Search suggestions
- [ ] **Notifications**
  - Real-time notifications
  - Email notifications
  - Push notifications
- [ ] **Reports va Analytics**
  - Sales reports
  - User analytics
  - Export capabilities

#### Phase 6: Optimization va Testing (1-2 hafta)

- [ ] **Performance**
  - Code splitting
  - Lazy loading
  - Bundle optimization
- [ ] **Testing**
  - Unit tests (Jest + Testing Library)
  - Integration tests
  - E2E tests (Playwright)
- [ ] **Documentation**
  - Component documentation
  - API documentation
  - Deployment guide

## 🛠️ Ishga Tushirish

```bash
# Dependencies o'rnatish
npm install

# Development server ishga tushirish
npm run dev

# Production build
npm run build

# Linting
npm run lint
```

## 🌐 Ko'p Tillilik

Dastur 3 tilni qo'llab-quvvatlaydi:

- **O'zbek tili** (asosiy)
- **Rus tili**
- **Ingliz tili**

Til almashtirish uchun `useTranslation` hook'idan foydalaning:

```tsx
import { useTranslation } from '@/shared/i18n/hooks';

const MyComponent = () => {
  const { t, locale, setLocale } = useTranslation();

  return (
    <div>
      <h1>{t.nav.dashboard}</h1>
      <button onClick={() => setLocale('en')}>{t.common.save}</button>
    </div>
  );
};
```

## 🎨 Styling

Tailwind CSS v4 ishlatiladi. Custom ranglar va komponentlar uchun `tailwind.config.ts` faylini tahrirlang.

## 📝 Hissa Qo'shish

1. Repository'ni fork qiling
2. Feature branch yarating (`git checkout -b feature/amazing-feature`)
3. O'zgarishlarni commit qiling (`git commit -m 'Add amazing feature'`)
4. Branch'ni push qiling (`git push origin feature/amazing-feature`)
5. Pull Request yarating

## 📄 Litsenziya

Bu loyiha MIT litsenziyasi ostida tarqatiladi.

---

**Loyiha Holati:** 🚧 Aktiv ishlanmoqda  
**Versiya:** 0.0.0  
**Oxirgi yangilanish:** 2025-09-26
