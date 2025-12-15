import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import ToDo from '../components/ToDo';

test('shows the ToDo label', () => {
    // Arrange
    render(<ToDo label="Buy eggs" />)

    // Act: None

    // Assert: Label is visible
    // Option 1: Get it by text
    const labelText = screen.getByText(/buy eggs/i);
    expect(labelText).toBeInTheDocument();

    // Option 2: by role + name
    const checkbox = screen.getByRole('checkbox', { name: /buy eggs/i});
    expect(checkbox).toBeInTheDocument();
});

test('toggles completion when checkbox is clicked', async () => {
    // Arrange
    render(<ToDo label="buy eggs" />);
    const user = userEvent.setup();

    const checkbox = screen.getByRole('checkbox', { name: /buy eggs/i});
    const labelText = screen.getByText(/buy eggs/i);

    // Act
    await user.click(checkbox);

    // Assert
    expect(labelText).toHaveStyle({ textDecoration: 'line-through' });

    // Act
    await user.click(checkbox);

    // Assert
    expect(labelText).toHaveStyle({ textDecoration: 'none' });
})