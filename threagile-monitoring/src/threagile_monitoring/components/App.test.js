import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('renders dashboard', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const dashboardElement = screen.getByText(/Critical Risks/i);
  expect(dashboardElement).toBeInTheDocument();
});
