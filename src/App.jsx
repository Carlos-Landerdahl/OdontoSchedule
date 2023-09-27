import { BrowserRouter } from "react-router-dom";
import { RoutesApp } from "./routes";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <div className={`app light`}>
          <RoutesApp />
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}


export default App;
