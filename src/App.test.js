import { screen } from '@testing-library/react';
import { render } from './utils/render';
import App from './App';

test('renders Little Lemon text', () => {
  render(<App />);
  const linkElement = screen.getByRole('heading', { name: /Little Lemon/i });
  expect(linkElement).toBeInTheDocument();
});
