# TOPBAR WIDGET Directory

**Yuqori panel** komponenti. User actions, notifications va search functionality.

## Vazifasi:

- 🔍 Search functionality
- 🔔 Notifications
- 👤 User actions menu
- 🌙 Theme switcher
- 🌍 Language switcher

## Kelajakda qo'shilishi kerak:

- Search input
- Notifications dropdown
- User menu
- Theme toggle
- Language selector

## Misol:

```tsx
// index.tsx
export const Topbar = () => {
  return (
    <header className="topbar">
      <SearchInput />
      <div className="topbar-actions">
        <NotificationButton />
        <ThemeToggle />
        <LanguageSwitcher />
        <UserMenu />
      </div>
    </header>
  );
};
```
