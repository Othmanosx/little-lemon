import { screen } from '@testing-library/react';
import { render } from './utils/render';
import App from './App';

test('renders Little Lemon text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Little Lemon/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Reserve a table button', () => {
  render(<App />);
  const linkElement = screen.getByText(/Little Lemon/i);
  expect(linkElement).toBeInTheDocument();
});
