import clsx from "clsx";
import { useDarkTheme } from "@src/stores/dark-theme-store";

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
        "theme-provider h-full bg-white dark:bg-dark-900"
      )}
    >
      {children}
    </div>
  );
};

export default DarkThemeProvider;
