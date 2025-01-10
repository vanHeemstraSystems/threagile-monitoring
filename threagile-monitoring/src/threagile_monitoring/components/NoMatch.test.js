import { render, screen } from '@testing-library/react'
import NoMatch from './NoMatch'

test('renders No Match text', () => {
  render(<NoMatch />)
  const textElement = screen.getByText('No Match')
  expect(textElement).toBeInTheDocument()
})