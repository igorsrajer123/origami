import MoonIcon from "@src/icons/moon-icon";
import SunIcon from "@src/icons/sun-icon";
import { useDarkTheme } from "@src/stores/dark-theme-store";
import clsx from "clsx";

const ThemeController = () => {
  const { isDarkTheme, toggleDarkTheme } = useDarkTheme();

  console.log(isDarkTheme);

  return (
    <label
      className={clsx(
        "swap swap-rotate p-1 rounded-3xl shadow-xl",
        isDarkTheme ? "bg-white" : "bg-dark-900"
      )}
    >
      <input
        type="checkbox"
        className="theme-controller"
        value="synthwave"
        onClick={toggleDarkTheme}
      />

      <MoonIcon width={35} height={35} color="#fff" showIcon={!isDarkTheme} />
      <SunIcon width={35} height={35} color="#f0f0f0f" showIcon={isDarkTheme} />
    </label>
  );
};

export default ThemeController;
