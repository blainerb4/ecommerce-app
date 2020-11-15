import { takeLatest, call, put, all } from 'redux-saga/effects'
//listens to evey action of specgici type we bring in
import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase'
import {
    fetchCollectionsFailure,
    fetchCollectionsSuccess
} from './shop.action'

import ShopActionTypes from './shop.types'

//asynchronus knowledge of thunk is now saga
export function* fetchCollectionsAsync(){
    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
        yield put(fetchCollectionsSuccess(collectionsMap));
    } catch (error) {
        yield put(fetchCollectionsFailure(error.message))
    }
}
    //put dispatches out an object we expect to have type and payload(fetchcollecitons success are action generators returns those oobjects)
        //call is the effect inside generator function that invokes the method
    //take method first function/method then second argument is paramter
    //able to cancel & test
    //we want to use the call whenever we can
    //put is the saga effect for creating actions like dispatch
    //
//   dispatch(fetchCollectionsStart());
/*
    collectionRef.get()
    .then(snapshot =>{
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        dispatch (fetchCollectionsSuccess(collectionsMap));
    })
    .catch(error => dispatch(fetchCollectionsFailure(error.message)))*/


//yield control of these sagas in the libary

export function* fetchCollectionsStart() {
    yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START,
         fetchCollectionsAsync
    );
}

export function* shopSagas(){
    yield all([call(fetchCollectionsStart)])
}

//will pause whenever a specific action type we want comes in