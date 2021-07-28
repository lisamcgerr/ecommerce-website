 import React from 'react'
 import './Header.css'
 
 function Header() {
     return (
         <div className='header'>
             <img className='header__logo' src='https://user-images.githubusercontent.com/73184313/127357168-a7ff7bd7-6ddd-489f-bf13-e43e764118b2.png' />
             <div className='header__search'>
                <input className='header__searchInput' ></input>
                {/* Logo */}
             </div>
             <div className='header__nav'>
                <div className='header_option'>
                    <span className='header__optionLineOne'>Hello Guest</span>
                    <span className='header__optionLineTwo'>Sign In</span>                    
                </div>

                <div className='header_option'>
                    <span className='header__optionLineOne'>Returns</span>
                    <span className='header__optionLineTwo'>& Orders</span>
                </div>

                <div className='header_option'>
                    <span className='header__optionLineOne'>Your</span>
                    <span className='header__optionLineTwo'>Account</span>
                </div>
                
             </div>
         </div>
     )
 }
 
 export default Header
 