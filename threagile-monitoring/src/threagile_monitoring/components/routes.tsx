import Layout from './Layout'
import Home from './Home'
import Dashboard from './Dashboard'
import NoMatch from './NoMatch'

const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'dashboard',
        element: <Dashboard />
      },
      {
        path: '*',
        element: <NoMatch />
      }
    ]
  }
]

export default routes 