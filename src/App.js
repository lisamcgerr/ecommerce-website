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
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

const promise = loadStripe('pk_test_51JXqXUH6myHdM06N0pPqE5GGUb2SqAHboNdolxPEJw7OPHtWPeFKBQwv8HRPqqvqfCNqeN3Ioa1HAlolKbGGQdAU00DcvKz1o1')

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
            <Elements stripe={promise} >
              <Payment />
            </Elements>
          </Route>
        </Switch>
      </div>
  )
}

export default App
