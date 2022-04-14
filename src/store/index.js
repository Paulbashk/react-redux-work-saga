import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootWatcher from '../saga';
import { countReducer } from './countReducer';
import { usersReducer } from './usersReducer';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  countReducer,
  usersReducer
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootWatcher);

export default store;
