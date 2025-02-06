import { render, screen, within } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import routes from './routes';

beforeAll(() => {
  // Silence React Router deprecation warnings in tests
  jest.spyOn(console, 'warn').mockImplementation(() => {});
});

afterAll(() => {
  jest.restoreAllMocks();
});

test('renders app title', async () => {
  const router = createMemoryRouter(routes, {
    initialEntries: ['/'],
    initialIndex: 0,
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
      v7_prependBasename: true
    }
  });

  render(<RouterProvider router={router} />);
  const header = screen.getByRole('banner');
  const titleElement = within(header).getByRole('heading', { 
    name: 'Threagile Monitoring',
    level: 1 
  });
  expect(titleElement).toBeInTheDocument();
});
