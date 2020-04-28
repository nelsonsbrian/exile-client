import { combineReducers } from 'redux';
import connectionReducer from '../js/connection/connectionReducer';
import dataReducer from './data';
import settingsReducer from '../js/settings/settingsReducer';
import questReducer from '../js/quests/questReducer';
import characterReducer from '../js/character/characterReducer';
import actionBarReducer from '../js/actionBar/actionBarReducer';
import combatReducer from '../js/combat/combatReducer';
import mapReducer from '../js/map/mapReducer';


export default combineReducers({
  connection: connectionReducer,
  data: dataReducer,
  settings: settingsReducer,
  quests: questReducer,
  character: characterReducer,
  combat: combatReducer,
  actionBar: actionBarReducer,
  map: mapReducer,
});