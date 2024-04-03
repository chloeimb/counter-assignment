// import necessary react testing library helpers here
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
// import the Counter component here
import Counter from '../components/Counter'; 

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const msg = screen.getByText(/counter/i);
  expect(msg).toBeVisible();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const countOutput = screen.getByTestId('count');
  expect(countOutput).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const add = screen.getByText('+');
  fireEvent.click(add);//1
  let countOutput = screen.getByTestId('count');
  expect(countOutput).toHaveTextContent('1'); 
  
  fireEvent.click(add); //2
  countOutput = screen.getByTestId('count');
  expect(countOutput).toHaveTextContent('2'); 
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const add = screen.getByText('+');
  fireEvent.click(add); //1
  fireEvent.click(add); //2

  const subtract = screen.getByText('-');
  fireEvent.click(subtract);//1
  let countOutput = screen.getByTestId('count');
  expect(countOutput).toHaveTextContent('1');

  fireEvent.click(subtract); //0
  countOutput = screen.getByTestId('count');
  expect(countOutput).toHaveTextContent('0');
});

