import React from 'react'

import './CheckoutItem.scss'

const CheckoutItem = ({ cartItem: {name, imageUrl, price, quantity} }) => (
    <div className='checkout-item'>
        <div className='image-container'>
        <img src={imageUrl} alt='item' />
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>{quantity}</span>
        <span className='price'>{price}</span>
        <div className='remove-button'>&#10005;</div>
    </div>
)
export default CheckoutItem
//utf-8 (standard most browswers have language that browswer understands)
// &#10005 - browser aware of tgus