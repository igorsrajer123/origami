import NavBar from "@src/navigation/nav-bar";
import "@src/index.css";
import { useDarkMode } from "@src/stores/dark-mode-store";
import Toggle from "./simple-components/Toggle";

function App() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const toggleTheme = () => {
    toggleDarkMode();
  };

  return (
    <div className={`${isDarkMode ? "dark" : ""}`}>
      <NavBar />
      <Toggle isChecked={isDarkMode} onClick={toggleTheme} />
      <p className="font-italic text-h1">AAAAAAAAAAAAAAAA</p>
    </div>
  );
}

export default App;
