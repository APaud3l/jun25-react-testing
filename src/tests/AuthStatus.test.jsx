import { render, screen } from "@testing-library/react";
import React from "react";
import { AuthProvider } from "../contexts/AuthContext";
import AuthStatus from "../components/AuthStatus";

test('shows logged-out message', () => {
    // Arrange
    render(<AuthProvider><AuthStatus /></AuthProvider>)

    // Act: none

    // Assert
    expect(screen.getByText(/you are not logged in/i)).toBeInTheDocument();

    const buttonText = screen.getByRole('button', { name: /login as alice/i });
    expect(buttonText).toBeInTheDocument();
});