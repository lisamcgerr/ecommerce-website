 import React from 'react'
 import './Header.css'
 import SearchIcon from '@material-ui/icons/Search'
 import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
 import { Link } from 'react-router-dom'
 import { useStateValue } from './StateProvider'
 import { auth } from './firebase'

 function Header() {
    const [ { basket, user } ] = useStateValue()

    const handleAuthentication = () => {
        if (user) {
            auth.signOut()
        }
    }

     return (
         <div className='header'>
             <Link to='/'>
                <img className='header__logo' src='https://user-images.githubusercontent.com/73184313/127357168-a7ff7bd7-6ddd-489f-bf13-e43e764118b2.png' alt='ecommerce website logo' />
             </Link>
             <div className='header__search'>
                <input className='header__searchInput' type='text' ></input>
                <SearchIcon className='header__searchIcon' />
                
             </div>
             <div className='header__nav'>
                <Link to={ !user && '/login' }>
                    <div onClick={handleAuthentication} className='header__option'>
                        <span className='header__optionLineOne'>Hello { !user ? 'Guest' : user.email }</span>
                        {/* optional chaining similer to a try ...catch statement */}
                        <span className='header__optionLineTwo'>{user? 'Sign Out' : 
                        'Sign In'}</span>                    
                    </div>
                </Link>

                <div className='header__option'>
                    <span className='header__optionLineOne'>Returns</span>
                    <span className='header__optionLineTwo'>& Orders</span>
                </div>

                <div className='header__option'>
                    <span className='header__optionLineOne'>Your</span>
                    <span className='header__optionLineTwo'>Account</span>
                </div>

                <Link to ='/checkout'>
                    <div className='header__optionBasket'>
                        <ShoppingBasketIcon className='' />
                        <span className='header__optionLineTwo header__basketCount'>{basket?.length}</span>
                    </div>
                </Link>
             </div>
         </div>
     )
 }
 
 export default Header
 