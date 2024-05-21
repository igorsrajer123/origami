import DarkThemeProvider from "./providers/dark-theme-provider";
import NavBar from "@src/navigation/nav-bar";
import "@src/index.css";

function App() {
  return (
    <DarkThemeProvider>
      <NavBar />
    </DarkThemeProvider>
  );
}

export default App;
