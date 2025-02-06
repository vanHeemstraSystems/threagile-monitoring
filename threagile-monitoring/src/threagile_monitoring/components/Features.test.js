import { render, screen } from '@testing-library/react'
import Features from './Features'

test('renders Features section', () => {
  render(<Features />)
  const titleElement = screen.getByText('Key Features')
  expect(titleElement).toBeInTheDocument()
})
