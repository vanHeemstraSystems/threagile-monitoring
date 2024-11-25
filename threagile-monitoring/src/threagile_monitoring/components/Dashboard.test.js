import { render, screen } from '@testing-library/react';
import Dashboard from './Dashboard';

test('renders learn react link', () => {
  render(<Dashboard />);
  const textElement = screen.getByText(/Security Risk Dashboard/i);
  expect(textElement).toBeInTheDocument();
});
