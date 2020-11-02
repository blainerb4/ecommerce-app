import { createSelector } from 'reselect'

const selectCart = state => state.cart;

//input selector const selectCart = state => state.cart;
//gets the whole state and returns a slice of it

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
)

export const selectCartItemsCount = createSelector (
    [selectCartItems],
    cartItems => cartItems.reduce ((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0)
)

//we are memoizing here.
// prevent re rendering the same info
// we use selectors to break down state into smaller pieces
