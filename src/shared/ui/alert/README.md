# ALERT COMPONENT

**Alert** komponenti - turli xil xabarlar va bildirishnomalar ko'rsatish uchun.

## Vazifasi:

- ⚠️ Error, success, warning, info xabarlari
- 📏 Ikki xil size (medium, large)
- ❌ Yopish tugmasi
- 🎨 Har bir variant uchun rang palitasi

## Variant'lar:

- `error` - Xatolik xabarlari (qizil)
- `success` - Muvaffaqiyat xabarlari (yashil)
- `warning` - Ogohlantirish xabarlari (sariq)
- `info` - Ma'lumot xabarlari (ko'k)

## Size'lar:

- `medium` - Kichik alert
- `large` - Katta alert (default)

## Ishlatish:

```tsx
import { Alert } from 'shared/ui/alert';

// Oddiy alert
<Alert
  variant="success"
  title="Success!"
  message="Your data has been saved successfully."
  onClose={() => console.log('closed')}
/>

// Medium size alert
<Alert
  variant="error"
  size="medium"
  title="Error"
  message="Something went wrong."
/>

// Faqat title bilan
<Alert
  variant="info"
  title="Information"
/>
```

## Toast sifatida ishlatish:

Alert komponentini Toast provider bilan birga ishlatib, sahifaning yuqori o'ng tarafida ko'rsatish mumkin.
