import { React, Switch } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import NoMatch from './NoMatch'

const App = () => {
  return (
    <>
      <Routes>
        <Switch>
          <Route exact path='/' element={<Layout showHome />} />
          <Route path='/dashboards' element={<Layout showDashboard />} />
          <Route path='*' component={() => <NoMatch />} />
        </Switch>
      </Routes>
    </>
  )
}

export default App
