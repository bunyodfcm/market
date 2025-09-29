# INPUT COMPONENTS

**Form input** komponentlari - turli xil input turlari va form elementlari.

## Komponentlar:

### **Input** - Asosiy input

- 3 ta variant: `default`, `filled`, `outline`
- Icon qo'llab-quvvatlaydi
- Error state
- Placeholder support

### **Label** - Input label

- Required (\*) belgisi
- Accessibility uchun htmlFor
- Custom styling

### **Textarea** - Ko'p qatorli text

- Variant'lar bilan
- Resizable (vertical)
- Error state

### **NumberInput** - Raqam input

- Increment/Decrement tugmalari
- Custom onIncrement/onDecrement
- showButtons={false} bilan oddiy number input

### **Switch** - Toggle switch

- 3 ta size: `sm`, `md`, `lg`
- 3 ta variant: `default`, `success`, `warning`
- Smooth animation

### **Checkbox** - Checkbox input

- Indeterminate state
- Variant'lar bilan
- Custom styling

### **Radio** - Radio button

- Variant'lar bilan
- Group uchun name attribute

## Ishlatish:

### Input:

```tsx
import { Input, Label } from 'shared/ui';

<div>
  <Label htmlFor="email" required>Email</Label>
  <Input
    id="email"
    type="email"
    placeholder="Enter your email"
    variant="filled"
    icon={<EmailIcon />}
  />
</div>

// Error state
<Input
  error={true}
  placeholder="This field has error"
/>
```

### Textarea:

```tsx
<div>
  <Label htmlFor="message">Message</Label>
  <Textarea
    id="message"
    placeholder="Enter your message"
    rows={6}
    variant="outline"
  />
</div>
```

### NumberInput:

```tsx
// With buttons
<NumberInput
  value={count}
  onChange={(e) => setCount(Number(e.target.value))}
  min={0}
  max={100}
/>

// Without buttons
<NumberInput
  showButtons={false}
  placeholder="Enter number"
/>
```

### Switch:

```tsx
<Switch
  checked={isEnabled}
  onChange={setIsEnabled}
  size="lg"
  variant="success"
/>
```

### Checkbox va Radio:

```tsx
// Checkbox
<div className="flex items-center space-x-2">
  <Checkbox
    id="terms"
    checked={accepted}
    onChange={(e) => setAccepted(e.target.checked)}
  />
  <Label htmlFor="terms">I accept terms</Label>
</div>

// Radio group
<div className="space-y-2">
  <div className="flex items-center space-x-2">
    <Radio
      id="option1"
      name="options"
      value="1"
      checked={selected === '1'}
      onChange={(e) => setSelected(e.target.value)}
    />
    <Label htmlFor="option1">Option 1</Label>
  </div>
</div>
```
