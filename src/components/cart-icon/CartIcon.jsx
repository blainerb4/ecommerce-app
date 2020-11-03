import React from 'react'
import { connect } from 'react-redux'
import {selectCartItemsCount} from '../../redux/cart/cart.selectors'
import { toggleCartHidden } from '../../redux/cart/cart.action'
import { createStructuredSelector } from 'reselect'


import './CartIcon.scss'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className='cart-icon' onClick = {toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{itemCount}</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector ({
    itemCount: selectCartItemsCount
})
//const mapStateToProps = state => ({
//    itemCount: selectCartItemsCount(state)
//})
//item count equal to accumulating the quantity on each of our cart items
//const mapStateToProps = ({ cart: { cartItems } }) => ({
//    itemCount: cartItems.reduce ((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0)
//})
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);