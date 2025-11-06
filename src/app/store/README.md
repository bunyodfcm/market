# APP STORE Directory

**Global state management** uchun papka. Ilovaning umumiy state'ini boshqaradi.

## 📦 O'rnatilgan

- **Zustand** - Oddiy va tez global state management

## 📁 Struktura

```
store/
├── types/
│   └── index.ts          # Store types (User, Company, Notification)
├── auth.store.ts          # Authentication state
├── user.store.ts          # User state management
├── company.store.ts       # Company state management
├── notification.store.ts  # Notification state
├── cart.store.ts          # Shopping cart state
└── index.ts               # Store exports
```

## 🎯 Store'lar

### 1. Auth Store (`useAuthStore`)

Authentication state'ini boshqaradi.

```typescript
import { useAuthStore } from '@/app/store';

function LoginComponent() {
  const { login, logout, user, isAuthenticated, token } = useAuthStore();

  const handleLogin = async () => {
    const response = await authApi.login(credentials);
    login(response.token, response.user);
  };

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <p>Welcome, {user?.nickname}</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
}
```

**Features:**

- ✅ Token va user ma'lumotlarini saqlash
- ✅ Pending token (OTP uchun)
- ✅ Auto-persist (localStorage)
- ✅ Event dispatch (mavjud kod bilan moslashish)

### 2. User Store (`useUserStore`)

User'lar ro'yxatini va filterlarni boshqaradi.

```typescript
import { useUserStore } from '@/app/store';

function UsersPage() {
  const { users, filters, setUsers, setFilters } = useUserStore();

  useEffect(() => {
    // API dan user'larni olish
    fetchUsers().then(setUsers);
  }, []);

  return (
    <div>
      <input
        value={filters.search}
        onChange={e => setFilters({ search: e.target.value })}
        placeholder="Search users..."
      />
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}
```

### 3. Company Store (`useCompanyStore`)

Company state'ini boshqaradi.

```typescript
import { useCompanyStore } from '@/app/store';

function CompanySelector() {
  const { companies, currentCompany, setCurrentCompany } = useCompanyStore();

  return (
    <select
      value={currentCompany?.id}
      onChange={e => {
        const company = companies.find(c => c.id === Number(e.target.value));
        setCurrentCompany(company || null);
      }}
    >
      {companies.map(company => (
        <option key={company.id} value={company.id}>
          {company.name}
        </option>
      ))}
    </select>
  );
}
```

### 4. Notification Store (`useNotificationStore`)

Notification'lar va unread count'ni boshqaradi.

```typescript
import { useNotificationStore } from '@/app/store';

function NotificationBell() {
  const { notifications, unreadCount, markAsRead } = useNotificationStore();

  return (
    <div>
      <BellIcon />
      {unreadCount > 0 && <Badge>{unreadCount}</Badge>}
      <NotificationList notifications={notifications} onRead={markAsRead} />
    </div>
  );
}
```

### 5. Cart Store (`useCartStore`)

Shopping cart state'ini boshqaradi.

```typescript
import { useCartStore } from '@/app/store';

function Cart() {
  const {
    items,
    getTotalItems,
    getTotalPrice,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
  } = useCartStore();

  return (
    <div>
      <h2>Cart ({getTotalItems()} items)</h2>
      <p>Total: ${getTotalPrice()}</p>
      {items.map(item => (
        <CartItem
          key={item.productId}
          item={item}
          onUpdate={updateQuantity}
          onRemove={removeItem}
        />
      ))}
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
}
```

## 🔄 Mavjud kod bilan integratsiya

### useAuth hook'ni yangilash

Eski `useAuth` hook o'rniga `useAuthStore` ishlatish:

```typescript
// Eski (src/processes/auth/model/useSession.ts)
import { useAuth } from './useSession';

// Yangi
import { useAuthStore } from '@/app/store';

function Component() {
  const { user, isAuthenticated, login, logout } = useAuthStore();
  // ...
}
```

## 💡 Best Practices

1. **Selective subscription** - Faqat kerakli state'ni subscribe qiling:

```typescript
// ❌ Yomon - butun store re-render bo'ladi
const store = useAuthStore();

// ✅ Yaxshi - faqat user o'zgarganda re-render
const user = useAuthStore(state => state.user);
```

2. **Actions'ni destructure qiling**:

```typescript
// ✅ Yaxshi
const { login, logout } = useAuthStore();

// ❌ Yomon - har safar store o'zgaradi
const store = useAuthStore();
store.login();
```

3. **Persist middleware** - Faqat kerakli ma'lumotlarni persist qiling:

```typescript
persist(
  (set) => ({ ... }),
  {
    name: 'auth-storage',
    partialize: (state) => ({
      user: state.user,
      token: state.token,
      // Sensitive ma'lumotlarni persist qilmaymiz
    }),
  }
)
```

## 📚 Qo'shimcha Ma'lumot

- [Zustand Documentation](https://docs.pmnd.rs/zustand)
- [Zustand Persist](https://docs.pmnd.rs/zustand/integrations/persisting-store-data)
