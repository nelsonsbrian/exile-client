import {
  UPDATE_MESSAGE,
  SOCKET,
  SOCKET_STATUS,
  SEND_MESSAGE,
  RECEIVE_ATTRIBUTES,
  RECEIVE_METADATA,
  RECEIVE_MAP,
  RECEIVE_EFFECTS,
  RECEIVE_SETTINGS,
  RECEIVE_COMBAT,
  UPDATE_FONTSIZE,
  RECEIVE_GROUP,
  SET_CHARACTER_PANEL,
  RECEIVE_EQUIPMENT,
  SEND_LAST_ITEM_IDENTIFY,
  RECEIVE_QUESTS,
  AUTO_CONNECT
} from './types';

export const updateMessage = newMessage => dispatch => (
  dispatch({
    type: UPDATE_MESSAGE,
    payload: newMessage
  }));

export const saveSocket = socket => dispatch => (
  dispatch({
    type: SOCKET,
    payload: socket
  }));

export const setAutoConnect = connectOption => dispatch => (
  dispatch({
    type: AUTO_CONNECT,
    payload: connectOption
  }));

export const setSocketStatus = status => dispatch => (
  dispatch({
    type: SOCKET_STATUS,
    payload: status
  }));

export const sendMessage = message => dispatch => (
  dispatch({
    type: SEND_MESSAGE,
    payload: message
  }));

export const recieveAttributes = attributes => dispatch => (
  dispatch({
    type: RECEIVE_ATTRIBUTES,
    payload: attributes
  }));

export const receiveMetadata = metadata => dispatch => (
  dispatch({
    type: RECEIVE_METADATA,
    payload: metadata
  }));

export const receiveMap = mapData => dispatch => (
  dispatch({
    type: RECEIVE_MAP,
    payload: mapData
  }));

export const receiveEffects = effects => dispatch => (
  dispatch({
    type: RECEIVE_EFFECTS,
    payload: effects
  }));

export const receiveSettings = settings => dispatch => (
  dispatch({
    type: RECEIVE_SETTINGS,
    payload: settings
  }));

export const receiveCombat = combat => dispatch => (
  dispatch({
    type: RECEIVE_COMBAT,
    payload: combat
  }));

export const setFontSize = size => dispatch => (
  dispatch({
    type: UPDATE_FONTSIZE,
    payload: size
  }));

export const receiveGroup = group => dispatch => (
  dispatch({
    type: RECEIVE_GROUP,
    payload: group
  }));

export const setCharacterPanel = selection => dispatch => (
  dispatch({
    type: SET_CHARACTER_PANEL,
    payload: selection
  }));

export const receiveEquipment = equipment => dispatch => (
  dispatch({
    type: RECEIVE_EQUIPMENT,
    payload: equipment
  }));

export const sendLastItemIdentify = itemId => dispatch => (
  dispatch({
    type: SEND_LAST_ITEM_IDENTIFY,
    payload: itemId
  }));

export const receiveQuests = quests => dispatch => (
  dispatch({
    type: RECEIVE_QUESTS,
    payload: quests
  }));
