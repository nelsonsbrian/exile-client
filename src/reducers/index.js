import { combineReducers } from 'redux';
import connectionReducer from './connection';
import dataReducer from './data';
import settingsReducer from '../js/settings/settingsReducer';


export default combineReducers({
  connection: connectionReducer,
  data: dataReducer,
  settings: settingsReducer,
});