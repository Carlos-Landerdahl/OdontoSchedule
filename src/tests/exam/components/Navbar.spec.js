import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../../../Components/NavBar/Index";
import { ThemeProvider } from "../../../context/ThemeContext";
import { AuthProvider } from "../../../context/AuthContext";
import "@testing-library/jest-dom";

describe("Navbar test", () => {
  test("Botão de login redirecionando para a rota '/'", () => {
    render(
      <BrowserRouter>
        <AuthProvider>
          <ThemeProvider>
            <Navbar />
          </ThemeProvider>
        </AuthProvider>
      </BrowserRouter>
    );

    const loginButton = screen.getByText("Login");

    fireEvent.click(loginButton);
    expect(window.location.pathname).toBe("/");
  });

  test("Botão darkmode sendo renderizado corretamente", () => {
    render(
      <BrowserRouter>
        <AuthProvider>
          <ThemeProvider>
            <Navbar />
          </ThemeProvider>
        </AuthProvider>
      </BrowserRouter>
    );

    const loginButton = screen.getByText("Login");

    fireEvent.click(loginButton);
    expect(window.location.pathname).toBe("/");
  });

  test("Botão para abrir menu no modo mobile", () => {
    render(
      <BrowserRouter>
        <AuthProvider>
          <ThemeProvider>
            <Navbar />
          </ThemeProvider>
        </AuthProvider>
      </BrowserRouter>
    );

    const mobileMenuButton = screen.getByRole("button", { name: /Toggle navigation/i });
    expect(mobileMenuButton).toBeInTheDocument();

    fireEvent.click(mobileMenuButton);

    expect(screen.getByText("Login")).toBeVisible();
  });
});
