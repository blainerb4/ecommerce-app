import { takeLatest, put, all, call } from 'redux-saga/effects';

import UserActionTypes from './user.types'

import { signInSuccess, signInFailure, signOutSuccess, signOutFailure, signUpSuccess, signUpFailure } from './user.action'
//import { googleSignInSuccess, googleSignInFailure, emailSignInSuccess, emailSignInFailure } from './user.action'

import {auth, googleProvider, createUserProfileDocument, getCurrentUser} from '../../firebase/firebase'


export function* getSnapshotFromUserAuth(userAuth, additionalData) {
    try {
    const userRef = yield call(createUserProfileDocument, userAuth, additionalData);
        const userSnapshot = yield userRef.get();
        yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }))
    } catch (error){
        yield put(signInFailure(error))
    }
}


export function* signInWithGoogle() {
    try {
        const {user} = yield auth.signInWithPopup(googleProvider);
        yield getSnapshotFromUserAuth(user)
    } catch(error){
        yield put(signInFailure(error));
    }
}
//        yield put(googleSignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }))
//        yield put(googleSignInFailure(error));

//put puts things back into our regular redux flow
//userRef.onSnapshot(snapShot => {
  //  setCurrentUser({
  //      id: snapShot.id,
  //      ...snapShot.data()
//any code we write with an api it has a chance to fail so we do try catch

export function* signInWithEmail({payload: { email, password }}) {
    try {
        const {user} = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapshotFromUserAuth(user)
    } catch (error){
        yield put(signInFailure(error))
    }
}
//reusable generator function
//        yield put(emailSignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }))
//        yield put(emailSignInFailure(error))

export function* isUserAuthenticated(){
    try{
        const userAuth = yield getCurrentUser();
        if (!userAuth) return;
        yield getSnapshotFromUserAuth(userAuth)
    } catch(error) {
        yield put(signInFailure(error))
    }
}

export function* signOut(){
    try{
        yield auth.signOut();
        yield put(signOutSuccess())
    } catch (error) {
        yield put(signOutFailure(error))
    }
}

export function* signUp ({payload: {email, password, displayName}}) {
    try {
        const { user } = yield auth.createUserWithEmailAndPassword(email, password);
        yield put(signUpSuccess({user, additionalData: {displayName} }));
        } catch(error){
            yield put(signUpFailure(error))
        }
}

export function* signInAfterSignUp ({payload: {user, additionalData} }) {
    yield getSnapshotFromUserAuth(user, additionalData)
}

//{userCredentials}
export function* onGoogleSignInStart() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
};

export function* onEmailSignInStart() {
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* onCheckUserSession() {
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* onSignOutStart(){
    yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut)
}

export function* onSignUpStart(){
    yield takeLatest(UserActionTypes.SIGN_UP_START, signUp)
}

export function* onSignUpSuccess(){
    yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp)
}

export function* userSagas(){
    yield all([
        call(onGoogleSignInStart), 
        call(onEmailSignInStart), 
        call(onCheckUserSession), 
        call(onSignOutStart),
        call(onSignUpStart),
        call(onSignUpSuccess)
    ]);
}

/*
export function* signInWithGoogle() {
    try {
        const {user} = yield auth.signInWithPopup(googleProvider);
        const userRef = yield call(createUserProfileDocument, user);
        // const userRef = await createUserProfileDocument(userAuth); same as running this function
        const userSnapshot = yield userRef.get();
        yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }))
    } catch(error){
        yield put(signInFailure(error));
    }
}


export function* signInWithEmail({payload: { email, password }}) {
    try {
        const {user} = yield auth.signInWithEmailAndPassword(email, password);
        const userRef = yield call(createUserProfileDocument, user);
        const userSnapshot = yield userRef.get();
        yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }))
    } catch (error){
        yield put(signInFailure(error))
    }
}
*/