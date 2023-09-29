import { RoutesApp } from "./routes";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
      <ThemeProvider>
        <RoutesApp />
      </ThemeProvider>
  );
}


export default App;
