# PROCESSES Directory

**Murakkab biznes jarayonlar** uchun mo'ljallangan papka. Bir nechta feature'larni birlashtirgan holda, katta biznes jarayonlarni boshqaradi.

## Vazifasi:

- 🔄 Murakkab biznes workflow'lar
- 🔗 Feature'larni orchestratsiya qilish
- 🛡️ Cross-cutting concerns
- 📊 Multi-step jarayonlar
- 🎯 End-to-end scenarios

## Mavjud processes:

### **auth/**

- Autentifikatsiya jarayoni
- Session management
- Auth guards va himoya
- Login/logout workflow

## Process tuzilishi:

```
processes/example-process/
├── model/        # Process logic
│   ├── hooks.ts  # Process hooks
│   ├── store.ts  # Process state
│   ├── flow.ts   # Business flow
│   └── types.ts  # Process types
├── ui/           # Process UI
│   ├── ProcessComponent.tsx
│   ├── steps/    # Multi-step UI
│   └── index.ts
└── lib/          # Process utilities
    ├── utils.ts
    └── constants.ts
```

## Process vs Feature farqi:

| Process                     | Feature          |
| --------------------------- | ---------------- |
| Murakkab workflow           | Bitta vazifa     |
| Bir nechta step             | Oddiy amal       |
| Feature'larni birlashtiradi | Mustaqil         |
| End-to-end scenario         | Lokal funksiyasi |

## Misol:

```tsx
// processes/auth/model/useSession.ts
import { useLogin } from 'features/auth-login';
import { useProfile } from 'features/user-profile';

export const useSession = () => {
  // Murakkab auth workflow
};

// processes/auth/ui/AuthGate.tsx
export const AuthGate = ({ children }) => {
  const { isAuthenticated } = useSession();

  if (!isAuthenticated) {
    return <LoginPage />;
  }

  return children;
};
```

## Kelajakda qo'shilishi mumkin:

- `onboarding/` - Yangi user onboarding
- `checkout/` - E-commerce checkout jarayoni
- `file-processing/` - Fayl qayta ishlash
- `notification/` - Bildirishnoma tizimi
- `reporting/` - Hisobot yaratish jarayoni

## Qoidalar:

- Features'dan foydalanishi mumkin
- Entities va shared'dan foydalanishi mumkin
- Pages tomonidan ishlatiladi
- Murakkab biznes logikani o'z ichiga oladi
- Cross-cutting concerns uchun ishlatiladi
