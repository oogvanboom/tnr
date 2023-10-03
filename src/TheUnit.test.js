import { render, screen } from '@testing-library/react';
import TheUnit from './TheUnit';

test('renders learn react link', () => {
  render(<TheUnit />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toNotBeInTheDocument();
});
