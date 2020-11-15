import {all, call} from 'redux-saga/effects';

import { shopSagas } from './shop/shop.sagas';
//import { fetchCollectionsStart } from './shop/shop.sagas';

import { userSagas } from './user/user.sagas'
import {cartSagas} from './cart/cart.sagas'
export default function* rootSaga(){
    yield all([call(shopSagas), call(userSagas), call(cartSagas)])
}
//    yield all([call(fetchCollectionsStart), call(userSagas), call(cartSagas)])

//we are able to call any number of sagas inside the array 
//and intiilize them all on separate tasks streams like takeevery