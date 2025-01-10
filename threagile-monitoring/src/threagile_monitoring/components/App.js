import { React, Router, Route, Switch } from 'react'

function App () {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/' component={() => <Layout showHome />} />
          <Route
            exact
            path='/dashboards'
            component={() => <Layout showDashboard />}
          />
        </Switch>
      </Router>
    </div>
  )
}

export default App
