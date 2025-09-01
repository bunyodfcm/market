# Admin Panel - Folder Structure

Bu admin panel React + TypeScript + Tailwind CSS yordamida yaratilgan va eng yaxshi amaliyotlarni o'z ichiga oladi.

## 📁 Asosiy Folder Strukturasi

```
src/
├── components/           # Qayta ishlatiluvchi komponentlar
│   ├── layout/          # Layout komponentlari
│   │   ├── AdminLayout.tsx    # Asosiy admin layout
│   │   ├── Sidebar.tsx        # Yon panel navigatsiyasi
│   │   └── Header.tsx         # Yuqori panel
│   ├── ui/              # UI komponentlari
│   │   ├── Button.tsx         # Qayta ishlatiluvchi tugma
│   │   ├── Card.tsx           # Karta komponenti
│   │   ├── Modal.tsx          # Modal oynasi
│   │   └── Table.tsx          # Jadval komponenti
│   └── auth/            # Autentifikatsiya komponentlari
│       └── ProtectedRoute.tsx # Himoyalangan marshrutlar
├── pages/               # Sahifalar
│   ├── admin/           # Admin sahifalari
│   │   ├── Dashboard.tsx      # Bosh sahifa
│   │   ├── Users.tsx          # Foydalanuvchilar boshqaruvi
│   │   └── Products.tsx       # Mahsulotlar boshqaruvi
│   └── auth/            # Autentifikatsiya sahifalari
│       └── Login.tsx          # Kirish sahifasi
├── hooks/               # Custom hook'lar
│   └── useAuth.ts             # Autentifikatsiya hook'i
├── contexts/            # React Context'lar
│   └── AuthContext.tsx        # Autentifikatsiya konteksti
├── routes/              # Marshrutlar
│   └── AdminRoutes.tsx        # Admin marshrutlari
├── types/               # TypeScript tiplari (keyin qo'shiladi)
├── utils/               # Yordamchi funksiyalar (keyin qo'shiladi)
├── services/            # API xizmatlari (keyin qo'shiladi)
└── assets/              # Rasmlar va boshqa fayllar
```

## 🚀 Xususiyatlar

### ✅ Yaratilgan Komponentlar
- **AdminLayout** - Asosiy admin panel layout
- **Sidebar** - Navigatsiya paneli (yig'ilishi mumkin)
- **Header** - Yuqori panel (qidiruv, bildirishnomalar, profil)
- **Dashboard** - Statistika va ma'lumotlar ko'rsatish
- **Users** - Foydalanuvchilar boshqaruvi (CRUD)
- **Products** - Mahsulotlar boshqaruvi (CRUD)
- **Login** - Autentifikatsiya sahifasi

### 🎨 UI Komponentlari
- **Button** - Turli xil variantlar bilan
- **Card** - Karta layout uchun
- **Modal** - Modal oynalar uchun
- **Table** - Ma'lumotlar jadvali uchun

### 🔐 Xavfsizlik
- **ProtectedRoute** - Himoyalangan sahifalar
- **AuthContext** - Autentifikatsiya holati
- **useAuth** - Autentifikatsiya hook'i

## 📱 Responsive Design
- Mobile-first yondashuv
- Tailwind CSS yordamida
- Collapsible sidebar
- Responsive jadvallar

## 🎯 Keyingi Qadamlar

### 1. Qo'shimcha Sahifalar
```
src/pages/admin/
├── Orders.tsx           # Buyurtmalar boshqaruvi
├── Analytics.tsx        # Tahliliy ma'lumotlar
├── Settings.tsx         # Sozlamalar
└── Reports.tsx          # Hisobotlar
```

### 2. API Integratsiyasi
```
src/services/
├── api.ts               # Asosiy API konfiguratsiyasi
├── authService.ts       # Autentifikatsiya API
├── userService.ts       # Foydalanuvchilar API
└── productService.ts    # Mahsulotlar API
```

### 3. State Management
```
src/store/               # Redux/Zustand store
├── slices/
│   ├── authSlice.ts
│   ├── userSlice.ts
│   └── productSlice.ts
```

### 4. Form Management
```
src/components/forms/
├── UserForm.tsx         # Foydalanuvchi qo'shish/tahrirlash
├── ProductForm.tsx      # Mahsulot qo'shish/tahrirlash
└── SearchForm.tsx       # Qidiruv formasi
```

## 🛠️ O'rnatish va Ishga tushirish

```bash
# Dependencies o'rnatish
npm install

# Development server ishga tushirish
npm run dev

# Build qilish
npm run build
```

## 🔑 Demo Login
- **Email:** admin@example.com
- **Password:** password

## 📚 Foydalanilgan Texnologiyalar
- **React 19** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React Router** - Navigation
- **Heroicons** - Icons
- **Vite** - Build tool

## 🎨 Tailwind CSS Klasslari
- **Layout:** flex, grid, container
- **Spacing:** p-6, m-4, space-y-6
- **Colors:** bg-white, text-gray-900, border-gray-200
- **Shadows:** shadow, shadow-lg
- **Responsive:** md:grid-cols-2, lg:grid-cols-3

Bu struktur professional admin panel yaratish uchun barcha kerakli elementlarni o'z ichiga oladi va kelajakda kengaytirish uchun tayyor! 