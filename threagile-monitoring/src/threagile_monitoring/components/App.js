import React from 'react'
import { Routes, Route, Switch } from 'react-router-dom'
import Layout from './Layout'
import NoMatch from './NoMatch'

const App = () => {
  return (
    <>
      <Routes>
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
      </Routes>
    </>
  )
}

export default App
