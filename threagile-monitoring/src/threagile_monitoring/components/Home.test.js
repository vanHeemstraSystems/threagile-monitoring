import { render, screen } from '@testing-library/react'
import Home from './Home'

test('renders home page title', () => {
  render(<Home />)
  const titleElement = screen.getByText('Threagile Monitoring')
  expect(titleElement).toBeInTheDocument()
})