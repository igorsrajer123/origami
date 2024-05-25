//ICONS
import MoonIcon from "@src/icons/moon-icon";
import SunIcon from "@src/icons/sun-icon";
//STORES
import { useDarkTheme } from "@src/stores/dark-theme-store";

const ThemeController = () => {
  const { isDarkTheme, toggleDarkTheme } = useDarkTheme();

  return (
    <label className="swap swap-rotate">
      <input
        type="checkbox"
        className="theme-controller"
        value="synthwave"
        onClick={toggleDarkTheme}
      />

      <MoonIcon
        width={35}
        height={35}
        color="#f0f0f0f"
        showIcon={!isDarkTheme}
      />
      <SunIcon width={35} height={35} color="#ffffff" showIcon={isDarkTheme} />
    </label>
  );
};

export default ThemeController;
