import { screen } from '@testing-library/react';
import { render } from '../utils/render';
import Menu, { items } from './Menu';

test('renders Reserve a table button', () => {
  render(<Menu />);
  items.forEach((item) => {
    const menuItem = screen.getByText(item.title);
    expect(menuItem).toBeVisible();
  });
});
