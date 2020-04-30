import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from './reducers/auth';

const stuffToCompose = [
  applyMiddleware(thunk)
]

const reducers = combineReducers({
  auth: authReducer
})

if (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__) stuffToCompose.push(window.__REDUX_DEVTOOLS_EXTENSION__());

const configureStore = () => {
  if (window?.REDUX_STATE) {
    return createStore(
      reducers,
      window.REDUX_STATE,
      compose(...stuffToCompose)
    )
  } else {
    return createStore(
      reducers,
      compose(...stuffToCompose)
    )
  }
}

export {
  configureStore
}
