import React from 'react'
import './Checkout.css'

function Checkout(){
    return (
        <div className='checkout'>
            <div className='checkout__left'>
                <img className='checkout__ad' src='https://user-images.githubusercontent.com/73184313/131029015-fa2d4214-8a04-4480-b9c7-67a3ceed3384.png' alt='grey textured background that reads created by Lisa McGerr Full Stack Web Developer' />
                    {/* add click listener to hyperlink to portfolio */}

                <div>
                    <h2 className='checkout__title'>
                    Your Shopping Basket
                    </h2>
                </div>
            </div>
            <div className='checkout__right' >
                <h2>Subtotal goes here</h2>
            </div>
        </div>
    )
}

export default Checkout