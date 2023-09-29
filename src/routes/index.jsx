import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Detail from "../pages/Detail";
import { DefaultLayout } from "../layouts/DefaultLayout";
import { ThemeProvider } from "../context/ThemeContext";

export function RoutesApp() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dentista/:id" element={<Detail />} />
          </Route>
        </Routes>
        </ThemeProvider>
    </BrowserRouter>
  );
}
