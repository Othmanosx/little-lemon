import { screen } from '@testing-library/react';
import { render } from '../utils/render';
import Hero from './Hero';

test('renders Reserve a table button', () => {
  render(<Hero />);
  const home = screen.getByRole('link', { name: 'Reserve a table' });
  expect(home).toBeInTheDocument();
});
