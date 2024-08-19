import create from "zustand";

const useAuthStore = create((set) => ({
  isAuthenticated: false,
  setIsAuthenticated: (authStatus) => set({ isAuthenticated: authStatus }),
}));

export default useAuthStore;
