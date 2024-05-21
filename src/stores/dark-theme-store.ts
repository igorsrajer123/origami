import { create } from "zustand";

interface IDarkThemeStore {
  isDarkTheme: boolean;
  toggleDarkTheme: () => void;
}

export const useDarkTheme = create<IDarkThemeStore>((set) => {
  const darkThemeValue = localStorage.getItem("dark-theme");
  const initialIsDarkTheme = darkThemeValue
    ? JSON.parse(darkThemeValue)
    : false;

  return {
    isDarkTheme: initialIsDarkTheme,
    toggleDarkTheme: () =>
      set((state) => {
        const newIsDarkTheme = !state.isDarkTheme;
        localStorage.setItem("dark-theme", JSON.stringify(newIsDarkTheme));

        return { isDarkTheme: !state.isDarkTheme };
      }),
  };
});
