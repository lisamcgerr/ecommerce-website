import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'

function Subtotal() {
    return (
        <div className='subtotal'>
            <CurrencyFormat 
                renderText={(value) => (
                    <>
                        <p>
                            {/* value needs to be updated */}
                            Subtotal (0 items): <strong>0</strong>
                        </p>
                        <small className='subtotal__gift'>
                            <input type='checkbox' /> 
                            This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={0} //input value
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
            /> 
           <button>Proceed to Checkout</button> 
        </div>
    )
}

export default Subtotal
