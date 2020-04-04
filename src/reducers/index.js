import { combineReducers } from 'redux';
import connectionReducer from './connection';


export default combineReducers({
  connection: connectionReducer,
});