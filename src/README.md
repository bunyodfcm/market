# SRC Directory

Bu loyihaning asosiy kod manbai (source code) papkasi. Feature-Sliced Design (FSD) arxitekturasiga asoslanib tuzilgan.

## Papkalar tuzilishi:

### 📱 **app/**

Ilovaning asosiy konfiguratsiyasi va ishga tushirish nuqtasi

### 🏠 **pages/**

URL routing va sahifalar (har bir route uchun alohida papka)

### 🔧 **features/**

Biznes funksiyalari (login, CRUD amallar, va boshqalar)

### 🧱 **entities/**

Biznes ob'ektlari (User, Project va boshqa ma'lumot modellari)

### 🎛️ **widgets/**

Murakkab UI bloklar (Sidebar, DataTable, Topbar)

### 🔄 **processes/**

Murakkab biznes jarayonlar (Authentication flow)

### 🤝 **shared/**

Umumiy kod (UI komponentlar, utillar, konfiguratsiya)

## FSD qoidalari:

- Yuqori qatlamlar pastgi qatlamlarni import qila oladi
- Bir xil qatlamdagi papkalar bir-birini import qilmaydi
- Har bir papka o'zining vazifasiga javobgar

## Import tartibi:

```
app → pages → features → entities → widgets → processes → shared
```
