import { combineReducers } from 'redux';
import actionBarReducer from '../js/actionBar/actionBarReducer';
import characterReducer from '../js/character/characterReducer';
import channelReducer from '../js/channels/channelReducer'
import combatReducer from '../js/combat/combatReducer';
import connectionReducer from '../js/connection/connectionReducer';
import effectsReducer from '../js/effects/effectsReducer';
import mapReducer from '../js/map/mapReducer';
import metadataReducer from './metadata/metadataReducer';
import questReducer from '../js/quests/questReducer';
import settingsReducer from '../js/settings/settingsReducer';


export default combineReducers({
  actionBar: actionBarReducer,
  channels: channelReducer,
  character: characterReducer,
  combat: combatReducer,
  connection: connectionReducer,
  effects: effectsReducer,
  map: mapReducer,
  metadata: metadataReducer,
  quests: questReducer,
  settings: settingsReducer,
});