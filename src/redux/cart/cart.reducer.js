import CartActionTypes from './cart.types'

const INITIAL_STATE = {
    hidden: true
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        default:
            return state;
    }
}

export default cartReducer

//cart componnent will either be in a true or false stage either hidden or not
//therefore hidden : !state.hidden (meaning whatever state.hidden is we want the opposite)