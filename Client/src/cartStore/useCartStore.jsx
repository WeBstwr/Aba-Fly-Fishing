// import create from "zustand";

// const useCartStore = create((set) => ({
//   cart: [],
//   addToCart: (item) => set((state) => ({ cart: [...state.cart, item] })),
//   removeFromCart: (itemName) =>
//     set((state) => ({
//       cart: state.cart.filter((item) => item.name !== itemName),
//     })),
// }));

// export default useCartStore;

import create from "zustand";
import axios from "axios";
import { apiBase } from "../utils/config.js";

const useCartStore = create((set) => ({
  cart: [],
  fetchCart: async () => {
    try {
      const response = await axios.get(`${apiBase}/api/cart`, {
        withCredentials: true,
      });
      set({ cart: response.data.data });
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  },
  addToCart: (item) => set((state) => ({ cart: [...state.cart, item] })),
  removeFromCart: (itemName) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.name !== itemName),
    })),
}));

export default useCartStore;
