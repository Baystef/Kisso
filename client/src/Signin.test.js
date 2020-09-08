import React from 'react';
import { render, screen, waitForElementToBeRemoved } from './customRender';
import Signin from './components/Signin';

test('signin page', () => {
  const { getByText } = render(<Signin />)

  const labelElement = getByText(/Email/i)
  expect(labelElement).toBeInTheDocument()
});