import React from 'react';
import { getAllByDisplayValue, getByRole, render, screen } from '@testing-library/react';
import NavigationBar from './NavigationBar';

test('render Nav bar content', () => {
  const{getByText,getAllByRole} =render(<NavigationBar user={null}/>);
 
  getByRole("Link")
});

