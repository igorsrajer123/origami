//COMPONENTS
import DarkThemeProvider from "@src/providers/dark-theme-provider";
import NavBar from "@src/navigation/nav-bar";
import Button from "@src/simple-components/button";
//STYLES
import "@src/index.css";

function App() {
  return (
    <DarkThemeProvider>
      <NavBar />

      <Button variant="primary" onClick={() => {}}>
        Kreiraj novi nalog
      </Button>
    </DarkThemeProvider>
  );
}

export default App;
