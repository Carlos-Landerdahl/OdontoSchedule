import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../../../Components/NavBar/Index";
import { ThemeProvider } from "../../../context/ThemeContext";
import { AuthProvider } from "../../../context/AuthContext";
import "@testing-library/jest-dom";

describe("Navbar test", () => {
  it("Login button redirecting to route '/'", () => {
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

  it("Dark Mode button rendering correctly", () => {
    render(
      <BrowserRouter>
        <AuthProvider>
          <ThemeProvider>
            <Navbar />
          </ThemeProvider>
        </AuthProvider>
      </BrowserRouter>
    );

    const themeToggleButton = screen.getByTestId("toggleDarkMode");
    expect(themeToggleButton).toBeInTheDocument();
  });

  it("Button to open menu in mobile mode", () => {
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
