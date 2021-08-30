import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'


function Login() {
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
                    <input type='text'/>

                    <h5>Password:</h5>
                    <input type='password'/>

                    <button className='login__signInButton'>Sign In</button>
                </form>
                <p>By signing-in you agree & accept the ECOMMERCE WEBSITE Conditions of Use & Sale.</p>

                <button className='login__registerButton'>Create Account</button>

            </div>
        </div>
    )
}

export default Login
