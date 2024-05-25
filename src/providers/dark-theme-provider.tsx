import clsx from "clsx";
//STORES
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
        "theme-provider h-full"
      )}
    >
      {children}
    </div>
  );
};

export default DarkThemeProvider;
