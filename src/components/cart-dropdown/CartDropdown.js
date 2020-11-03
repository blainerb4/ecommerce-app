import React from 'react'

import CustomButton from '../CustomButton/CustomButton'

import CartItem from '../cart-item/CartItem'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { toggleCartHidden } from '../../redux/cart/cart.action'
import { createStructuredSelector } from 'reselect'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
import './CartDropdown.scss'

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <div className='cart-dropdown'>
      <div className='cart-items' > 
      {
        cartItems.length ? 
          cartItems.map(cartItem => 
            <CartItem key={cartItem.id} item={cartItem} />
        )
       :
        <span className='empty-message'>Your cart is empty</span>}
      </div>
      <CustomButton onClick = {() => {
        history.push('/checkout');
        dispatch(toggleCartHidden())
        }}>
        GO TO CHECKOUT
        </CustomButton>  
    </div>
)
//      <CustomButton onClick = {() => history.push('/checkout')}>

//take care of empty message in cart dropdown
//if cart items array has a length > 0 
//render cart items
//if there is not any items render
//span with classname and your class is empty
// type coercsion == (checks if value of 2 equals the same)
// will try to coerce the values so they stay the same 1 == '1' true 
//or === (strict evaluation) 1=== '1' false
const mapStateToProps = createStructuredSelector ({
  cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown))

//const mapStateToProps = state => ({
 // cartItems: selectCartItems(state)
//})
//make sure cart dropdown component is not getting re rendered
//whenever the state changes that is unrelated to the cart items
//const mapStateToProps = ({ cart: {cartItems} }) => ({
 // cartItems
//})


//all of our higher order components return and take componets as arguments