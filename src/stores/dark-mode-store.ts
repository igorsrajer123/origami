import { create } from "zustand";

interface IDarkMode {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export const useDarkMode = create<IDarkMode>((set) => ({
  isDarkMode: false,
  toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
}));
