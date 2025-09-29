# MISCELLANEOUS COMPONENTS

**Misc** komponentlari - turli xil yordamchi va qo'shimcha UI elementlar.

## Komponentlar:

### **Rating** - Yulduz reytingi

- 3 ta variant: `default` (sariq), `warning` (orange), `success` (yashil)
- 3 ta size: `sm`, `md`, `lg`
- Half star support (0.5 yulduz)
- Interactive va readonly rejimlar
- Hover effects

### **Indicator** - Nuqta ko'rsatkichlari

- 2 ta shape: `circle`, `line`
- 4 ta variant: `default`, `success`, `warning`, `error`
- 3 ta size: `sm`, `md`, `lg`
- Clickable va readonly
- Carousel, stepper uchun

### **Skeleton** - Loading placeholder

- 3 ta variant: `text`, `circular`, `rectangular`
- 3 ta animation: `pulse`, `wave`, `none`
- Custom width va height
- Content yuklash paytida

### **Divider** - Bo'luvchi chiziq

- 2 ta orientation: `horizontal`, `vertical`
- 3 ta variant: `solid`, `dashed`, `dotted`
- 3 ta size: `sm`, `md`, `lg`
- Text bilan bo'luvchi

## Ishlatish:

### Rating:

```tsx
import { Rating } from 'shared/ui';

// Oddiy rating
<Rating value={4.5} max={5} />

// Interactive rating
<Rating
  value={rating}
  onChange={setRating}
  allowHalf
  showValue
/>

// Readonly rating
<Rating
  value={3}
  readonly
  size="sm"
  variant="warning"
/>
```

### Indicator:

```tsx
import { Indicator } from 'shared/ui';

// Carousel indicator
<Indicator
  total={5}
  current={currentSlide}
  clickable
  onChange={setCurrentSlide}
/>

// Line shape
<Indicator
  total={4}
  current={1}
  shape="line"
  variant="success"
/>
```

### Skeleton:

```tsx
import { Skeleton } from 'shared/ui';

// Text skeleton
<Skeleton variant="text" width="60%" />

// Card skeleton
<div className="space-y-3">
  <Skeleton variant="circular" width={40} height={40} />
  <Skeleton variant="text" />
  <Skeleton variant="rectangular" height={200} />
</div>

// Custom animation
<Skeleton animation="wave" />
```

### Divider:

```tsx
import { Divider } from 'shared/ui';

// Simple divider
<Divider />

// With text
<Divider>OR</Divider>

// Vertical divider
<div className="flex items-center h-20">
  <span>Left</span>
  <Divider orientation="vertical" className="mx-4" />
  <span>Right</span>
</div>

// Dashed style
<Divider variant="dashed" size="md" />
```

### Real-world misollar:

#### Product Rating:

```tsx
const ProductCard = ({ product }) => (
  <div className="p-4 border rounded-lg">
    <h3>{product.name}</h3>
    <div className="flex items-center space-x-2 mt-2">
      <Rating value={product.rating} readonly size="sm" />
      <span className="text-sm text-gray-500">
        ({product.reviewCount} reviews)
      </span>
    </div>
  </div>
);
```

#### Image Carousel:

```tsx
const ImageCarousel = ({ images }) => {
  const [current, setCurrent] = useState(0);

  return (
    <div>
      <img src={images[current]} />
      <div className="flex justify-center mt-4">
        <Indicator
          total={images.length}
          current={current}
          clickable
          onChange={setCurrent}
        />
      </div>
    </div>
  );
};
```

#### Loading Card:

```tsx
const LoadingCard = () => (
  <div className="p-4 border rounded-lg space-y-3">
    <div className="flex items-center space-x-3">
      <Skeleton variant="circular" width={40} height={40} />
      <div className="flex-1 space-y-2">
        <Skeleton variant="text" width="60%" />
        <Skeleton variant="text" width="40%" />
      </div>
    </div>
    <Skeleton variant="rectangular" height={120} />
  </div>
);
```

#### Form Section:

```tsx
const FormSection = () => (
  <div className="space-y-6">
    <div>
      <h2>Personal Information</h2>
      {/* Form fields */}
    </div>

    <Divider>Address Information</Divider>

    <div>{/* Address fields */}</div>
  </div>
);
```

## Xususiyatlari:

- **Interactive Rating** - click va hover support
- **Half Star Rating** - 0.5 yulduz qo'llab-quvvatlaydi
- **Flexible Indicators** - carousel, stepper uchun
- **Smooth Skeletons** - loading animation'lar
- **Flexible Dividers** - text bilan bo'luvchi
- **Responsive** - barcha ekran o'lchamlarida
- **Accessible** - proper ARIA attributes
- **Customizable** - className props
