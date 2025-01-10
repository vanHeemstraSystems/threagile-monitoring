import React from 'react'
import { Route, Switch } from 'react-router'
import Layout from './Layout'
import NoMatch from './NoMatch'

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path='/'>
          <Layout showHome />
        </Route>
        <Route path='/dashboards'>
          <Layout showDashboard />
        </Route>
        <Route path='*'>
          <NoMatch />
        </Route>
      </Switch>
    </>
  )
}

export default App