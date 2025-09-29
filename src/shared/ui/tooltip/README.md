# TOOLTIP COMPONENTS

**Tooltip** komponentlari - hover, click yoki focus paytida qo'shimcha ma'lumot ko'rsatish uchun.

## Komponentlar:

### **Tooltip** - Asosiy tooltip

- 4 ta position: `top`, `bottom`, `left`, `right`
- 2 ta variant: `dark`, `light`
- 3 ta size: `sm`, `md`, `lg`
- Delay qo'llab-quvvatlaydi
- Arrow (o'q) bilan

### **TooltipTrigger** - Advanced tooltip

- 3 ta trigger: `hover`, `click`, `focus`
- Click outside to close
- Barcha Tooltip xususiyatlari
- Children element'ni clone qiladi

### **TooltipProvider** - Global settings

- Default delay, variant, position
- Context API orqali

## Ishlatish:

### Asosiy Tooltip:

```tsx
import { Tooltip } from 'shared/ui/tooltip';

// Oddiy tooltip
<Tooltip content="This is a tooltip">
  <button>Hover me</button>
</Tooltip>

// Turli position'lar
<Tooltip content="Top tooltip" position="top">
  <span>Top</span>
</Tooltip>

<Tooltip content="Right tooltip" position="right">
  <span>Right</span>
</Tooltip>

// Light variant
<Tooltip
  content="Light tooltip"
  variant="light"
  size="lg"
>
  <button>Light tooltip</button>
</Tooltip>

// Delay bilan
<Tooltip
  content="Delayed tooltip"
  delay={500}
>
  <button>Wait 500ms</button>
</Tooltip>
```

### TooltipTrigger:

```tsx
import { TooltipTrigger } from 'shared/ui/tooltip';

// Click trigger
<TooltipTrigger
  tooltip="Click to see this!"
  trigger="click"
  position="bottom"
>
  <button>Click me</button>
</TooltipTrigger>

// Focus trigger
<TooltipTrigger
  tooltip="Focus to see tooltip"
  trigger="focus"
>
  <input placeholder="Focus here" />
</TooltipTrigger>

// Complex tooltip content
<TooltipTrigger
  tooltip={
    <div>
      <strong>Complex Tooltip</strong>
      <p>With multiple lines</p>
    </div>
  }
  variant="light"
  size="lg"
>
  <button>Complex tooltip</button>
</TooltipTrigger>
```

### TooltipProvider:

```tsx
import { TooltipProvider } from 'shared/ui/tooltip';

// Global settings
<TooltipProvider
  defaultDelay={200}
  defaultVariant="light"
  defaultPosition="top"
>
  <YourApp />
</TooltipProvider>;
```

### Real-world misollar:

#### Icon Button with Tooltip:

```tsx
<Tooltip content="Delete item">
  <IconButton variant="ghost">
    <TrashIcon className="w-4 h-4" />
  </IconButton>
</Tooltip>
```

#### Form Field Help:

```tsx
<div className="flex items-center space-x-2">
  <Label>Password</Label>
  <Tooltip
    content="Password must be at least 8 characters"
    variant="light"
    position="right"
  >
    <InfoIcon className="w-4 h-4 text-gray-400" />
  </Tooltip>
</div>
```

#### Status Badge with Details:

```tsx
<TooltipTrigger
  tooltip={
    <div className="text-left">
      <div>Status: Active</div>
      <div>Last seen: 2 minutes ago</div>
      <div>Location: New York</div>
    </div>
  }
  variant="light"
  size="lg"
  trigger="hover"
>
  <StatusBadge status="active" />
</TooltipTrigger>
```

#### Truncated Text:

```tsx
<Tooltip content={fullText}>
  <span className="truncate max-w-xs">{truncatedText}</span>
</Tooltip>
```

## Xususiyatlari:

- **4 ta position** - top, bottom, left, right
- **2 ta variant** - dark (default), light
- **3 ta size** - sm, md, lg
- **Arrow indicator** - tooltip'ning qayerdan kelganini ko'rsatadi
- **Delay support** - tooltip ko'rsatishdan oldin kutish
- **Multiple triggers** - hover, click, focus
- **Click outside** - click trigger uchun tashqarida bosish
- **Accessibility** - role="tooltip", focus support
- **Smooth animations** - fade in/out effects
- **Responsive** - barcha ekran o'lchamlarida ishlaydi
