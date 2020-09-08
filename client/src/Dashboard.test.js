import React from 'react';
import { render, screen } from './customRender';
import Dashboard from './components/Dashboard';


test('Dashboard', () => {
  const { getByText } = render(<Dashboard />)

  const labelElement = getByText(/Admin/i)
  expect(labelElement).toBeInTheDocument()
  expect(screen.getByText(/Profile/i)).toBeInTheDocument()
});