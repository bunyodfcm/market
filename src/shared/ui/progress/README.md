# PROGRESS COMPONENTS

**Progress** komponentlari - jarayonlar va yuklash holatlarini ko'rsatish uchun.

## Komponentlar:

### **Progress** - Progress bar

- 4 ta variant: `default`, `success`, `warning`, `error`
- 3 ta size: `sm`, `md`, `lg`
- Label qo'llab-quvvatlaydi
- Percentage ko'rsatish

### **CircularProgress** - Doira progress

- 4 ta size: `sm`, `md`, `lg`, `xl`
- 3 ta thickness: `thin`, `medium`, `thick`
- Label va percentage
- Smooth animation

### **SteppedProgress** - Multi-step progress

- Horizontal va vertical orientation
- Step labels
- Completed/active/inactive states
- Custom step count

### **LoadingSpinner** - Loading indicator

- 4 ta size
- 4 ta variant
- Simple spin animation

## Ishlatish:

### Progress Bar:

```tsx
import { Progress } from 'shared/ui/progress';

// Oddiy progress
<Progress value={75} />

// Label bilan
<Progress
  value={45}
  showLabel
  label="Uploading..."
/>

// Turli variant'lar
<Progress value={100} variant="success" />
<Progress value={25} variant="warning" />
<Progress value={10} variant="error" />

// Size'lar
<Progress value={60} size="sm" />
<Progress value={60} size="lg" />
```

### Circular Progress:

```tsx
import { CircularProgress } from 'shared/ui/progress';

// Oddiy circular progress
<CircularProgress value={75} />

// Label bilan
<CircularProgress
  value={45}
  showLabel
/>

// Custom label
<CircularProgress
  value={85}
  showLabel
  label="85/100"
/>

// Size va thickness
<CircularProgress
  value={60}
  size="xl"
  thickness="thick"
/>
```

### Stepped Progress:

```tsx
import { SteppedProgress } from 'shared/ui/progress';

const steps = [
  { id: '1', label: 'Personal Info', completed: true },
  { id: '2', label: 'Address', active: true },
  { id: '3', label: 'Payment' },
  { id: '4', label: 'Confirmation' }
];

// Horizontal stepper
<SteppedProgress
  steps={steps}
  currentStep={1}
/>

// Vertical stepper
<SteppedProgress
  steps={steps}
  currentStep={1}
  orientation="vertical"
/>

// Without labels
<SteppedProgress
  steps={steps}
  currentStep={1}
  showLabels={false}
/>
```

### Loading Spinner:

```tsx
import { LoadingSpinner } from 'shared/ui/progress';

// Oddiy spinner
<LoadingSpinner />

// Turli size'lar
<LoadingSpinner size="sm" />
<LoadingSpinner size="xl" />

// Variant'lar
<LoadingSpinner variant="success" />
<LoadingSpinner variant="error" />
```

### Real-world misollar:

#### File Upload:

```tsx
const FileUpload = ({ progress }) => (
  <div className="space-y-2">
    <div className="flex items-center space-x-2">
      <FileIcon className="w-4 h-4" />
      <span className="text-sm">document.pdf</span>
    </div>
    <Progress
      value={progress}
      showLabel
      label="Uploading..."
      variant={progress === 100 ? 'success' : 'default'}
    />
  </div>
);
```

#### Multi-step Form:

```tsx
const CheckoutForm = ({ currentStep }) => {
  const steps = [
    { id: '1', label: 'Cart Review' },
    { id: '2', label: 'Shipping' },
    { id: '3', label: 'Payment' },
    { id: '4', label: 'Confirmation' },
  ];

  return (
    <div>
      <SteppedProgress
        steps={steps}
        currentStep={currentStep}
        variant="success"
      />
      {/* Form content */}
    </div>
  );
};
```

#### Loading Button:

```tsx
const SubmitButton = ({ isLoading }) => (
  <Button disabled={isLoading}>
    {isLoading && <LoadingSpinner size="sm" className="mr-2" />}
    {isLoading ? 'Submitting...' : 'Submit'}
  </Button>
);
```

#### Dashboard Stats:

```tsx
const StatCard = ({ title, value, max, variant }) => (
  <div className="p-4 bg-white rounded-lg shadow">
    <h3 className="text-lg font-medium">{title}</h3>
    <div className="mt-2 flex items-center space-x-3">
      <CircularProgress
        value={value}
        max={max}
        variant={variant}
        size="md"
        showLabel
      />
      <div>
        <p className="text-2xl font-bold">{value}</p>
        <p className="text-sm text-gray-500">of {max}</p>
      </div>
    </div>
  </div>
);
```

## Xususiyatlari:

- **4 ta variant** - default, success, warning, error
- **Multiple sizes** - sm, md, lg, xl
- **Smooth animations** - CSS transitions
- **Accessibility** - proper ARIA attributes
- **Customizable** - className props
- **Responsive** - works on all screen sizes
- **TypeScript** - full type support
- **Flexible** - percentage or custom values
