import { render, screen } from "@testing-library/react";
import React from "react";
import { AuthProvider } from "../contexts/AuthContext";
import AuthStatus from "../components/AuthStatus";
import userEvent from "@testing-library/user-event";
import App from "../App";

function renderWithAuth(ui){
    return render(<AuthProvider>{ui}</AuthProvider>)
}

test('shows logged-out message', () => {
    // Arrange
    // render(<AuthProvider><AuthStatus /></AuthProvider>)
    renderWithAuth(<AuthStatus />)

    // Act: none

    // Assert
    expect(screen.getByText(/you are not logged in/i)).toBeInTheDocument();

    const buttonText = screen.getByRole('button', { name: /login as alice/i });
    expect(buttonText).toBeInTheDocument();
});

test('logs in and logs out via context', async () => {
    // Arrange
    // renderWithAuth(<AuthStatus />)
    renderWithAuth(<App />)
    const user = userEvent.setup();
    console.log('is it here?');
    // Find the login button
    const loginButton = screen.getByRole('button', { name: /login as alice/i });
    
    // Act 1: login
    await user.click(loginButton);

    // Assert 1: Welcome message and logout button
    // expect().matchers()
    expect(screen.getByText(/welcome, alice/i)).toBeInTheDocument();

    // Find the logout button
    const logoutButton = screen.getByRole('button', { name: /logout/i });

    // Act 2: logout
    await user.click(logoutButton);

    // Assert 2: back to logged out view
    expect(screen.getByText(/you are not logged in/i)).toBeInTheDocument();
});