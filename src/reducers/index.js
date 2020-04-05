import { combineReducers } from 'redux';
import connectionReducer from './connection';
import dataReducer from './data';


export default combineReducers({
  connection: connectionReducer,
  data: dataReducer,
});