import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'
import { getBasketTotal } from './reducer'

function Subtotal() {
    //get the basket and
    const [ { basket } ] = useStateValue()

    return (
        <div className='subtotal'>
            <CurrencyFormat 
                renderText={(value) => (
                    <>
                        <p>
                            {/* value needs to be updated */}
                            Subtotal {basket.length} items: <strong>{value}</strong>
                        </p>
                        <small className='subtotal__gift'>
                            <input type='checkbox' /> 
                            This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)} 
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
            /> 
           <button>Proceed to Checkout</button> 
        </div>
    )
}

export default Subtotal
