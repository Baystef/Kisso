import React from 'react';
import { render, screen, waitForElementToBeRemoved } from './customRender';
import App from './App';

test('renders Signup button', () => {
  const { getByText } = render(<App />);


  const buttonElement = getByText(/Sign Up/i);
  expect(buttonElement).toBeInTheDocument();
});
