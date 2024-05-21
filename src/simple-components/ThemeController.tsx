import MoonIcon from "@src/icons/moon-icon";
import SunIcon from "@src/icons/sun-icon";
import clsx from "clsx";

interface IThemeControllerProps {
  isDarkTheme: boolean;
  handleClick: () => void;
}

const ThemeController = ({
  isDarkTheme,
  handleClick,
}: IThemeControllerProps) => {
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
        value="default"
        onClick={handleClick}
      />

      <MoonIcon
        width={35}
        height={35}
        color={!isDarkTheme ? "white" : "dark-900"}
      />
      <SunIcon
        width={35}
        height={35}
        color={!isDarkTheme ? "white" : "dark-900"}
      />
    </label>
  );
};

export default ThemeController;
