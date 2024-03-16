import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from './Login';


test('render Login button', () => {
  render(<Login />);
 
  expect(screen.getByRole('textbox')).toBeInTheDocument();
  expect(screen.getByRole('button')).toBeInTheDocument();
});

