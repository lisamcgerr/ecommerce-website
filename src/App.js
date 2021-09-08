import React, { useEffect } from 'react'
import './App.css'
import Header from './Header'
import Home from './Home'
import Checkout from './Checkout'
import { Switch, Route } from 'react-router-dom'
import Login from './Login'
import { auth } from './firebase'
import { useStateValue } from "./StateProvider"
import Payment from './Payment'


function App() {
  const [{}, dispatch] = useStateValue()

  useEffect(() => {
    //this will only run once when the app component loads
    auth.onAuthStateChanged(authUser => {
      console.log('the user is', authUser);
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

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
          <Route>
            <Header />
            <Payment />
          </Route>
        </Switch>
      </div>
  )
}

export default App
