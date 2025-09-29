# BUTTON COMPONENTS

**Button** komponentlari - turli xil tugmalar va button group'lari.

## Komponentlar:

### **Button** - Asosiy tugma

- 4 ta variant: `primary`, `secondary`, `outline`, `ghost`
- Bir xil o'lcham (siz className bilan boshqarasiz)
- Focus va disabled state'lar

### **IconButton** - Icon tugmalari

- Kvadrat shakl (icon'lar uchun)
- Bir xil variant'lar

### **ButtonGroup** - Tugmalar guruhi

- Birlashgan tugmalar
- Rounded burchaklar avtomatik

### **Pagination** - Sahifalash

- Previous/Next tugmalari
- Raqamli navigatsiya
- Ellipsis (...) qo'llab-quvvatlaydi

## Ishlatish:

### Oddiy Button:

```tsx
import { Button } from 'shared/ui/button';

<Button variant="primary" onClick={() => {}}>
  Primary Button
</Button>

<Button variant="outline">
  Outline Button
</Button>

<Button disabled>
  Disabled Button
</Button>
```

### Icon Button:

```tsx
import { IconButton } from 'shared/ui/button';

<IconButton variant="ghost">
  <svg>...</svg>
</IconButton>;
```

### Button Group:

```tsx
import { Button, ButtonGroup } from 'shared/ui/button';

<ButtonGroup>
  <Button variant="outline">First</Button>
  <Button variant="outline">Second</Button>
  <Button variant="outline">Third</Button>
</ButtonGroup>;
```

### Pagination:

```tsx
import { Pagination } from 'shared/ui/button';

<Pagination
  currentPage={2}
  totalPages={10}
  onPageChange={page => console.log(page)}
/>;
```
