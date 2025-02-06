import { render } from '@testing-library/react'
import Layout from './Layout'
import { MemoryRouter } from 'react-router-dom'

test('renders Layout component', () => {
  render(
    <MemoryRouter future={{
      v7_startTransition: true,
      v7_relativeSplatPath: true
    }}>
      <Layout />
    </MemoryRouter>
  )
})
