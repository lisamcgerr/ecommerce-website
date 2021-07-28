import React from 'react'
import './Product.css'

function Product() {
    return (
        <div className='product'>
            <div className='product__info'>
                <p>Product Name</p>
                <p className='product__price'>
                    <small>$</small>
                    <strong>19.99</strong>
                </p>

                <div className='product__rating'>
                    <p>⭐️⭐️⭐️⭐️</p>
                </div>
            </div> 
            <img 
            src='https://user-images.githubusercontent.com/73184313/127376246-797c1001-b49b-4ec3-ab40-c8ecef78a89e.jpg' 
            alt='Manifest Now Bookcover' />
            <button>Add to Basket</button>
            
        </div>
    )
}

export default Product
