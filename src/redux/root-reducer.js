import { combineReducers } from 'redux';

import { persistReducer } from 'redux-persist'

import storage from 'redux-persist/lib/storage'
//get local storage object from windows browser or we can do session storage

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer'
import shopReducer from './shop/shop.reducer'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}
//key what point of user object we want to start storing, storage goes to sotrage
//whitelist property an array containing string names of the reducers we want to store
//we want to persist cart because firebase persist/stores users
//only thing we want to persist is the cart

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
})

export default persistReducer(persistConfig, rootReducer)

//modified version of root reducer with persist config on top