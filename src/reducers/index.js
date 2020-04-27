import { combineReducers } from 'redux';
import connectionReducer from './connection';
import dataReducer from './data';
import settingsReducer from '../js/settings/settingsReducer';
import questReducer from '../js/quests/questReducer.js';
import characterReducer from '../js/character/characterReducer';


export default combineReducers({
  connection: connectionReducer,
  data: dataReducer,
  settings: settingsReducer,
  quests: questReducer,
  character: characterReducer,
});