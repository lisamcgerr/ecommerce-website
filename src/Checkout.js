import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal'

function Checkout(){
    const [ { basket, user } ] = useStateValue()

    return (
        <div className='checkout'>
            <div className='checkout__left'>
                <a href='http://www.lisamcgerr.com/' target='blank'>
                    <img className='checkout__ad' src='https://user-images.githubusercontent.com/73184313/131029015-fa2d4214-8a04-4480-b9c7-67a3ceed3384.png' alt='grey textured background that reads created by Lisa McGerr Full Stack Web Developer' />
                </a> 

                <div>
                    <h3>Hello {user?.email}</h3>
                    <h2 className='checkout__title'>
                    Your Shopping Basket
                    </h2>
                    {basket.map(item => (
                        <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        />
                    ))}

                </div>
            </div>
            <div className='checkout__right' >
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout