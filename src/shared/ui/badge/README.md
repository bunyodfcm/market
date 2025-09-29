# BADGE COMPONENTS

**Badge** komponentlari - status, label va count ko'rsatish uchun.

## Komponentlar:

### **Badge** - Asosiy badge
- 6 ta variant: `default`, `secondary`, `success`, `warning`, `error`, `info`
- 3 ta size: `sm`, `md`, `lg`
- 3 ta shape: `rounded`, `pill`, `square`
- Dot qo'llab-quvvatlaydi (left/right)

### **StatusBadge** - Status ko'rsatish
- Built-in status'lar: `active`, `inactive`, `pending`, `success`, `error`, `warning`
- Avtomatik dot va rang
- Custom label qo'llab-quvvatlaydi

### **CountBadge** - Notification count
- Max count limit (99+)
- ShowZero option
- Turli variant'lar
- Responsive size'lar

## Ishlatish:

### Asosiy Badge:
```tsx
import { Badge } from 'shared/ui/badge';

// Oddiy badge
<Badge variant="success">Success</Badge>

// Dot bilan
<Badge variant="warning" dot dotPosition="left">
  Warning
</Badge>

// Turli shape'lar
<Badge shape="pill" variant="info">Pill Badge</Badge>
<Badge shape="square" variant="error">Square</Badge>

// Size'lar
<Badge size="sm" variant="default">Small</Badge>
<Badge size="lg" variant="secondary">Large</Badge>
```

### Status Badge:
```tsx
import { StatusBadge } from 'shared/ui/badge';

// Built-in status'lar
<StatusBadge status="active" />
<StatusBadge status="pending" />
<StatusBadge status="error" />

// Custom label
<StatusBadge status="success">Completed</StatusBadge>
```

### Count Badge:
```tsx
import { CountBadge } from 'shared/ui/badge';

// Notification count
<CountBadge count={5} />
<CountBadge count={150} max={99} /> {/* 99+ */}

// Turli variant'lar
<CountBadge count={3} variant="primary" />
<CountBadge count={0} showZero /> {/* 0 ni ko'rsatish */}

// Size'lar
<CountBadge count={10} size="sm" />
<CountBadge count={25} size="lg" />
```

### Real-world misollar:

#### User Status:
```tsx
<div className="flex items-center space-x-2">
  <img src={user.avatar} className="w-8 h-8 rounded-full" />
  <span>{user.name}</span>
  <StatusBadge status={user.isOnline ? 'active' : 'inactive'} />
</div>
```

#### Notification Icon:
```tsx
<div className="relative">
  <BellIcon className="w-6 h-6" />
  <CountBadge 
    count={notifications.length} 
    className="absolute -top-1 -right-1"
  />
</div>
```

#### Product Tags:
```tsx
<div className="flex flex-wrap gap-2">
  <Badge variant="success" shape="pill">New</Badge>
  <Badge variant="warning" shape="pill">Sale</Badge>
  <Badge variant="info" shape="pill">Featured</Badge>
</div>
```

## Xususiyatlari:
- **6 ta rang variant** - har xil holatlar uchun
- **3 ta size** - sm, md, lg
- **3 ta shape** - rounded, pill, square
- **Dot indicator** - status ko'rsatish uchun
- **Count limit** - 99+ formatida
- **Zero handling** - 0 ni yashirish/ko'rsatish
- **Responsive** - barcha size'larda ishlaydi 