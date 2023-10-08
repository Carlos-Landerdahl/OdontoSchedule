import { render, screen, fireEvent, waitFor, getByText } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import LoginForm from "../../../Components/Login/Index";
import { ThemeProvider } from "../../../context/ThemeContext";
import { AuthProvider } from "../../../context/AuthContext";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

describe("LoginForm test", () => {
    it("Should render inputs on screen", () => {
        render(
            <BrowserRouter>
                <AuthProvider>
                    <ThemeProvider>
                        <LoginForm />
                    </ThemeProvider>
                </AuthProvider>
            </BrowserRouter>
        )

        const inputUser = screen.getByPlaceholderText("Usuario");
        const inputPassword = screen.getByPlaceholderText("Senha");

        expect(inputUser).toBeVisible();
        expect(inputPassword).toBeVisible();
    })
    it("Should typeInput, buttonEvent", async () => {
        render(
            <BrowserRouter>
                <AuthProvider>
                    <ThemeProvider>
                        <LoginForm />
                    </ThemeProvider>
                </AuthProvider>
            </BrowserRouter>
        )

        const inputUser = screen.getByPlaceholderText("Usuario");
        const inputPassword = screen.getByPlaceholderText("Senha");
        const buttonLogin = screen.getByText("Login");

        userEvent.type(inputUser, 'dentistaAdmin')
        userEvent.type(inputPassword, 'admin123')

        await waitFor(() => {
            const loginProcess = fireEvent.click(buttonLogin)
        })

        await waitFor(() => {
            expect(window.location.pathname).toBe("/home");  
          })
    })
})