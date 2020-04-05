import { UPDATE_MESSAGE, SOCKET, SEND_MESSAGE, RECEIVE_ATTRIBUTES, RECEIVE_METADATA } from './types';

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

