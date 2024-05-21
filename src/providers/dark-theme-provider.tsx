import { useDarkTheme } from "@src/stores/dark-theme-store";
import clsx from "clsx";

interface IDarkThemeProviderProps {
  children: React.ReactNode;
}
const DarkThemeProvider = ({ children }: IDarkThemeProviderProps) => {
  const { isDarkTheme } = useDarkTheme();

  return (
    <div
      className={clsx(
        {
          dark: isDarkTheme,
        },
        "bg-white dark:bg-dark-900"
      )}
    >
      {children}
    </div>
  );
};

export default DarkThemeProvider;
