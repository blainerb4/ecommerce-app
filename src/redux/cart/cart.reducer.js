import CartActionTypes from './cart.types'
import {addItemToCart} from './cart.utils'

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        default:
            return state;
    }
}

export default cartReducer
//add all items in the array them wahtever is after will add add the end of the array
// with payload cartItems: [...state.cartItems, action.payload]
//cart componnent will either be in a true or false stage either hidden or not
//therefore hidden : !state.hidden (meaning whatever state.hidden is we want the opposite)
//                 cartItems: [...state.cartItems, action.payload]
