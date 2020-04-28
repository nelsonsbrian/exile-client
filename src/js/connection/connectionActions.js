import * as events from "./connectionEvents";

export const updateMessage = newMessage => dispatch => (
  dispatch({
    type: events.UPDATE_MESSAGE,
    payload: newMessage
  }));

export const saveSocket = socket => dispatch => (
  dispatch({
    type: events.SOCKET,
    payload: socket
  }));

export const setAutoConnect = connectOption => dispatch => (
  dispatch({
    type: events.AUTO_CONNECT,
    payload: connectOption
  }));

export const setSocketStatus = status => dispatch => (
  dispatch({
    type: events.SOCKET_STATUS,
    payload: status
  }));

export const sendMessage = message => dispatch => (
  dispatch({
    type: events.SEND_MESSAGE,
    payload: message
  }));

export const sendActionBar = actionBar => dispatch => (
  dispatch({
    type: events.SEND_ACTIONBAR,
    payload: actionBar
  }));
