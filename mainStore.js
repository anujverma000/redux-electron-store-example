import { createStore, applyMiddleware, compose } from 'redux';
import { electronEnhancer } from 'redux-electron-store';
import reducers from './reducers';
import thunk from 'redux-thunk';

let enhancer = compose(
  applyMiddleware(thunk),
  electronEnhancer()
);
let defaultStore = {
    notificationWindow: {
        open: false
    }
}
export default createStore(reducers, defaultStore, enhancer);