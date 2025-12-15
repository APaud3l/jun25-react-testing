
// Necessary imports
import React from 'react';
import { render, screen } from '@testing-library/react';
import Counter from '../components/Counter';

// test cases
test('shows the initial count', () => {
    // Arrange: Render the Counter component
    render(<Counter />);

    // Act: nothing to do

    // Assert: Check if the "0" is on the screen
    const countText = screen.getByText(/Count: 0/i);
    expect(countText).toBeInTheDocument();
})