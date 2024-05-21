import ThemeController from "@src/simple-components/ThemeController";
import { useDarkTheme } from "@src/stores/dark-theme-store";

const NavBar = () => {
  const { isDarkTheme, toggleDarkTheme } = useDarkTheme();

  return (
    <div className="w-full h-[8%] p-5 flex justify-end items-center">
      <ThemeController
        isDarkTheme={isDarkTheme}
        handleClick={toggleDarkTheme}
      />
    </div>
  );
};

export default NavBar;
