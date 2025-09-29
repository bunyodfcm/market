# APP STORE Directory

**Global state management** uchun papka. Ilovaning umumiy state'ini boshqaradi.

## Vazifasi:

- 🏪 Global state store
- 🔄 State management (Redux/Zustand)
- 🛠️ Middleware konfiguratsiyasi
- 📊 Store slices
- 💾 Persistence

## Store turlari:

- **Redux Toolkit** - Murakkab state uchun
- **Zustand** - Oddiy state uchun
- **Context + useReducer** - Lokal state uchun

## Misol:

```tsx
// store/index.ts
export const store = configureStore({
  reducer: {
    auth: authSlice,
    users: usersSlice,
    theme: themeSlice,
  },
});

// store/authSlice.ts
export const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null, isAuthenticated: false },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
  },
});
```
