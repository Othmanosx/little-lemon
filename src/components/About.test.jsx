import { screen } from '@testing-library/react';
import About from './About';
import { render } from '../utils/render';

test('renders nav links', () => {
  render(<About />);
  const title = screen.getByText(/Our Story/i);
  expect(title).toBeInTheDocument();
});
