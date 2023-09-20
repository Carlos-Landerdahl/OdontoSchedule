import { BrowserRouter } from "react-router-dom";
import { RoutesApp } from "./routes";

function App() {
  return (
    <BrowserRouter>
      <div className={`app light}`}>
        <RoutesApp />
      </div>
    </BrowserRouter>
  );
}

export default App;
