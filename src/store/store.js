import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers/root_reducer';
import promise from 'redux-promise';

const logger = createLogger();

const store = createStore(rootReducer,
    {},
    compose(applyMiddleware(
        thunkMiddleware,
        logger,
        promise
        ), window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);
window.store = store;
export default store;