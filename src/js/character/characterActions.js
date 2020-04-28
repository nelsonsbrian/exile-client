import * as events from "./characterEvents";

export const recieveAttributes = attributes => dispatch => (
  dispatch({
    type: events.RECEIVE_ATTRIBUTES,
    payload: attributes
  }));

export const receiveGroup = group => dispatch => (
  dispatch({
    type: events.RECEIVE_GROUP,
    payload: group
  }));

export const receiveEquipment = equipment => dispatch => (
  dispatch({
    type: events.RECEIVE_EQUIPMENT,
    payload: equipment
  }));

export const sendLastItemIdentify = itemId => (dispatch, getState) => (
  dispatch({
    type: events.SEND_LAST_ITEM_IDENTIFY,
    payload: {
      itemId,
      socket: getState().connection.socket,
    }
  }));

