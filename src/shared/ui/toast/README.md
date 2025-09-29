# TOAST COMPONENT

**Toast** - sahifaning yuqori o'ng tarafida chiqadigan bildirishnomalar tizimi.

## Vazifasi:

- 📱 Toast xabarlarni ko'rsatish
- ⏰ Avtomatik yopilish (5 sekund)
- 📍 Yuqori o'ng tarafda joylashish
- 🔄 Bir nechta toast'larni boshqarish
- ✨ Smooth animation

## Ishlatish:

### 1. Provider'ni qo'shish:

```tsx
// App.tsx yoki asosiy component
import { ToastProvider } from 'shared/ui/toast';

function App() {
  return (
    <ToastProvider>
      <YourAppContent />
    </ToastProvider>
  );
}
```

### 2. Hook orqali ishlatish:

```tsx
import { useToast } from 'shared/ui/toast';

function ExampleComponent() {
  const { showToast } = useToast();

  const handleSuccess = () => {
    showToast({
      variant: 'success',
      title: 'Success!',
      message: 'Your data has been saved successfully.',
      duration: 3000, // 3 sekund
    });
  };

  const handleError = () => {
    showToast({
      variant: 'error',
      title: 'Error',
      message: 'Something went wrong. Please try again.',
      size: 'medium',
    });
  };

  return (
    <div>
      <button onClick={handleSuccess}>Show Success</button>
      <button onClick={handleError}>Show Error</button>
    </div>
  );
}
```

## Xususiyatlari:

- **Auto-dismiss**: 5 sekund keyin avtomatik yopiladi
- **Manual close**: X tugmasi bilan qo'lda yopish
- **Multiple toasts**: Bir nechta toast'ni bir vaqtda ko'rsatish
- **Animation**: Smooth slide-in animation
- **Responsive**: Mobile va desktop uchun moslashuvchi
