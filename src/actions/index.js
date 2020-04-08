import {
  UPDATE_MESSAGE,
  SOCKET,
  SEND_MESSAGE,
  RECEIVE_ATTRIBUTES,
  RECEIVE_METADATA,
  RECEIVE_MAP,
  RECEIVE_EFFECTS,
  RECEIVE_SETTINGS,
  UPDATE_FONTSIZE
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

export const setFontSize = size => dispatch => (
  dispatch({
    type: UPDATE_FONTSIZE,
    payload: size
  }));

