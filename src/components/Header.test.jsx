import { screen } from '@testing-library/react';
import Header from './Header';
import { render } from '../utils/render';

test('renders nav links', () => {
  render(<Header />);
  const home = screen.getByText(/HOME/i);
  expect(home).toBeInTheDocument();
  const menu = screen.getByText(/MENU/i);
  expect(menu).toBeInTheDocument();
  const contact = screen.getByText(/CONTACT US/i);
  expect(contact).toBeInTheDocument();
});
