
// Necessary imports
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from '../components/Counter';

// test cases
test('shows the initial count', () => {
    // Arrange: Render the Counter component
    render(<Counter />);

    // Act: nothing to do

    // Assert: Check if the "0" is on the screen
    const countText = screen.getByText(/Count: 0/i);
    expect(countText).toBeInTheDocument();
});

test('increments the count when "Increment" is clicked', async () => {
    // Arrange: Render the Counter component
    render(<Counter />)

    const user = userEvent.setup();

    // Act: Find the "Increment" button
    const incrementButton = screen.getByRole('button', { name: /increment/i });
    // Click it
    await user.click(incrementButton);

    // Assert: Check if "Count: 1" is in the Document
    expect(screen.getByText(/Count: 1/i)).toBeInTheDocument();
});

test('decrements the count when "Decrement" is clicked', async () => {
    // Arrange: Render the Counter component
    render(<Counter />)

    const user = userEvent.setup();

    // Act: Find the "Decrement" button
    const decrementButton = screen.getByRole('button', { name: /decrement/i });
    // Click it
    await user.click(decrementButton);

    // Assert: Check if "Count: 1" is in the Document
    expect(screen.getByText(/Count: -1/i)).toBeInTheDocument();
});