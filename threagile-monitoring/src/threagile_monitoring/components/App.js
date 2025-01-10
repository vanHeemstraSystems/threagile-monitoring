import React from 'react'
import { Route, Routes } from 'react-router'
import Layout from './Layout'
import NoMatch from './NoMatch'

// In react-router-dom v6, "Switch" is replaced by routes "Routes". You need to update the import from

// import { Switch, Route } from "react-router-dom";
// to
// import { Routes ,Route } from 'react-router-dom';

// You also need to update the Route declaration from

// <Route path="/" component={Home} />
// to
// <Route path='/welcome' element={<Home/>} />
  
// In react-router-dom, you also do not need to use the exact in the Route declaration.

// For more information, you can visit the official documentation:
// https://reactrouter.com/docs/en/v6/upgrading/v5

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path='/'>
          <Layout showHome />
        </Route>
        <Route path='/dashboards'>
          <Layout showDashboard />
        </Route>
        <Route path='*'>
          <NoMatch />
        </Route>
      </Routes>
    </>
  )
}

export default App