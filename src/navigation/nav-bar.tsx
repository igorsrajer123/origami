import clsx from "clsx";
//COMPONENTS
import ThemeController from "@src/simple-components/theme-controller";
//STORES
import { useDarkTheme } from "@src/stores/dark-theme-store";

const NavBar = () => {
  const { isDarkTheme } = useDarkTheme();

  return (
    <div
      className={clsx(
        "w-3/4 h-[8%] p-5 flex justify-end items-center shadow-2xl rounded-xl",
        isDarkTheme ? "dark-glass" : "light-glass"
      )}
    >
      <ThemeController />
    </div>
  );
};

export default NavBar;
