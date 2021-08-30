import React from 'react'
import './App.css'
import Header from './Header'
import Home from './Home'
import Checkout from './Checkout'
import { Switch, Route } from 'react-router-dom'
import Login from './Login'

function App() {
  return (
      <div className="app">
        
        <Switch>
          <Route exact path='/login'> 
            <Login/>
          </Route>
          <Route exact path='/'>
            <Header />
            <Home />
          </Route> 
          <Route exact path='/checkout'>
            <Header />
            <Checkout />
          </Route>
        </Switch>
      </div>
  )
}

export default App
