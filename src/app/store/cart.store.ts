import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface CartItem {
  productId: number;
  productName: string;
  quantity: number;
  price: number;
  imageUrl?: string;
}

interface CartState {
  // State
  items: CartItem[];
  isOpen: boolean;

  // Actions
  addItem: (item: CartItem) => void;
  removeItem: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  // Computed getters
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      // Initial state
      items: [],
      isOpen: false,

      // Computed getters
      getTotalItems: () => {
        return get().items.reduce((sum, item) => sum + item.quantity, 0);
      },

      getTotalPrice: () => {
        return get().items.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        );
      },

      // Actions
      addItem: item => {
        set(state => {
          const existingItem = state.items.find(
            i => i.productId === item.productId
          );

          if (existingItem) {
            // Agar mahsulot allaqachon cart'da bo'lsa, quantity ni oshirish
            return {
              items: state.items.map(i =>
                i.productId === item.productId
                  ? { ...i, quantity: i.quantity + item.quantity }
                  : i
              ),
            };
          }

          // Yangi mahsulot qo'shish
          return {
            items: [...state.items, item],
          };
        });
      },

      removeItem: productId => {
        set(state => ({
          items: state.items.filter(item => item.productId !== productId),
        }));
      },

      updateQuantity: (productId, quantity) => {
        if (quantity <= 0) {
          get().removeItem(productId);
          return;
        }

        set(state => ({
          items: state.items.map(item =>
            item.productId === productId ? { ...item, quantity } : item
          ),
        }));
      },

      clearCart: () => {
        set({ items: [] });
      },

      toggleCart: () => {
        set(state => ({ isOpen: !state.isOpen }));
      },

      openCart: () => {
        set({ isOpen: true });
      },

      closeCart: () => {
        set({ isOpen: false });
      },
    }),
    {
      name: 'cart-storage',
      partialize: state => ({
        items: state.items,
        // isOpen persist qilinmaydi
      }),
    }
  )
);
