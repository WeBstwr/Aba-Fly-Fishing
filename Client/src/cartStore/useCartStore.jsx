import create from "zustand";

const useCartStore = create((set) => ({
  cart: [],
  addToCart: (item) => set((state) => ({ cart: [...state.cart, item] })),
  removeFromCart: (itemName) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.name !== itemName),
    })),
}));

export default useCartStore;
