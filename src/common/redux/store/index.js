import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import RootReducer from '../rootreducer';

const composeEnhancers = composeWithDevTools({ trace: true });

const Store = createStore(RootReducer, composeEnhancers(applyMiddleware()));

export default Store;
