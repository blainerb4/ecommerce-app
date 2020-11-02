import React from 'react'

import CustomButton from '../CustomButton/CustomButton'

import CartItem from '../cart-item/CartItem'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import {connect} from 'react-redux'

import './CartDropdown.scss'

const CartDropdown = ({ cartItems }) => (
    <div className='cart-dropdown'>
      <div className='cart-items' > 
      {
        cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
      }
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>  
    </div>
)

const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
})
//make sure cart dropdown component is not getting re rendered
//whenever the state changes that is unrelated to the cart items
//const mapStateToProps = ({ cart: {cartItems} }) => ({
 // cartItems
//})

export default connect(mapStateToProps)(CartDropdown)