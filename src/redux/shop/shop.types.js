const ShopActionTypes = {
    FETCH_COLLECTIONS_START: 'FETCH_COLLECTIONS_START',
    FETCH_COLLECTIONS_SUCCESS: 'FETCH_COLLECTIONS_SUCCESS',
    FETCH_COLLECTIONS_FAILURE: 'FETCH_COLLECTIONS_FAILURE'
}

export default ShopActionTypes;
//what tells redux we are fetching the data first api call to firestore
//when it comes back to us with a successful api request
//when our server is down or internet connection down
//const ShopActionTypes = {
//    UPDATE_COLLECTIONS: 'UPDATE_COLLECTIONS'
//}