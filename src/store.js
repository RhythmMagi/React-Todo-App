import {createStore} from 'redux'
//import {composeWithDevTools} from 'redux-devtools-extension';
import reducers from './Reducers/index';
import { applyMiddleware } from 'redux';

window.__DEBUX_STORE_TRACKER__ = [];
const __DEBUX_GRAB_STORE__ = store => {
  return next => {
    return (action) => {
      window.__DEBUX_STORE_TRACKER__.push([store.getState()]);
      const output = next(action);
      console.log('[Updated Store]: ', store.getState());
      const storeVersions = window.__DEBUX_STORE_TRACKER__.length;
      window.__DEBUX_STORE_TRACKER__[storeVersions - 1].push(store.getState());
      return output;
    }
  }
}

const store = createStore(
    reducers,
    applyMiddleware(__DEBUX_GRAB_STORE__)
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;