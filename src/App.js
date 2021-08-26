import React from 'react'
import './App.css'
import Header from './Header'
import Home from './Home'
import Checkout from './Checkout'

import { Switch, Route } from 'react-router-dom'

function App() {
  return (
      <div className="app">
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route> 
          <Route exact path='/checkout'>
            <Checkout />
          </Route>
        </Switch>
      </div>
  )
}

export default App
