import React,  { useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import { auth } from './firebase'


function Login() {

    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const signIn = e => {
        e.preventDefault()
        auth 
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))


    }

    const register = e => {
        e.preventDefault()
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // it successfully created a new user with email and password
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img 
                className='login__logo' 
                src='https://user-images.githubusercontent.com/73184313/127357168-a7ff7bd7-6ddd-489f-bf13-e43e764118b2.png' 
                alt='ecommerce website logo'/>
            </Link>
            <div className='login__container'>
                <h1>Sign In</h1>
                <form>
                    <h5>Email:</h5>
                    <input 
                        type='text'
                        value={email} 
                        onChange={e => setEmail(e.target.value)} 
                    />

                    <h5>Password:</h5>
                    <input 
                        type='password'
                        value={password}
                        onChange={e=> setPassword(e.target.value)}
                    />

                    <button 
                        className='login__signInButton'
                        type='submit'
                        onClick={signIn}
                    >Sign In</button>
                </form>
                <p>By signing-in you agree & accept the ECOMMERCE WEBSITE Conditions of Use & Sale.</p>

                <button 
                    className='login__registerButton'
                    onClick={register}
                >Create Account</button>

            </div>
        </div>
    )
}

export default Login
