import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers/index';

const token = localStorage.getItem('token') ? localStorage.getItem('token') : null;
const userInfo = localStorage.getItem('user') ? JSON.Parse(localStorage.getItem('user')) : null;
const authData = (token && userInfo) ? { token: token, user: userInfo } : null
const initialState = {
  adminAuth: { authData: authData },
}

const enhancers = []
const middleware = [thunk]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__
  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

const store = createStore(reducers, initialState, composedEnhancers)
export default store;
