# PLACEHOLDER COMPONENTS

**Placeholder** komponentlari - turli xil content placeholder'lari uchun.

## Komponentlar:

### **Placeholder** - Bitta placeholder

- 8 ta built-in type: `image`, `video`, `audio`, `document`, `user`, `folder`, `shopping`, `custom`
- 4 ta size: `sm`, `md`, `lg`, `xl`
- Selected state
- Custom icon qo'llab-quvvatlaydi

### **PlaceholderGrid** - Placeholder grid

- 2-6 columns
- Gap control (sm, md, lg)
- Click selection
- Hover effects

## Ishlatish:

### Bitta Placeholder:

```tsx
import { Placeholder } from 'shared/ui/placeholder';

// Default image placeholder
<Placeholder type="image" size="md" />

// Selected state
<Placeholder
  type="shopping"
  size="lg"
  selected={true}
/>

// Custom icon
<Placeholder
  type="custom"
  icon={<MyCustomIcon />}
  size="xl"
/>
```

### Placeholder Grid:

```tsx
import { PlaceholderGrid } from 'shared/ui/placeholder';

const items = [
  { id: '1', type: 'image', size: 'md' },
  { id: '2', type: 'video', size: 'md' },
  { id: '3', type: 'audio', size: 'md' },
  { id: '4', type: 'document', size: 'md' },
  { id: '5', type: 'user', size: 'md' },
];

<PlaceholderGrid
  items={items}
  columns={3}
  gap="md"
  selectedId={selectedId}
  onSelect={id => setSelectedId(id)}
/>;
```

### File Upload Placeholder:

```tsx
const FileUploadArea = () => {
  return (
    <div className="p-8 border-2 border-dashed border-gray-300 rounded-lg">
      <div className="text-center">
        <Placeholder type="document" size="xl" className="mx-auto mb-4" />
        <p className="text-gray-500">
          Drag and drop files here, or click to browse
        </p>
      </div>
    </div>
  );
};
```

## Xususiyatlari:

- **8 ta built-in icon** - turli content turlari uchun
- **4 ta size** - sm (48px), md (64px), lg (80px), xl (96px)
- **Selected state** - ko'k border va background
- **Hover effects** - interactive placeholder'lar uchun
- **Custom icon** - o'zingizning icon'ingizni ishlatish
- **Grid layout** - bir nechta placeholder'larni grid'da ko'rsatish
