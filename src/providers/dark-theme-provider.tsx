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
        "theme-provider h-full w-full p-[35px] flex flex-col items-center gap-[25px]",
        "bg-red-400 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10"
      )}
    >
      {children}
    </div>
  );
};

export default DarkThemeProvider;
