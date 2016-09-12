import { createStore, applyMiddleware, compose } from 'redux'
import { electronEnhancer } from 'redux-electron-store'
import reducers from './reducers'
import thunk from 'redux-thunk';

let enhancer = compose(
  applyMiddleware(thunk),
  electronEnhancer(true),
);

export default createStore(reducers, {}, enhancer);