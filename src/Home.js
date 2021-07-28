import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className='home'>
            <div className='home__container'>
                <img 
                className='home__image' 
                src='https://user-images.githubusercontent.com/73184313/127373370-a925e758-eba5-461f-834e-2fe14498a6e1.jpg ' 
                alt = 'grey paint background' />
                <div className='home__row'>
                    <Product />
                    {/* Product */}
                </div>
                <div className='home__row'>
                    {/* Product */}
                    {/* Product */}
                    {/* Product */}
                </div>
                <div className='home__row'>
                    {/* Product */}
                </div>
            </div>
        </div>
    )
}

export default Home

