import { render, screen } from '@testing-library/react'
import Hero from './Hero'

test('renders hero section', () => {
  render(<Hero />)
  const titleElement = screen.getByText('Threagile Monitoring')
  expect(titleElement).toBeInTheDocument()
})
