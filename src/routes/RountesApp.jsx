import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Detail from "../pages/Detail";
import { DefaultLayout } from "../layouts/DefaultLayout";
import { ThemeProvider } from "../context/ThemeContext";
import { PrivateRoute } from "./PrivateRoutesApp";
import { AuthProvider } from "../context/AuthContext";
import PageNotFound from "../pages/404";

export function RoutesApp() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ThemeProvider>
          <Routes>
            <Route path="/" element={<DefaultLayout />}>
              <Route index element={<Login />} />
              <Route path="*" element={<PageNotFound />} />
              <Route path="/home" element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>} 
              />
              <Route path="/dentista/:id" element={
                <PrivateRoute>
                  <Detail />
                </PrivateRoute>} 
              />
            </Route>
          </Routes>
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
