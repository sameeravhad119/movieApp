import { createStore, compose, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';

import rootSaga from '../sagas';
import reducers from './reducers';
import history from "../lib/history";

const sagaMiddleware = createSagaMiddleware();

const logger = createLogger({
    prdicate: (getState, action) => process.env.NODE_ENV
})

const connectedRouterMiddleware = routerMiddleware(history);

export default function configureStore(initialState) {
    const middlewares = [
        logger,
        sagaMiddleware,
        connectedRouterMiddleware
    ]

    let enhancers = [applyMiddleware(...middlewares)];

    if (window.__REDUX_DEVTOOLS_EXTENSION__) {
        enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__());
    }

    const store = createStore(
        reducers,
        initialState,
        compose(...enhancers)
    )

    sagaMiddleware.run(rootSaga);
    store.asyncReducers = {};

    return store;
}