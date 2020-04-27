import {
  UPDATE_MESSAGE,
  SOCKET,
  SOCKET_STATUS,
  SEND_MESSAGE,
  RECEIVE_METADATA,
  RECEIVE_MAP,
  RECEIVE_EFFECTS,
  RECEIVE_COMBAT,
  RECEIVE_CHANNELS,
  UPDATE_FONTSIZE,
  AUTO_CONNECT,
  RECEIVE_CHANNEL_UPDATE,
  RECEIVE_ACTIONBAR,
  SEND_ACTIONBAR
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

export const receiveChannels = channels => dispatch => (
  dispatch({
    type: RECEIVE_CHANNELS,
    payload: channels
  }));

export const receiveChannelUpdate = update => dispatch => (
  dispatch({
    type: RECEIVE_CHANNEL_UPDATE,
    payload: update
  }));

export const receiveActionBar = actionBar => dispatch => (
  dispatch({
    type: RECEIVE_ACTIONBAR,
    payload: actionBar
  }));

export const sendActionBar = actionBar => dispatch => (
  dispatch({
    type: SEND_ACTIONBAR,
    payload: actionBar
  }));
