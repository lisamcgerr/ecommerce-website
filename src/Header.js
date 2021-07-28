 import React from 'react'
 import './Header.css'
 import SearchIcon from '@material-ui/icons/Search'
 import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
 
 function Header() {
     return (
         <div className='header'>
             <img className='header__logo' src='https://user-images.githubusercontent.com/73184313/127357168-a7ff7bd7-6ddd-489f-bf13-e43e764118b2.png' alt='ecommerce website logo' />
             <div className='header__search'>
                <input className='header__searchInput' type='text' ></input>
                <SearchIcon className='header__searchIcon' />
                
             </div>
             <div className='header__nav'>
                <div className='header__option'>
                    <span className='header__optionLineOne'>Hello Guest</span>
                    <span className='header__optionLineTwo'>Sign In</span>                    
                </div>

                <div className='header__option'>
                    <span className='header__optionLineOne'>Returns</span>
                    <span className='header__optionLineTwo'>& Orders</span>
                </div>

                <div className='header__option'>
                    <span className='header__optionLineOne'>Your</span>
                    <span className='header__optionLineTwo'>Account</span>
                </div>

                <div className='header__optionBasket'>
                    <ShoppingBasketIcon className='' />
                    <span className='header__optionLineTwo header__basketCount'>0</span>
                </div>

             </div>
         </div>
     )
 }
 
 export default Header
 