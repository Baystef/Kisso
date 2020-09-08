import React from 'react';
import { render, screen } from './customRender';
import Signup from './components/Signup';

test('Signup page', () => {
  const { getByText } = render(<Signup />)

  const labelElement = getByText(/job/i)
  expect(labelElement).toBeInTheDocument()
  expect(screen.getByText(/password/i)).toBeInTheDocument()
  expect(screen.getByText(/Firstname/i)).toBeInTheDocument()
  expect(screen.getByText(/Lastname/i)).toBeInTheDocument()
});