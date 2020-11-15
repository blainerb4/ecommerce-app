import { clearItemFromCart } from './cart.action';
import CartActionTypes from './cart.types'
import { addItemToCart, removeItemFromCart } from './cart.utils'

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
        case CartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }
        case CartActionTypes.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(
                    cartItem => cartItem.id != action.payload.id)
            };
            case CartActionTypes.CLEAR_CART:
                return {
                    ...state,
                    cartItems: []
                };
        default:
            return state;
    }
}

export default cartReducer
// if cartitem id is not equal to item we are trying to filter return true
//we want to keep the item when the id is not the one we want to clear out
//add all items in the array them wahtever is after will add add the end of the array
// with payload cartItems: [...state.cartItems, action.payload]
//cart componnent will either be in a true or false stage either hidden or not
//therefore hidden : !state.hidden (meaning whatever state.hidden is we want the opposite)
//                 cartItems: [...state.cartItems, action.payload]
