// Set up your root reducer here...
 import { combineReducers } from 'redux';
 import { routerReducer } from 'react-router-redux';
 import songsReducer from './songsReducer'

 const rootReducer = combineReducers({
   songs: songsReducer,
   routing: routerReducer
 });

 export default rootReducer;