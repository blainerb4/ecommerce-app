import { createStore, applyMiddleware } from 'redux';

import { persistStore } from 'redux-persist'

import logger from 'redux-logger';

import rootReducer from './root-reducer';

import thunk from 'redux-thunk';

const middlewares = [thunk];
//const middlewares = [logger];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger)
}
//to make sure the logger is only applied in development environment
//we set environment variable by process.env and node env is a property on the processenv
// in development, production or test
//when we run npm build, we switch node variable into production
// only local server sets to development
//if the node environment is development we want to push the logger in the array
//if it is anything else(production, test) we do not want it
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store)
//we're creating a persisted version of our store that saves session
export default {store, persistor};