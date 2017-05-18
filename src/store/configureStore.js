import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from '../reducers'

// Logs all state changes in redux
const loggerMiddleware = createLogger();
// Allow redux dev tools to work
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Configure Store adds the middleware to our redux state
export default function configureStore(intialState) {
  return createStore(rootReducer, intialState, 
composeEnhancers(applyMiddleware(thunkMiddleware,loggerMiddleware)))
}