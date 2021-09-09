import React, { useState, useEffect } from 'react'
import CheckoutProduct from './CheckoutProduct'
import './Payment.css'
import { useStateValue } from './StateProvider'
import { Link } from 'react-router-dom'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { getBasketTotal } from './reducer'
import CurrencyFormat from 'react-currency-format'
//import 

function Payment() {
    const [ { basket, user }, dispatch ] = useStateValue()

    const stripe = useStripe()
    const elements = useElements()

    const [processing, setProcessing] = useState('')
    const [succeeded, setSucceeded] = useState(false)
    const [error, setError] = useState(null)
    const [disabled, setDisabled] = useState(true)
    const [clientSecret, setClientSecret] = useState(true)

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        //generate the stripe secret
        const getClientSecret = async () => {
            const response = await axios
            //axios is a way of making requests

        }
    }, [basket])
    

    const handleSubmit = e => {
        //stripe logic
        //async function
        e.preventDefault()
        setProcessing(true)
        //diabling button
        //const payload = await stripe 


    }
    
    const handleChange = e => {
        //listening for changes and display errors in card details
        setDisabled(e.empty)
        setError(e.error ? e.error.message : '')
    }

    return (
        <div className='payment'>
            <div className='payment__container'>
                <h1>Checkout (
                    <Link to='/checkout'>{basket?.length} items</Link>)  
                </h1>
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment__address'>
                        <p>{user?.email}</p>
                        <p>address line 1</p>
                        <p>address line 2</p>
                    </div>

                </div>
           
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className='payment__items'>
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

                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Payment Method</h3>
                    </div>
                    <div className='payment__details'>
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />

                            <div className='payment__priceContainer'>
                                <CurrencyFormat 
                                    renderText={(value) => (
                                        <h3>Order Total: {value}</h3>
                
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)} 
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={'$'}
                                />
                                <button disabled={ processing || disabled || succeeded } >
                                    <span>{processing ? <p>Processing</p> : 'Buy Now'}</span>
                                </button>
                            </div>
                            {/* Error handling  shows error in div*/}
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
