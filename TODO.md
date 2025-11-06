# TODO List - Market E-commerce Platform

Bu fayl dasturda qilinishi kerak bo'lgan ishlar ro'yxatini o'z ichiga oladi.

---

## 📋 Mundarija

1. [Authentication va Authorization](#authentication-va-authorization)
2. [API Integratsiyasi](#api-integratsiyasi)
3. [Features va CRUD Operations](#features-va-crud-operations)
4. [Pages va UI](#pages-va-ui)
5. [Real-time va Socket.IO](#real-time-va-socketio)
6. [State Management](#state-management)
7. [Error Handling va Validation](#error-handling-va-validation)
8. [UI/UX Improvements](#uiux-improvements)
9. [Performance va Optimization](#performance-va-optimization)
10. [Testing va Quality Assurance](#testing-va-quality-assurance)

---

## 🔐 Authentication va Authorization

### ✅ Bajarilgan

- [x] Login form UI
- [x] Register form UI
- [x] AuthGuard va GuestGuard
- [x] Theme mode (faqat light qoldirildi)

### 🚧 Qilinishi kerak

#### Auth API Integratsiyasi

- [ ] **POST /api/user/login** - Login API integratsiyasi
  - Token localStorage'ga saqlash
  - User ma'lumotlarini global state'ga yozish
  - Redirect logic (dashboard yoki login sahifasiga)
- [ ] **POST /api/user/register** - Register API integratsiyasi

  - OTP yuborish jarayoni
  - Pending token saqlash
  - Error handling

- [ ] **POST /api/user/verify-otp** - OTP tasdiqlash

  - OTP kodini tekshirish
  - Foydalanuvchi yaratish
  - JWT token olish va saqlash

- [ ] **POST /api/user/logout** - Logout funksiyasi
  - Token o'chirish
  - Session tozalash
  - Redirect login sahifasiga

#### Session Management

- [ ] Token refresh mekanizmi
- [ ] Auto-logout (token muddati tugaganda)
- [ ] Remember me funksiyasi
- [ ] Multi-device session handling

#### Role-Based Access Control (RBAC)

- [ ] Foydalanuvchi rollarini tekshirish komponenti
- [ ] Role-based route guard'lar
- [ ] UI elementlarini rollarga qarab ko'rsatish/yashirish
- [ ] SUPER_ADMIN, COMPANY_OWNER, ADMIN va boshqa rollar uchun alohida UI

---

## 🔌 API Integratsiyasi

### ✅ Bajarilgan

- [x] API client konfiguratsiyasi (axios)
- [x] Request/Response interceptors
- [x] Token qo'shish interceptor'da
- [x] 401 error handling

### 🚧 Qilinishi kerak

#### API Client Improvements

- [ ] Loading state management
- [ ] Retry logic (network errors uchun)
- [ ] Request cancellation
- [ ] Response caching (tanlab)
- [ ] Offline mode handling

#### API Endpoints Integration

##### User API

- [ ] **POST /api/user** - Foydalanuvchilar ro'yxatini olish (filter, pagination)
- [ ] **GET /api/user/id** - ID bo'yicha user olish
- [ ] **POST /api/user/edit** - User profilini yangilash
- [ ] **PATCH /api/user/reset-password** - Parolni yangilash
- [ ] **POST /api/user/phone** - Telefon raqami bo'yicha qidirish
- [ ] **POST /api/user/nickname** - Nickname bo'yicha qidirish
- [ ] **POST /api/user/nickname-check** - Nickname bandligini tekshirish
- [ ] **POST /api/user/phone-check** - Telefon raqami bandligini tekshirish

##### Company API

- [ ] **POST /api/company** - Kompaniya yaratish
- [ ] **GET /api/company/:id** - Kompaniya olish
- [ ] **GET /api/companies** - Kompaniyalar ro'yxati
- [ ] **PATCH /api/company/:id** - Kompaniyani yangilash
- [ ] **DELETE /api/company/:id** - Kompaniyani o'chirish
- [ ] **PUT /api/company/:companyId/members** - A'zo qo'shish/yangilash
- [ ] **DELETE /api/company/:companyId/members/:userId** - A'zoni olib tashlash
- [ ] **PUT /api/company/:companyId/members/:userId/roles** - Rollarni o'rnatish
- [ ] **POST /api/company/:companyId/members/:userId/roles** - Rollar qo'shish
- [ ] **DELETE /api/company/:companyId/members/:userId/roles** - Rollarni olib tashlash
- [ ] **GET /api/company/:companyId/members** - Kompaniya a'zolarini olish
- [ ] **POST /api/company/:companyId/categories** - Kategoriyalar qo'shish
- [ ] **DELETE /api/company/:companyId/categories** - Kategoriyalarni olib tashlash
- [ ] **PUT /api/company/:companyId/categories** - Kategoriyalarni almashtirish

##### Category API

- [ ] **POST /api/category** - Kategoriya yaratish
- [ ] **GET /api/category/:id** - Kategoriya olish
- [ ] **GET /api/categories** - Kategoriyalar ro'yxati
- [ ] **PATCH /api/category/:id** - Kategoriyani yangilash
- [ ] **DELETE /api/category/:id** - Kategoriyani o'chirish

##### SubCategory API

- [ ] **POST /api/subcategory** - Subkategoriya yaratish
- [ ] **GET /api/subcategory/:id** - Subkategoriya olish
- [ ] **GET /api/subcategories** - Subkategoriyalar ro'yxati
- [ ] **PATCH /api/subcategory/:id** - Subkategoriyani yangilash
- [ ] **DELETE /api/subcategory/:id** - Subkategoriyani o'chirish

##### Product API

- [ ] **POST /api/product** - Mahsulot yaratish
- [ ] **GET /api/product/:id** - Mahsulot olish
- [ ] **GET /api/products** - Mahsulotlar ro'yxati
- [ ] **PATCH /api/product/:id** - Mahsulotni yangilash
- [ ] **DELETE /api/product/:id** - Mahsulotni o'chirish

##### ProductInCompany API

- [ ] **POST /api/product-in-company** - Kompaniyaga mahsulot qo'shish
- [ ] **GET /api/product-in-company/:id** - Kompaniyadagi mahsulot olish
- [ ] **GET /api/products-in-company** - Kompaniyadagi mahsulotlar ro'yxati
- [ ] **PATCH /api/product-in-company/:id** - Kompaniyadagi mahsulotni yangilash
- [ ] **DELETE /api/product-in-company/:id** - Kompaniyadagi mahsulotni o'chirish

##### Branch API

- [ ] **POST /api/branch** - Filial yaratish
- [ ] **GET /api/branch/:id** - Filial olish
- [ ] **GET /api/branches** - Filiallar ro'yxati
- [ ] **PATCH /api/branch/:id** - Filialni yangilash
- [ ] **DELETE /api/branch/:id** - Filialni o'chirish

##### Storage API

- [ ] **POST /api/storage** - Ombor yaratish
- [ ] **GET /api/storage/:id** - Ombor olish
- [ ] **GET /api/storages** - Ombolar ro'yxati
- [ ] **PATCH /api/storage/:id** - Omborni yangilash
- [ ] **DELETE /api/storage/:id** - Omborni o'chirish

##### CompanyOnStorage API

- [ ] **POST /api/company-on-storage** - Kompaniyani omborga bog'lash
- [ ] **GET /api/company-on-storage** - Bog'lanishlar ro'yxati
- [ ] **DELETE /api/company-on-storage** - Bog'lanishni olib tashlash

##### Inventory API

- [ ] **POST /api/inventory/location** - Inventar lokatsiyasi yaratish
- [ ] **GET /api/inventory/location/:id** - Lokatsiya olish
- [ ] **GET /api/inventory/locations** - Lokatsiyalar ro'yxati
- [ ] **PATCH /api/inventory/location/:id** - Lokatsiyani yangilash
- [ ] **DELETE /api/inventory/location/:id** - Lokatsiyani o'chirish

##### Stock API

- [ ] **POST /api/stock** - Zaxira qo'shish/yangilash
- [ ] **GET /api/stock** - Zaxiralar ro'yxati
- [ ] **DELETE /api/stock** - Zaxirani o'chirish

##### Order API

- [ ] **POST /api/order** - Buyurtma yaratish
- [ ] **GET /api/order/:id** - Buyurtma olish
- [ ] **GET /api/orders** - Buyurtmalar ro'yxati
- [ ] **PATCH /api/order/:id/status** - Buyurtma holatini yangilash
- [ ] **POST /api/order/:id/item** - Buyurtmaga mahsulot qo'shish
- [ ] **DELETE /api/order/:id/item/:productId** - Buyurtmadan mahsulotni olib tashlash
- [ ] **POST /api/order/:id/assign** - Buyurtmaga xodim tayinlash
- [ ] **DELETE /api/order/:id/assign/:userId/:role** - Tayinlashni olib tashlash

##### Transfer API

- [ ] **POST /api/transfer** - Transfer yaratish
- [ ] **GET /api/transfer/:id** - Transfer olish
- [ ] **GET /api/transfers** - Transferlar ro'yxati
- [ ] **PATCH /api/transfer/:id/status** - Transfer holatini yangilash
- [ ] **POST /api/transfer/:id/item** - Transferga mahsulot qo'shish
- [ ] **DELETE /api/transfer/:id/item/:productId** - Transferdan mahsulotni olib tashlash

##### Request API

- [ ] **POST /api/request** - So'rov yaratish
- [ ] **GET /api/request/:id** - So'rov olish
- [ ] **GET /api/requests/incoming/:userId** - Kelgan so'rovlar
- [ ] **GET /api/requests/outgoing/:userId** - Yuborilgan so'rovlar
- [ ] **POST /api/request/:id/confirm** - So'rovni tasdiqlash
- [ ] **POST /api/request/:id/cancel** - So'rovni bekor qilish

##### Notification API

- [ ] **GET /api/notifications/:userId** - Bildirishnomalar ro'yxati
- [ ] **POST /api/notifications/:userId/read-all** - Barcha bildirishnomalarni o'qilgan deb belgilash
- [ ] **POST /api/notification/:id/read** - Bildirishnomani o'qilgan deb belgilash

---

## ⚙️ Features va CRUD Operations

### ✅ Bajarilgan

- [x] Auth features (login, register) UI
- [x] Products, Orders, Sellers, Reviews, Transactions sahifalari UI
- [x] Table komponenti
- [x] Asosiy UI komponentlar

### 🚧 Qilinishi kerak

#### Auth Features

- [ ] **auth-login** - Login API integratsiyasi
- [ ] **auth-register** - Register API integratsiyasi
- [ ] **auth-forgot-password** - Parolni tiklash funksiyasi
- [ ] **auth-verify-otp** - OTP tasdiqlash funksiyasi

#### User CRUD

- [ ] **user-crud/api** - Barcha User API endpoints
- [ ] **user-crud/model** - useUserCrud hook to'liq implementatsiya
- [ ] **user-crud/ui** - UserForm to'liq funksiyali
- [ ] User list pagination va filtering
- [ ] User search va sort
- [ ] User role management
- [ ] User profile edit

#### Product CRUD

- [ ] **product-crud/api** - Barcha Product API endpoints
- [ ] **product-crud/model** - useProductCrud hook to'liq implementatsiya
- [ ] **product-crud/ui** - ProductForm to'liq funksiyali
- [ ] Product list pagination va filtering
- [ ] Product category filtering
- [ ] Product image upload
- [ ] Product stock management
- [ ] Product price management

#### ProductInCompany CRUD

- [ ] **product-in-company-crud** - Feature yaratish
- [ ] Kompaniyaga mahsulot qo'shish
- [ ] Narx va stock yangilash
- [ ] Barcode scanning
- [ ] Image upload va management

#### Order CRUD

- [ ] **orders-crud/api** - Barcha Order API endpoints
- [ ] **orders-crud/model** - useOrderCrud hook to'liq implementatsiya
- [ ] Buyurtma yaratish funksiyasi
- [ ] Buyurtma holatini o'zgartirish
- [ ] Buyurtmaga mahsulot qo'shish/olib tashlash
- [ ] Buyurtmaga xodim tayinlash
- [ ] Buyurtma tarixi
- [ ] Order status workflow

#### Company CRUD

- [ ] **company-crud** - Feature yaratish
- [ ] Kompaniya yaratish/tahrirlash
- [ ] Kompaniya a'zolarini boshqarish
- [ ] Kompaniya kategoriyalarini boshqarish
- [ ] Kompaniya filiallarini ko'rish

#### Category CRUD

- [ ] **category-crud** - Feature yaratish
- [ ] Kategoriya yaratish/tahrirlash/o'chirish
- [ ] Subkategoriya boshqaruvi
- [ ] Kategoriya hierarxiyasi

#### Sellers CRUD

- [ ] **sellers-crud/api** - Seller API endpoints
- [ ] **sellers-crud/model** - useSellerCrud hook
- [ ] Seller list va filtering
- [ ] Seller profilini ko'rish/tahrirlash

#### Reviews CRUD

- [ ] **reviews-crud/api** - Review API endpoints
- [ ] **reviews-crud/model** - useReviewCrud hook
- [ ] Review list va filtering
- [ ] Review yaratish/tahrirlash/o'chirish

#### Transactions CRUD

- [ ] **transactions-crud/api** - Transaction API endpoints
- [ ] **transactions-crud/model** - useTransactionCrud hook
- [ ] Transaction list va filtering
- [ ] Transaction detail view

#### Stock/Inventory Features

- [ ] **stock-crud** - Feature yaratish
- [ ] Stock list va filtering
- [ ] Stock yangilash
- [ ] Low stock alert
- [ ] Stock history

#### Transfer Features

- [ ] **transfer-crud** - Feature yaratish
- [ ] Transfer yaratish
- [ ] Transfer holatini yangilash
- [ ] Transfer tarixi
- [ ] Transfer approval workflow

#### Request Features

- [ ] **request-crud** - Feature yaratish
- [ ] Request yaratish
- [ ] Request tasdiqlash/bekor qilish
- [ ] Incoming/Outgoing requests
- [ ] Request notification

---

## 📄 Pages va UI

### ✅ Bajarilgan

- [x] Login page
- [x] Register page
- [x] Dashboard page (UI faqat)
- [x] Products page (UI faqat)
- [x] Orders page (UI faqat)
- [x] Users page (UI faqat)
- [x] Sellers page (UI faqat)
- [x] Reviews page (UI faqat)
- [x] Transactions page (UI faqat)
- [x] Settings page (UI faqat)
- [x] Not-found page

### 🚧 Qilinishi kerak

#### Dashboard

- [ ] Real data integratsiyasi (API dan)
- [ ] Statistics cards (real data)
- [ ] Charts (real data)
- [ ] Recent orders (real data)
- [ ] Quick actions
- [ ] Widget customization

#### Products Pages

- [ ] Products list API integratsiyasi
- [ ] Product filtering va search
- [ ] Product pagination
- [ ] AddProduct form API integratsiyasi
- [ ] AddProductFull form API integratsiyasi
- [ ] Product image upload
- [ ] Product detail page
- [ ] CategoriesPage API integratsiyasi
- [ ] Category CRUD operations

#### Orders Pages

- [ ] Orders list API integratsiyasi
- [ ] Order filtering va search
- [ ] Order status filtering
- [ ] OrderDetails page API integratsiyasi
- [ ] Order yaratish funksiyasi
- [ ] Order status o'zgartirish
- [ ] Order assignment UI
- [ ] Order items management

#### Users Page

- [ ] Users list API integratsiyasi
- [ ] User filtering va search
- [ ] User pagination
- [ ] User yaratish/tahrirlash form
- [ ] User profile view
- [ ] User role management
- [ ] User activation/deactivation

#### Sellers Pages

- [ ] Sellers list API integratsiyasi
- [ ] Seller filtering va search
- [ ] SellerProfile page API integratsiyasi
- [ ] Seller products list
- [ ] Seller stats va analytics

#### Reviews Page

- [ ] Reviews list API integratsiyasi
- [ ] Review filtering va search
- [ ] Review detail view
- [ ] Review yaratish/tahrirlash/o'chirish

#### Transactions Page

- [ ] Transactions list API integratsiyasi
- [ ] Transaction filtering va search
- [ ] Transaction detail view
- [ ] Transaction export

#### Settings Pages

- [ ] General settings API integratsiyasi
- [ ] Security settings (password change)
- [ ] Notifications settings API integratsiyasi
- [ ] Profile settings API integratsiyasi

#### Qo'shimcha Pages

- [ ] Company management page
- [ ] Branch management page
- [ ] Storage management page
- [ ] Stock management page
- [ ] Transfer management page
- [ ] Request management page
- [ ] Inventory location page

---

## 🔄 Real-time va Socket.IO

### 🚧 Qilinishi kerak

#### Socket.IO Client Setup

- [ ] Socket.IO client konfiguratsiyasi
- [ ] Connection management
- [ ] Authentication token bilan ulanish
- [ ] Reconnection logic
- [ ] Connection state management

#### Real-time Events

- [ ] **join:company** - Kompaniyaga qo'shilish
- [ ] **leave:company** - Kompaniyadan chiqish
- [ ] **join:order** - Buyurtmaga qo'shilish
- [ ] **leave:order** - Buyurtmadan chiqish

#### Real-time Features

- [ ] Order status real-time yangilanishi
- [ ] Notification real-time kelish
- [ ] Stock real-time yangilanishi
- [ ] Transfer status real-time yangilanishi
- [ ] Request real-time yangilanishi
- [ ] Online users list
- [ ] Activity feed

#### Notification System

- [ ] Notification komponenti
- [ ] Notification list page
- [ ] Notification badge (son)
- [ ] Notification sound
- [ ] Notification preferences
- [ ] Unread notifications count

---

## 🗄️ State Management

### ✅ Bajarilgan

- [x] Theme context (light mode)
- [x] i18n context

### 🚧 Qilinishi kerak

#### Global State

- [ ] User state management (zustand/redux)
- [ ] Auth state management
- [ ] Company state management
- [ ] Cart/Order state management
- [ ] Notification state management

#### Local State

- [ ] React Query/TanStack Query integratsiyasi
- [ ] API caching
- [ ] Optimistic updates
- [ ] Infinite scroll pagination

---

## ⚠️ Error Handling va Validation

### ✅ Bajarilgan

- [x] API client error interceptor
- [x] 401 error handling

### 🚧 Qilinishi kerak

#### Error Handling

- [ ] Toast notification system
- [ ] Error boundary komponentlari
- [ ] Error logging (Sentry/LogRocket)
- [ ] User-friendly error messages
- [ ] Network error handling
- [ ] Server error handling

#### Validation

- [ ] Form validation (React Hook Form + Zod)
- [ ] API response validation
- [ ] Input validation (real-time)
- [ ] File upload validation
- [ ] Image validation

---

## 🎨 UI/UX Improvements

### ✅ Bajarilgan

- [x] Tailwind CSS setup
- [x] Asosiy UI komponentlar (Button, Input, Table, Badge, Rating, Progress, Tooltip, Skeleton)
- [x] Light mode (dark olib tashlandi)

### 🚧 Qilinishi kerak

#### UI Komponentlar

- [ ] **Modal** komponenti to'liq implementatsiya
- [ ] **Dropdown** komponenti
- [ ] **Select** komponenti (advanced)
- [ ] **DatePicker** komponenti
- [ ] **FileUpload** komponenti
- [ ] **ImageUpload** komponenti
- [ ] **Tabs** komponenti
- [ ] **Accordion** komponenti
- [ ] **Breadcrumb** komponenti
- [ ] **Pagination** komponenti
- [ ] **SearchInput** komponenti
- [ ] **FilterPanel** komponenti
- [ ] **ConfirmDialog** komponenti
- [ ] **LanguageSwitcher** komponenti

#### Form Komponentlar

- [ ] **FormField** komponenti
- [ ] **Form validation** to'liq implementatsiya
- [ ] **FormArray** komponenti (dynamic fields)
- [ ] **FormDatePicker** komponenti
- [ ] **FormFileUpload** komponenti
- [ ] **FormSelect** komponenti
- [ ] **FormCheckbox** komponenti
- [ ] **FormRadio** komponenti

#### Loading States

- [ ] Loading skeleton'lar
- [ ] Loading spinner'lar
- [ ] Infinite scroll loading
- [ ] Button loading states
- [ ] Page loading states

#### Empty States

- [ ] Empty state komponentlari
- [ ] No data illustrations
- [ ] Empty state messages

#### Responsive Design

- [ ] Mobile navigation
- [ ] Mobile-friendly tables
- [ ] Touch-friendly buttons
- [ ] Responsive layouts
- [ ] Mobile forms optimization

---

## ⚡ Performance va Optimization

### 🚧 Qilinishi kerak

#### Code Splitting

- [ ] Route-based code splitting (lazy loading)
- [ ] Component lazy loading
- [ ] Library code splitting

#### Bundle Optimization

- [ ] Tree shaking
- [ ] Unused code removal
- [ ] Asset optimization
- [ ] Image optimization (WebP, lazy loading)

#### Caching

- [ ] API response caching
- [ ] Image caching
- [ ] Static asset caching
- [ ] Service worker (PWA)

#### Performance Monitoring

- [ ] Performance metrics
- [ ] Bundle size monitoring
- [ ] Load time optimization
- [ ] Memory leak detection

---

## 🧪 Testing va Quality Assurance

### 🚧 Qilinishi kerak

#### Unit Tests

- [ ] Component tests (React Testing Library)
- [ ] Hook tests
- [ ] Utility function tests
- [ ] API function tests

#### Integration Tests

- [ ] Feature integration tests
- [ ] API integration tests
- [ ] Form submission tests

#### E2E Tests

- [ ] Critical user flows (Playwright/Cypress)
- [ ] Login/Register flow
- [ ] Product CRUD flow
- [ ] Order creation flow

#### Code Quality

- [ ] ESLint konfiguratsiyasi
- [ ] Prettier konfiguratsiyasi
- [ ] TypeScript strict mode
- [ ] Code review guidelines

---

## 📝 Qo'shimcha Ishlar

### 🚧 Qilinishi kerak

#### Dokumentatsiya

- [ ] Component dokumentatsiyasi
- [ ] API integration guide
- [ ] Architecture dokumentatsiyasi
- [ ] Deployment guide
- [ ] Contributing guide

#### Developer Experience

- [ ] Environment variables setup
- [ ] Development scripts
- [ ] Hot reload optimization
- [ ] Dev tools integration

#### Accessibility

- [ ] ARIA labels
- [ ] Keyboard navigation
- [ ] Screen reader support
- [ ] Color contrast
- [ ] Focus management

#### Security

- [ ] XSS protection
- [ ] CSRF protection
- [ ] Input sanitization
- [ ] Secure token storage
- [ ] HTTPS enforcement

---

## 📊 Priority (Ustuvorlik)

### 🔴 High Priority (Yuqori ustuvorlik)

1. Authentication API integratsiyasi (Login, Register, OTP)
2. User CRUD API integratsiyasi
3. Product CRUD API integratsiyasi
4. Order CRUD API integratsiyasi
5. Real-time Socket.IO integratsiyasi
6. Error handling va toast notifications
7. Form validation

### 🟡 Medium Priority (O'rtacha ustuvorlik)

8. Company CRUD API integratsiyasi
9. Category/SubCategory CRUD
10. Stock/Inventory management
11. Transfer management
12. Request management
13. Notification system
14. Dashboard real data

### 🟢 Low Priority (Past ustuvorlik)

15. Advanced UI komponentlar
16. Performance optimization
17. Testing
18. Dokumentatsiya
19. Accessibility improvements

---

## 📅 Taxminiy Muddatlar

- **Phase 1 (2-3 hafta)**: Authentication, User CRUD, Basic API integratsiyasi
- **Phase 2 (2-3 hafta)**: Product CRUD, Order CRUD, Category CRUD
- **Phase 3 (2 hafta)**: Real-time Socket.IO, Notifications
- **Phase 4 (2 hafta)**: Company, Stock, Transfer management
- **Phase 5 (1-2 hafta)**: UI improvements, Performance optimization
- **Phase 6 (1 hafta)**: Testing, Dokumentatsiya

**Jami taxminiy vaqt: 10-13 hafta**

---

**Oxirgi yangilanish:** 2024  
**Status:** Development in progress
