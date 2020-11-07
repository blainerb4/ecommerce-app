import { createStore, applyMiddleware } from 'redux';

import { persistStore } from 'redux-persist'

import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store)
//we're creating a persisted version of our store that saves session
export default {store, persistor};