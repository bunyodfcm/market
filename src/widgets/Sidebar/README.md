# SIDEBAR WIDGET Directory

**Yon menyu** komponenti. Navigatsiya va user profil ma'lumotlarini ko'rsatadi.

## Vazifasi:

- 🧭 Navigatsiya menu
- 👤 User profil ko'rsatish
- 🔗 Menu linklari
- 📱 Responsive design
- 🎨 Menu state management

## Papkalar:

### **model/**

- Sidebar state management
- Menu configuration
- Navigation logic

### **ui/**

- Sidebar komponenti
- Menu items
- User profile section

## Misol:

```tsx
// ui/Sidebar.tsx
export const Sidebar = () => {
  const { user } = useAuth();
  const navigation = useNavigation();

  return (
    <aside className="sidebar">
      <UserProfile user={user} />
      <Navigation items={navigation} />
    </aside>
  );
};

// model/index.ts
export const useNavigation = () => {
  return [
    { path: '/dashboard', label: 'Dashboard', icon: 'home' },
    { path: '/users', label: 'Users', icon: 'users' },
    { path: '/settings', label: 'Settings', icon: 'settings' },
  ];
};
```
