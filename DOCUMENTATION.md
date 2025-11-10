# E-Mall Backend API - To'liq Dokumentatsiya

## Mundarija (Table of Contents)

1. [Kirish](#kirish)
2. [Loyiha Strukturasi](#loyiha-strukturasi)
3. [Texnologiyalar](#texnologiyalar)
4. [Database Strukturasi](#database-strukturasi)
5. [API Endpointlar](#api-endpointlar)
6. [Authentication](#authentication)
7. [Socket.IO Real-time](#socketio-real-time)
8. [Deployment](#deployment)

---

## Kirish

E-Mall Backend - bu ko'p kompaniyali e-commerce platformasi uchun yaratilgan RESTful API. Loyiha Express.js, TypeScript, Prisma ORM va PostgreSQL ishlatadi.

### Asosiy Xususiyatlar:
- ✅ Multi-tenant arxitektura (bir nechta kompaniya)
- ✅ Real-time xabarlar (Socket.IO)
- ✅ Rol asosida kirish (Role-Based Access Control)
- ✅ Buyurtma boshqaruvi
- ✅ Ombor va inventar boshqaruvi
- ✅ Mahsulot katalogi
- ✅ Transfer (ko'chirish) tizimi
- ✅ So'rov va bildirishnomalar

---

## Loyiha Strukturasi

```
e-mall-backend/
├── src/
│   ├── config/          # Swagger konfiguratsiyasi
│   ├── controllers/      # Request handlerlar
│   ├── middlewares/      # Middleware funksiyalar
│   ├── models/           # Prisma modellar
│   ├── routes/           # API route'lar
│   ├── services/         # Business logic
│   ├── validations/      # Joi validatsiyalar
│   ├── realtime/         # Socket.IO sozlamalari
│   ├── database.ts       # Prisma client
│   └── server.ts         # Server entry point
├── prisma/
│   └── schema.prisma     # Database schema
└── package.json
```

---

## Texnologiyalar

### Backend Framework
- **Express.js** v5.1.0 - Web framework
- **TypeScript** v5.9.2 - Type-safe JavaScript
- **Node.js** - Runtime environment

### Database
- **PostgreSQL** - Relational database
- **Prisma** v6.15.0 - ORM (Object-Relational Mapping)

### Real-time
- **Socket.IO** v4.8.1 - WebSocket library

### Authentication
- **JWT** (jsonwebtoken) - Token-based authentication

### Validation
- **Joi** v17.13.3 - Schema validation

### Documentation
- **Swagger/OpenAPI** - API documentation

### Qo'shimcha
- **CORS** - Cross-Origin Resource Sharing
- **dotenv** - Environment variables
- **express-useragent** - User agent parsing

---

## Database Strukturasi

### Enums (Ro'yxatlar)

#### Role (Foydalanuvchi rollari)
- `SUPER_ADMIN` - Platforma boshqaruvi
- `COMPANY_OWNER` - Kompaniya egasi
- `ADMIN` - Kompaniya administratori
- `MANAGER` - Filial/bo'lim boshqaruvchisi
- `SELLER` - Kassir/sotuvchi
- `COOK` - Oshpaz
- `WAITER` - Ofitsiant
- `DELIVERY` - Kuryer
- `CUSTOMER` - Mijoz
- `ACCOUNTANT` - Buxgalter
- `STOCK_MANAGER` - Ombor mudiri

#### OrderStatus (Buyurtma holatlari)
- `PENDING` - Qabul qilingan, tasdiqlanmagan
- `CONFIRMED` - Tasdiqlangan
- `IN_PROGRESS` - Jarayonda
- `READY` - Tayyor
- `ON_THE_WAY` - Yetkazib berilmoqda
- `COMPLETED` - Tugallangan
- `CANCELLED` - Bekor qilingan
- `RETURNED` - Qaytarilgan

#### CompanyType (Kompaniya turlari)
- `CAFE` - Oziq-ovqat xizmat ko'rsatadigan joy
- `MARKET` - Chakana savdo maskani
- `STORAGE` - Omborxona

#### LocationType (Lokatsiya turlari)
- `COMPANY` - Asosiy kompaniya
- `BRANCH` - Filial
- `STORAGE` - Ombor

#### TransferStatus (Transfer holatlari)
- `DRAFT` - Qoralama
- `SENT` - Jo'natilgan
- `RECEIVED` - Qabul qilingan
- `CANCELLED` - Bekor qilingan

### Asosiy Modellar

#### User (Foydalanuvchi)
```typescript
{
  id: number
  firstName?: string
  lastName?: string
  middleName?: string
  nickname: string (unique)
  phone: string (unique)
  password?: string
  roles: Role[]
  companyLimit: number
  salary?: number
  avatarUrl?: string
  bio?: string
  adress?: Json
  emails: string[]
  phones: string[]
  isActive: boolean
  isLoggedIn: boolean
  createdAt: DateTime
  updatedAt: DateTime
}
```

#### Company (Kompaniya)
```typescript
{
  id: number
  name: string (unique)
  desc?: string
  address?: Json
  mainPhone?: string
  phones: string[]
  bannerUrl?: string
  logoUrl?: string
  emails: string[]
  websiteUrl?: string
  type: CompanyType
  isActive: boolean
  isBranch: boolean
  companyId?: number (parent company)
  createdAt: DateTime
  updatedAt: DateTime
}
```

#### Product (Mahsulot)
```typescript
{
  id: number
  name: string
  minAge: number
  maxAge: number
  tags: string[]
  dimensions?: string
  seasonality: Seasonality
  categoryId?: number
  subCategoryId?: number
  companyId?: number
  createdAt: DateTime
  updatedAt: DateTime
}
```

#### ProductInCompany (Kompaniyadagi mahsulot)
```typescript
{
  id: number
  productId: number
  companyId: number
  barcode?: string (unique)
  description?: string
  price: Decimal
  discountPrice?: Decimal
  stock: number
  lowStock: number
  images: string[]
  status: ProductStatus
  unit: Unit
  currency: Currency
  createdAt: DateTime
  updatedAt: DateTime
}
```

#### Order (Buyurtma)
```typescript
{
  id: number
  status: OrderStatus
  createdAt: DateTime
  updatedAt: DateTime
}
```

#### OrderAssignment (Buyurtma tayinlash)
```typescript
{
  id: number
  orderId: number
  userId: number
  role: Role
  assignedAt: DateTime
}
```

#### InventoryLocation (Inventar lokatsiyasi)
```typescript
{
  id: number
  type: LocationType
  companyId?: number
  branchId?: number
  storageId?: number
  createdAt: DateTime
  updatedAt: DateTime
}
```

#### Stock (Zaxira)
```typescript
{
  id: number
  locationId: number
  productId: number
  quantity: number
}
```

#### Transfer (Transfer)
```typescript
{
  id: number
  fromLocationId: number
  toLocationId: number
  status: TransferStatus
  note?: string
  createdAt: DateTime
  updatedAt: DateTime
}
```

#### Request (So'rov)
```typescript
{
  id: number
  requesterId: number
  targetUserId: number
  companyId: number
  roles: Role[]
  salary?: number
  message?: string
  status: RequestStatus
  createdAt: DateTime
  updatedAt: DateTime
  respondedAt?: DateTime
}
```

#### Notification (Bildirishnoma)
```typescript
{
  id: number
  userId: number
  title: string
  body?: string
  data?: Json
  readAt?: DateTime
  requestId?: number
  createdAt: DateTime
  updatedAt: DateTime
}
```

---

## API Endpointlar

### Base URL
```
http://localhost:3000/api
```

### Authentication

Barcha endpointlar (login va register dan tashqari) `Authorization` header talab qiladi:
```
Authorization: Bearer <JWT_TOKEN>
```

---

## 1. User (Foydalanuvchi) API

### POST /api/user/register
**Tavsif:** OTP orqali ro'yxatdan o'tish

**Nima uchun ishlatiladi:**
- Yangi foydalanuvchi ro'yxatdan o'tish uchun
- Telefon raqamini tasdiqlash (OTP yuborish)
- Parol va nickname o'rnatish
- Xavfsizlik uchun ikki bosqichli autentifikatsiya

**Qachon ishlatiladi:**
- Mijoz ilk marta registratsiya qilganda
- Telegram bot orqali ro'yxatdan o'tishda
- Mobile app'da yangi account yaratishda

**Request Body:**
```json
{
  "nickname": "john_doe",
  "phone": "+998901234567",
  "password": "secure_password"
}
```

**Response:**
```json
{
  "message": "OTP sent",
  "token": "pending_token"
}
```

---

### POST /api/user/verify-otp
**Tavsif:** OTP ni tasdiqlash va foydalanuvchi yaratish

**Nima uchun ishlatiladi:**
- SMS orqali kelgan OTP kodini tasdiqlash
- Telefon raqamining to'g'riligini tekshirish
- Foydalanuvchi akkountini aktivlashtirish
- JWT token olish (keyingi so'rovlar uchun)

**Qachon ishlatiladi:**
- Register qilgandan keyin OTP tasdiqlashda
- Telefon raqamini o'zgartirganda
- Ikki bosqichli autentifikatsiya jarayonida

**Headers:**
- `Authorization: Bearer <pending_token>`

**Request Body:**
```json
{
  "otp": 123456
}
```

**Response:**
```json
{
  "message": "User created",
  "user": { ... },
  "token": "jwt_token"
}
```

---

### POST /api/user/login
**Tavsif:** Login qilish

**Nima uchun ishlatiladi:**
- Mavjud foydalanuvchi sifatida tizimga kirish
- Nickname va parol bilan autentifikatsiya
- JWT token olish (barcha API so'rovlari uchun)
- Foydalanuvchi ma'lumotlarini olish

**Qachon ishlatiladi:**
- Har safar tizimga kirishda
- Token muddati tugaganda yangi token olishda
- Mobile/web app'da sessiya yaratishda

**Request Body:**
```json
{
  "nickname": "john_doe",
  "password": "secure_password"
}
```

**Response:**
```json
{
  "user": { ... },
  "token": "jwt_token"
}
```
 
---

### POST /api/user
**Tavsif:** Foydalanuvchilar ro'yxatini olish (filter bilan)

**Nima uchun ishlatiladi:**
- Barcha foydalanuvchilarni sahifalangan ro'yxatini olish
- Filter va qidiruv orqali ma'lum foydalanuvchilarni topish
- Kompaniya a'zolarini ko'rish
- Muayyan rollarga ega foydalanuvchilarni qidirish
- Admin panelda foydalanuvchilarni boshqarish

**Qachon ishlatiladi:**
- Admin panelda foydalanuvchilar ro'yxatini ko'rsatishda
- Kompaniya a'zolarini ko'rishda
- Qidiruv funksiyasida
- Reporting va analytics uchun ma'lumot olishda

**Request Body:**
```json
{
  "page": 1,
  "limit": 10,
  "search": "john",
  "isActive": true,
  "rolesAny": ["ADMIN", "MANAGER"],
  "companyId": 1,
  "orderBy": "createdAt",
  "sort": "desc"
}
```

---

### GET /api/user/id
**Tavsif:** ID bo'yicha foydalanuvchi olish

**Nima uchun ishlatiladi:**
- Ma'lum bir foydalanuvchining to'liq profilini ko'rish
- Foydalanuvchi ma'lumotlarini yangilashdan oldin olish
- Profil sahifasini ko'rsatish
- Foydalanuvchi haqida batafsil ma'lumot olish

**Qachon ishlatiladi:**
- Profil sahifasini ochishda
- Foydalanuvchi ma'lumotlarini tahrirlashda
- Admin panelda bitta foydalanuvchini ko'rishda

**Request Body:**
```json
{
  "id": 1
}
```

---

### POST /api/user/edit
**Tavsif:** Foydalanuvchi profilini yangilash

**Nima uchun ishlatiladi:**
- Foydalanuvchi profil ma'lumotlarini o'zgartirish
- Ism, familiya, bio, email kabi ma'lumotlarni yangilash
- Profil rasmini o'zgartirish
- Manzil ma'lumotlarini yangilash
- Maosh ma'lumotlarini yangilash (admin uchun)

**Qachon ishlatiladi:**
- Foydalanuvchi profilni yangilaganda
- Admin boshqa foydalanuvchi ma'lumotlarini o'zgartirganda
- Profil sozlamalarini saqlashda

**Request Body:**
```json
{
  "id": 1,
  "firstName": "John",
  "lastName": "Doe",
  "bio": "Bio text",
  "emails": ["john@example.com"],
  "salary": 5000000
}
```

---

### PATCH /api/user/reset-password
**Tavsif:** Parolni yangilash

**Nima uchun ishlatiladi:**
- Foydalanuvchi parolini o'zgartirish
- Xavfsizlik uchun parolni yangilash
- Parolni unutgan foydalanuvchilar uchun admin tomonidan yangilash
- Xavfsizlik talablariga javob berish

**Qachon ishlatiladi:**
- Foydalanuvchi parolni o'zgartirganda
- Parolni unutgan holatda admin tomonidan yangilashda
- Muhim voqealardan keyin parolni yangilashda (masalan, xavfsizlik buzilganda)

**Request Body:**
```json
{
  "id": 1,
  "password": "new_password"
}
```

---

### POST /api/user/phone
**Tavsif:** Telefon raqami bo'yicha qidirish

**Nima uchun ishlatiladi:**
- Ma'lum telefon raqamiga ega foydalanuvchini topish
- Registratsiya jarayonida telefon raqamini tekshirish
- Kompaniyaga a'zo qo'shishda telefon raqami bo'yicha qidirish
- Request API da foydalanuvchini topishda

**Qachon ishlatiladi:**
- Kompaniya a'zosi qo'shishda telefon raqami bilan qidirishda
- Admin panelda telefon raqami bo'yicha qidirishda
- Foydalanuvchini topish va profilini ko'rishda

**Request Body:**
```json
{
  "phone": "+998901234567"
}
```

---

### POST /api/user/nickname
**Tavsif:** Nickname bo'yicha qidirish

**Nima uchun ishlatiladi:**
- Nickname bo'yicha foydalanuvchini topish
- Profil sahifasini ochishda
- Kompaniyaga a'zo qo'shishda nickname orqali qidirish
- Foydalanuvchi identifikatsiyasi

**Qachon ishlatiladi:**
- Request API da foydalanuvchini topishda
- Admin panelda nickname bo'yicha qidirishda
- Foydalanuvchi profilini ko'rishda

**Request Body:**
```json
{
  "nickname": "john_doe"
}
```

---

### POST /api/user/nickname-check
**Tavsif:** Nickname bandligini tekshirish

**Nima uchun ishlatiladi:**
- Registratsiya jarayonida nickname mavjudligini tekshirish
- Duplicate nickname'larni oldini olish
- Foydalanuvchi tomonidan nickname tanlashda tekshirish
- Xatoliklarni oldini olish (409 conflict)

**Qachon ishlatiladi:**
- Yangi foydalanuvchi registratsiya qilganda
- Nickname o'zgartirganda
- Form validation da real-time tekshirishda

**Response:** `true` yoki `false` (mavjud/yo'q)

**Request Body:**
```json
{
  "nickname": "john_doe"
}
```

---

### POST /api/user/phone-check
**Tavsif:** Telefon raqami bandligini tekshirish

**Nima uchun ishlatiladi:**
- Registratsiya jarayonida telefon raqami mavjudligini tekshirish
- Duplicate telefon raqamlarini oldini olish
- Form validation da real-time tekshirish
- Xatoliklarni oldini olish (409 conflict)

**Qachon ishlatiladi:**
- Yangi foydalanuvchi registratsiya qilganda
- Telefon raqamini o'zgartirganda
- Database'da duplicate'larni oldini olishda

**Response:** `true` yoki `false` (mavjud/yo'q)

**Request Body:**
```json
{
  "phone": "+998901234567"
}
```

---

## 2. Company (Kompaniya) API

### POST /api/company
**Tavsif:** Yangi kompaniya yaratish

**Nima uchun ishlatiladi:**
- Platformaga yangi kompaniya qo'shish
- Restoran, supermarket yoki ombor kompaniyasini ro'yxatdan o'tkazish
- Kompaniya asosiy ma'lumotlarini kiritish (nomi, manzili, telefon)
- Kompaniyaga kategoriyalar biriktirish
- Filial yoki asosiy kompaniya sifatida yaratish

**Qachon ishlatiladi:**
- Yangi biznes ochilganda
- SUPER_ADMIN yoki COMPANY_OWNER tomonidan
- Platformaga yangi mijoz qo'shishda
- Multi-tenant tizimda yangi tenant yaratishda

**Request Body:**
```json
{
  "name": "My Company",
  "desc": "Description",
  "address": {
    "city": "Tashkent",
    "street": "Main St"
  },
  "mainPhone": "+998901234567",
  "phones": ["+998901234567"],
  "type": "MARKET",
  "categoryIds": [1, 2]
}
```

---

### GET /api/company/:id
**Tavsif:** ID bo'yicha kompaniya olish

**Parameters:**
- `id` (path) - Kompaniya ID

---

### GET /api/companies
**Tavsif:** Kompaniyalar ro'yxati

**Query Parameters:**
- `page` - Sahifa raqami
- `pageSize` - Sahifa o'lchami
- `q` - Qidiruv so'zi
- `type` - Kompaniya turi (CAFE, MARKET, STORAGE)
- `isActive` - Faol holati
- `isBranch` - Filial ekanligi
- `parentCompanyId` - Asosiy kompaniya ID

---

### PATCH /api/company/:id
**Tavsif:** Kompaniyani yangilash

**Request Body:**
```json
{
  "name": "Updated Name",
  "isActive": true,
  "addCategoryIds": [3],
  "removeCategoryIds": [1]
}
```

---

### DELETE /api/company/:id
**Tavsif:** Kompaniyani soft delete qilish

---

### POST /api/company/:id/restore
**Tavsif:** Soft delete qilingan kompaniyani tiklash

---

### DELETE /api/company/:id/hard
**Tavsif:** Kompaniyani hard delete qilish

---

### PUT /api/company/:companyId/members
**Tavsif:** Kompaniyaga a'zo qo'shish yoki yangilash

**Request Body:**
```json
{
  "userId": 1,
  "roles": ["ADMIN", "MANAGER"]
}
```

---

### DELETE /api/company/:companyId/members/:userId
**Tavsif:** Kompaniyadan a'zoni olib tashlash

---

### PUT /api/company/:companyId/members/:userId/roles
**Tavsif:** A'zo rollarini o'rnatish

**Request Body:**
```json
{
  "roles": ["MANAGER"]
}
```

---

### POST /api/company/:companyId/members/:userId/roles
**Tavsif:** A'zoga rollar qo'shish

---

### DELETE /api/company/:companyId/members/:userId/roles
**Tavsif:** A'zodan rollarni olib tashlash

---

### GET /api/company/:companyId/members
**Tavsif:** Kompaniya a'zolarini olish

---

### POST /api/company/:companyId/categories
**Tavsif:** Kompaniyaga kategoriyalar qo'shish

**Request Body:**
```json
{
  "categoryIds": [1, 2, 3]
}
```

---

### DELETE /api/company/:companyId/categories
**Tavsif:** Kompaniyadan kategoriyalarni olib tashlash

---

### PUT /api/company/:companyId/categories
**Tavsif:** Kompaniya kategoriyalarini almashtirish

---

## 3. Category (Kategoriya) API

### POST /api/category
**Tavsif:** Yangi kategoriya yaratish

**Nima uchun ishlatiladi:**
- Mahsulotlar katalogiga kategoriya qo'shish
- Mahsulotlarni tuzatish va tashkil etish
- Kategoriyalar orqali qidiruv va filtrlash
- Kompaniyalarga kategoriyalarni biriktirish
- Umumiy katalog strukturasini yaratish

**Qachon ishlatiladi:**
- Platformaga yangi kategoriya qo'shishda
- Katalog strukturasini kengaytirishda
- SUPER_ADMIN tomonidan kategoriya yaratishda

**Misol:** Food, Electronics, Clothing, Beverages kabi kategoriyalar.

**Request Body:**
```json
{
  "name": "Food",
  "description": "Food category"
}
```

---

### GET /api/category/:id
**Tavsif:** ID bo'yicha kategoriya olish

---

### GET /api/categories
**Tavsif:** Barcha kategoriyalar ro'yxati

---

### PATCH /api/category/:id
**Tavsif:** Kategoriyani yangilash

---

### DELETE /api/category/:id
**Tavsif:** Kategoriyani o'chirish

---

## 4. SubCategory (Kichik kategoriya) API

### POST /api/subcategory
**Tavsif:** Yangi kichik kategoriya yaratish

**Nima uchun ishlatiladi:**
- Kategoriya ichida yanada batafsil tasniflash
- Mahsulotlarni ikki darajali tuzatish
- Kichik kategoriyalar orqali aniqroq qidiruv
- Hierarchical katalog strukturasini yaratish

**Qachon ishlatiladi:**
- Kategoriya ichida subkategoriyalar kerak bo'lganda
- Mahsulotlarni yanada batafsil tasniflashda
- Katalog strukturasini chuqurlashtirishda

**Misol:** Food kategoriyasi ichida - Desserts, Main Courses, Appetizers.

**Request Body:**
```json
{
  "name": "Desserts",
  "categoryId": 1,
  "description": "Dessert subcategory"
}
```

---

### GET /api/subcategory/:id
**Tavsif:** ID bo'yicha kichik kategoriya olish

---

### GET /api/subcategories
**Tavsif:** Kichik kategoriyalar ro'yxati

**Query Parameters:**
- `categoryId` - Kategoriya ID bo'yicha filtrlash

---

### PATCH /api/subcategory/:id
**Tavsif:** Kichik kategoriyani yangilash

---

### DELETE /api/subcategory/:id
**Tavsif:** Kichik kategoriyani o'chirish

---

## 5. Product (Mahsulot) API

### POST /api/product
**Tavsif:** Yangi mahsulot yaratish

**Nima uchun ishlatiladi:**
- Katalogga yangi mahsulot qo'shish
- Umumiy mahsulot ma'lumotlarini yaratish (name, tags, seasonality)
- Kategoriya va kichik kategoriyaga biriktirish
- Yoshi cheklangan mahsulotlar (masalan, alkogol) uchun minAge/maxAge
- Mahsulot xususiyatlarini belgilash (o'lchamlari, mavsumiyligi)

**Qachon ishlatiladi:**
- Kompaniya yangi mahsulot qo'shganda
- Admin tomonidan katalogga mahsulot yaratishda
- Mahsulot bazasini kengaytirishda

**Eslatma:** Bu faqat mahsulotning umumiy ma'lumotlarini yaratadi. Narx va ombordagi miqdori `ProductInCompany` API orqali qo'shiladi.

**Request Body:**
```json
{
  "name": "Coffee",
  "minAge": 0,
  "maxAge": 100,
  "tags": ["hot", "beverage"],
  "seasonality": "ALL_YEAR",
  "categoryId": 1,
  "subCategoryId": 2
}
```

---

### GET /api/product/:id
**Tavsif:** ID bo'yicha mahsulot olish

---

### GET /api/products
**Tavsif:** Mahsulotlar ro'yxati

**Query Parameters:**
- `q` - Qidiruv
- `categoryId` - Kategoriya ID
- `subCategoryId` - Kichik kategoriya ID
- `companyId` - Kompaniya ID

---

### PATCH /api/product/:id
**Tavsif:** Mahsulotni yangilash

---

### DELETE /api/product/:id
**Tavsif:** Mahsulotni o'chirish

---

## 6. ProductInCompany (Kompaniyadagi mahsulot) API

### POST /api/product-in-company
**Tavsif:** Kompaniyaga mahsulot qo'shish

**Nima uchun ishlatiladi:**
- Umumiy mahsulotni ma'lum kompaniyaga qo'shish
- Kompaniya uchun narx belgilash
- Ombordagi miqdorni kiritish
- Barcode va rasmlarni biriktirish
- Mahsulot holatini belgilash (ACTIVE, INACTIVE, vs.)
- Chegirmali narx o'rnatish
- Mahsulotni kompaniya katalogida ko'rsatish

**Qachon ishlatiladi:**
- Kompaniya yangi mahsulotni sotishga qo'shganda
- Narxni yangilash yoki mahsulot qo'shishda
- Omborga yangi mahsulot kelganda
- Mahsulotni kompaniya katalogiga aktivlashtirishda

**Muhim:** Har bir kompaniya uchun bir xil mahsulot turli narxlarda bo'lishi mumkin.

**Request Body:**
```json
{
  "productId": 1,
  "companyId": 1,
  "price": 15000,
  "stock": 100,
  "barcode": "1234567890",
  "images": ["url1", "url2"]
}
```

---

### GET /api/product-in-company/:id
**Tavsif:** ID bo'yicha kompaniyadagi mahsulot olish

---

### GET /api/products-in-company
**Tavsif:** Kompaniyadagi mahsulotlar ro'yxati

**Query Parameters:**
- `companyId` - Majburiy
- `categoryId` - Kategoriya ID
- `status` - Status (ACTIVE, INACTIVE, etc.)
- `q` - Qidiruv

---

### PATCH /api/product-in-company/:id
**Tavsif:** Kompaniyadagi mahsulotni yangilash

---

### DELETE /api/product-in-company/:id
**Tavsif:** Kompaniyadagi mahsulotni o'chirish

---

## 7. Branch (Filial) API

### POST /api/branch
**Tavsif:** Yangi filial yaratish

**Nima uchun ishlatiladi:**
- Kompaniyaga yangi filial qo'shish
- Filial ma'lumotlarini kiritish (nomi, manzili, telefon)
- Multi-location biznes uchun filiallar boshqaruvi
- Filiallar orasida inventar va buyurtmalarni alohida boshqarish

**Qachon ishlatiladi:**
- Kompaniya yangi filial ochganda
- Geographic expansion (geografik kengayishda)
- Filiallar bazasini kengaytirishda

**Eslatma:** Filial yaratilganda avtomatik BRANCH tipidagi InventoryLocation yaratiladi.

**Request Body:**
```json
{
  "name": "Branch 1",
  "companyId": 1,
  "address": {
    "city": "Tashkent",
    "street": "Branch St"
  },
  "mainPhone": "+998901234567"
}
```

---

### GET /api/branch/:id
**Tavsif:** ID bo'yicha filial olish

---

### GET /api/branches
**Tavsif:** Filiallar ro'yxati

**Query Parameters:**
- `companyId` - Kompaniya ID
- `q` - Qidiruv

---

### PATCH /api/branch/:id
**Tavsif:** Filialni yangilash

---

### DELETE /api/branch/:id
**Tavsif:** Filialni o'chirish

---

## 8. Storage (Ombor) API

### POST /api/storage
**Tavsif:** Yangi ombor yaratish

**Nima uchun ishlatiladi:**
- Platformaga yangi ombor qo'shish
- Umumiy omborxona yaratish (bir nechta kompaniya foydalanishi mumkin)
- Omborga kompaniyalarni bog'lash
- Ombor ma'lumotlarini kiritish
- Omborlar bazasini boshqarish

**Qachon ishlatiladi:**
- Yangi omborxona qurilganda
- Kompaniyalar uchun umumiy ombor yaratishda
- Warehouse management system'ni kengaytirishda

**Eslatma:** Storage yaratilganda avtomatik STORAGE tipidagi InventoryLocation yaratiladi.

**Request Body:**
```json
{
  "name": "Main Storage",
  "desc": "Main warehouse",
  "address": {
    "city": "Tashkent"
  },
  "mainPhone": "+998901234567"
}
```

---

### GET /api/storage/:id
**Tavsif:** ID bo'yicha ombor olish

---

### GET /api/storages
**Tavsif:** Ombolar ro'yxati

**Query Parameters:**
- `q` - Qidiruv

---

### PATCH /api/storage/:id
**Tavsif:** Omborni yangilash

---

### DELETE /api/storage/:id
**Tavsif:** Omborni o'chirish

---

## 9. CompanyOnStorage (Kompaniya va Ombor bog'lanishi) API

### POST /api/company-on-storage
**Tavsif:** Kompaniyani omborga bog'lash

**Nima uchun ishlatiladi:**
- Kompaniyani ma'lum omborga biriktirish
- Bir nechta kompaniya bitta omborni foydalanishi mumkin
- Primary (asosiy) ombor belgilash
- Kompaniya-ombor munosabatlarini yuritish

**Qachon ishlatiladi:**
- Kompaniya yangi ombor bilan hamkorlik qilganda
- Kompaniyaga ombor biriktirishda
- Warehouse management uchun

**Eslatma:** Bir kompaniyaning bir nechta omborlari bo'lishi mumkin, lekin faqat bittasi `isPrimary: true` bo'ladi.

**Request Body:**
```json
{
  "companyId": 1,
  "storageId": 1,
  "isPrimary": true
}
```

---

### GET /api/company-on-storage
**Tavsif:** Bog'lanishlar ro'yxati

**Query Parameters:**
- `companyId` - Kompaniya ID
- `storageId` - Ombor ID

---

### DELETE /api/company-on-storage
**Tavsif:** Bog'lanishni olib tashlash

**Request Body:**
```json
{
  "companyId": 1,
  "storageId": 1
}
```

---

## 10. Inventory (Inventar) API

### POST /api/inventory/location
**Tavsif:** Yangi inventar lokatsiyasi yaratish

**Nima uchun ishlatiladi:**
- Mahsulotlar zaxirasini saqlash uchun lokatsiya yaratish
- Kompaniya, filial yoki ombor uchun inventar lokatsiyasi
- Zaxiralarni boshqarish va kuzatish
- Transferlar uchun manba va manzil lokatsiyalari
- Stock (zaxira) operations uchun asos

**Qachon ishlatiladi:**
- Kompaniya yaratilganda avtomatik COMPANY lokatsiyasi yaratiladi
- Filial yaratilganda BRANCH lokatsiyasi yaratiladi
- Ombor yaratilganda STORAGE lokatsiyasi yaratiladi
- Qo'shimcha inventar lokatsiyalari kerak bo'lganda

**Lokatsiya turlari:** 
- `COMPANY` - Asosiy kompaniya
- `BRANCH` - Filial
- `STORAGE` - Ombor

**Request Body:**
```json
{
  "type": "COMPANY",
  "companyId": 1
}
```

---

### GET /api/inventory/location/:id
**Tavsif:** ID bo'yicha lokatsiya olish

---

### GET /api/inventory/locations
**Tavsif:** Lokatsiyalar ro'yxati

**Query Parameters:**
- `type` - Lokatsiya turi
- `companyId` - Kompaniya ID
- `branchId` - Filial ID
- `storageId` - Ombor ID

---

### PATCH /api/inventory/location/:id
**Tavsif:** Lokatsiyani yangilash

---

### DELETE /api/inventory/location/:id
**Tavsif:** Lokatsiyani o'chirish

---

## 11. Stock (Zaxira) API

### POST /api/stock
**Tavsif:** Zaxira qo'shish yoki yangilash

**Nima uchun ishlatiladi:**
- Muayyan lokatsiyada mahsulot zaxirasini belgilash
- Ombordagi mahsulot miqdorini kiritish
- Zaxirani yangilash (sotilganda, kelganda)
- Filiallar orasida zaxira balansini kuzatish
- Transfer jarayonida zaxirani yangilash

**Qachon ishlatiladi:**
- Omborga yangi mahsulot kelganda
- Sotuv bo'lganda zaxirani kamaytirishda
- Transfer orqali mahsulot ko'chirilganda
- Inventarizatsiya o'tkazilganda
- Auto-stock update (buyurtma yaratilganda)

**Request Body:**
```json
{
  "locationId": 1,
  "productId": 1,
  "quantity": 100
}
```

---

### GET /api/stock
**Tavsif:** Zaxiralar ro'yxati

**Query Parameters:**
- `locationId` - Lokatsiya ID
- `productId` - Mahsulot ID

---

### DELETE /api/stock
**Tavsif:** Zaxirani o'chirish

**Request Body:**
```json
{
  "locationId": 1,
  "productId": 1
}
```

---

## 12. Order (Buyurtma) API

### POST /api/order
**Tavsif:** Yangi buyurtma yaratish

**Nima uchun ishlatiladi:**
- Mijoz tomonidan yangi buyurtma berish
- Buyurtmaga mahsulotlar qo'shish
- Buyurtma holatini belgilash (odatda PENDING)
- Buyurtma narxini saqlash (mahsulot narxi o'zgarsa ham tarixda qoladi)
- Restoran yoki market uchun buyurtma yaratish

**Qachon ishlatiladi:**
- Mijoz mobile/web app'da buyurtma berganda
- Kassir (SELLER) buyurtma yaratganda
- Online buyurtma qilganda
- Telefon orqali buyurtma qabul qilinganda

**Jarayon:**
1. Buyurtma PENDING holatida yaratiladi
2. Keyin CONFIRMED, IN_PROGRESS, READY holatlariga o'tadi
3. COOK, DELIVERY kabi rollarga tayinlanadi

**Request Body:**
```json
{
  "status": "PENDING",
  "items": [
    {
      "productId": 1,
      "quantity": 2,
      "price": 15000,
      "productInCompanyId": 1
    }
  ]
}
```

---

### GET /api/order/:id
**Tavsif:** ID bo'yicha buyurtma olish

---

### GET /api/orders
**Tavsif:** Buyurtmalar ro'yxati

**Query Parameters:**
- `status` - Buyurtma holati

---

### PATCH /api/order/:id/status
**Tavsif:** Buyurtma holatini yangilash

**Request Body:**
```json
{
  "status": "CONFIRMED"
}
```

---

### POST /api/order/:id/item
**Tavsif:** Buyurtmaga mahsulot qo'shish

**Request Body:**
```json
{
  "productId": 1,
  "quantity": 1,
  "price": 15000,
  "productInCompanyId": 1
}
```

---

### DELETE /api/order/:id/item/:productId
**Tavsif:** Buyurtmadan mahsulotni olib tashlash

---

### POST /api/order/:id/assign
**Tavsif:** Buyurtmaga foydalanuvchi tayinlash

**Nima uchun ishlatiladi:**
- Buyurtmani muayyan xodimga tayinlash
- Oshpaz (COOK) ga buyurtma tayinlash
- Kuryer (DELIVERY) ga buyurtma tayinlash
- Sotuvchi (SELLER) ga buyurtma tayinlash
- Buyurtma ishlash jarayonini kuzatish

**Qachon ishlatiladi:**
- Buyurtma tasdiqlangandan keyin xodimga tayinlashda
- Admin yoki MANAGER tomonidan xodimlarni tayinlashda
- Buyurtma holati IN_PROGRESS ga o'tganda
- Avtomatik tayinlashda

**Misol:** Restoranda buyurtma kelganda, oshpaz va ofitsiantga tayinlanadi.

**Request Body:**
```json
{
  "userId": 1,
  "role": "COOK"
}
```

---

### DELETE /api/order/:id/assign/:userId/:role
**Tavsif:** Buyurtmadan tayinlashni olib tashlash

---

## 13. Transfer (Transfer) API

### POST /api/transfer
**Tavsif:** Yangi transfer yaratish

**Nima uchun ishlatiladi:**
- Mahsulotlarni bir lokatsiyadan boshqasiga ko'chirish
- Filiallar orasida mahsulot ko'chirish
- Ombordan do'konga mahsulot yetkazish
- Kompaniyadan kompaniyaga transfer
- Zaxiralarni balanslashtirish
- Transfer tarixini yuritish

**Qachon ishlatiladi:**
- Filialga mahsulot jo'natishda
- Ombordan do'konga mahsulot yetkazishda
- Zaxira kamayganda boshqa lokatsiyadan olishda
- Mahsulotlar balansini tuzatishda

**Jarayon:**
1. DRAFT - Transfer yaratiladi
2. SENT - Jo'natiladi (fromLocation dan chiqariladi)
3. RECEIVED - Qabul qilinadi (toLocation ga qo'shiladi)

**Request Body:**
```json
{
  "fromLocationId": 1,
  "toLocationId": 2,
  "status": "DRAFT",
  "note": "Transfer note",
  "items": [
    {
      "productId": 1,
      "quantity": 10
    }
  ]
}
```

---

### GET /api/transfer/:id
**Tavsif:** ID bo'yicha transfer olish

---

### GET /api/transfers
**Tavsif:** Transferlar ro'yxati

**Query Parameters:**
- `status` - Transfer holati
- `fromLocationId` - Qayerdan
- `toLocationId` - Qayerga

---

### PATCH /api/transfer/:id/status
**Tavsif:** Transfer holatini yangilash

**Request Body:**
```json
{
  "status": "SENT"
}
```

---

### POST /api/transfer/:id/item
**Tavsif:** Transferga mahsulot qo'shish

**Request Body:**
```json
{
  "productId": 1,
  "quantity": 5
}
```

---

### DELETE /api/transfer/:id/item/:productId
**Tavsif:** Transferdan mahsulotni olib tashlash

---

## 14. Request (So'rov) API

### POST /api/request
**Tavsif:** Kompaniyaga a'zo bo'lish uchun so'rov yaratish

**Nima uchun ishlatiladi:**
- Kompaniya administratori tomonidan foydalanuvchiga ish taklifi yuborish
- Yangi xodimlarni jalb qilish
- Foydalanuvchini kompaniyaga qo'shish taklifi
- Maosh va rollar bilan taklif yuborish
- Bildirishnoma yuborish (Socket.IO orqali)

**Qachon ishlatiladi:**
- Admin yoki COMPANY_OWNER tomonidan yangi xodim qidirishda
- Kompaniyaga a'zo qo'shishda
- Telefon raqami yoki nickname bo'yicha foydalanuvchi topilganda
- Ish taklifi yuborishda

**Jarayon:**
1. So'rov yaratiladi (PENDING)
2. Foydalanuvchiga bildirishnoma yuboriladi
3. Foydalanuvchi tasdiqlaydi (CONFIRMED) yoki rad etadi (CANCELLED)
4. Tasdiqlanganda avtomatik UserInCompany yaratiladi

**Request Body:**
```json
{
  "requesterId": 1,
  "companyId": 1,
  "targetUserId": 2,
  "targetNicknameOrPhone": "john_doe",
  "roles": ["SELLER", "WAITER"],
  "salary": 3000000,
  "message": "Join our team"
}
```

---

### GET /api/request/:id
**Tavsif:** ID bo'yicha so'rov olish

---

### GET /api/requests/incoming/:userId
**Tavsif:** Foydalanuvchiga kelgan so'rovlar

---

### GET /api/requests/outgoing/:userId
**Tavsif:** Foydalanuvchi tomonidan yuborilgan so'rovlar

---

### POST /api/request/:id/confirm
**Tavsif:** So'rovni tasdiqlash

---

### POST /api/request/:id/cancel
**Tavsif:** So'rovni bekor qilish

---

## 15. Notification (Bildirishnoma) API

### GET /api/notifications/:userId
**Tavsif:** Foydalanuvchi bildirishnomalari

**Nima uchun ishlatiladi:**
- Foydalanuvchiga kelgan barcha bildirishnomalarni ko'rish
- O'qilmagan bildirishnomalarni alohida ko'rish
- Bildirishnomalar tarixini ko'rish
- So'rov, buyurtma, xabar kabi voqealarni kuzatish

**Qachon ishlatiladi:**
- Mobile app'da bildirishnomalar sahifasini ochishda
- Badge (son) ko'rsatish uchun o'qilmaganlar sonini olishda
- Real-time Socket.IO bilan birga ishlatilganda

**Query Parameters:**
- `unreadOnly` - Faqat o'qilmaganlarni olish

---

### POST /api/notifications/:userId/read-all
**Tavsif:** Barcha bildirishnomalarni o'qilgan deb belgilash

---

### POST /api/notification/:id/read
**Tavsif:** Bildirishnomani o'qilgan deb belgilash

---

## Authentication

### JWT Token

Barcha authenticated endpointlar JWT token talab qiladi. Token `Authorization` header da yuboriladi:

```
Authorization: Bearer <your_jwt_token>
```

### Token Payload

Token payload quyidagi ma'lumotlarni o'z ichiga oladi:
```json
{
  "nickname": "john_doe",
  "phone": "+998901234567",
  "id": 1
}
```

### Middleware

`checkToken` middleware barcha protected route'larda ishlatiladi:

```typescript
import { checkToken } from "../middlewares/user.middleware";

router.get("/protected", checkToken, handler);
```

---

## Socket.IO Real-time

### Connection

Socket.IO client ulanishi:

```javascript
import io from 'socket.io-client';

const socket = io('http://localhost:3000', {
  auth: {
    token: 'your_jwt_token'
  }
});
```

### Events

#### Client -> Server

**join:company**
```javascript
socket.emit('join:company', companyId);
```

**leave:company**
```javascript
socket.emit('leave:company', companyId);
```

**join:order**
```javascript
socket.emit('join:order', orderId);
```

**leave:order**
```javascript
socket.emit('leave:order', orderId);
```

### Server Functions

Server tomonidan Socket.IO event yuborish:

```typescript
import { emitToUser, emitToCompany, emitToOrder } from './realtime/socket';

// Foydalanuvchiga
emitToUser(userId, 'notification', { message: 'New notification' });

// Kompaniyaga
emitToCompany(companyId, 'order:updated', { orderId: 1 });

// Buyurtmaga
emitToOrder(orderId, 'status:changed', { status: 'READY' });
```

---

## Deployment

### Environment Variables

`.env` faylida quyidagi o'zgaruvchilar bo'lishi kerak:

```env
PORT=3000
NODE_ENV=production
DATABASE_URL=postgresql://user:password@host:5432/dbname
SECRET_KEY=your-secret-key-for-jwt
TELEGRAM_BOT_TOKEN=optional
ADMIN_KEY=optional
```

### Build va Run

```bash
# Dependencies install
npm install

# Database migration
npx prisma migrate deploy

# Build
npm run build

# Start
npm start
```

### Swagger Documentation

Deploy qilingan serverda Swagger UI mavjud:
```
http://your-domain.com/api-docs
```

---

## Xatoliklar (Error Handling)

### HTTP Status Kodlar

- `200` - Muvaffaqiyatli so'rov
- `201` - Yaratildi
- `400` - Noto'g'ri so'rov
- `401` - Autentifikatsiya kerak
- `403` - Token berilmagan yoki noto'g'ri
- `404` - Topilmadi
- `409` - Konflikt (masalan, duplicate)
- `500` - Server xatosi

### Error Response Format

```json
{
  "message": "Error message",
  "error": "Detailed error info"
}
```

---

## Qo'shimcha Ma'lumot

### Health Check

```
GET /api/health
```

Server holatini tekshirish uchun.

### CORS

CORS barcha manbalar uchun ochiq (`origin: '*'`).

### Request Logging

Barcha requestlar avtomatik log qilinadi (`requestLogger` middleware orqali).

---

## Izohlar

- Barcha datetime format: ISO 8601 (`2024-01-01T00:00:00.000Z`)
- Barcha pul miqdorlari: UZS (so'm)
- Decimal precision: 12,2 (narxlar uchun)

---

**Dokumentatsiya versiyasi:** 1.0.0  
**Yaratilgan:** 2024  
**Yangi versiya:** Socket.IO real-time features bilan

