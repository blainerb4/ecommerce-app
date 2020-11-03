export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
        );
    if (existingCartItem) {
        return cartItems.map(
            cartItem => cartItem.id === cartItemToAdd.id
            ? {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
        )
    }
    return [...cartItems, {...cartItemToAdd, quantity: 1}]
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    )
    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id != cartItemToRemove.id)
    }
    return cartItems.map(
        cartItem =>
        cartItem.id === cartItemToRemove.id ?
        { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    )
}
//filter keeps the values where the function returns true
//if the id is not the one we want to remove
// then we keep
// if it is we want to remove that cart item
// if the cartitemsid it will s