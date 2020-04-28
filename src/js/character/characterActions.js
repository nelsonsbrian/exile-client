import * as actions from "./characterEvents";

export const recieveAttributes = attributes => dispatch => (
  dispatch({
    type: actions.RECEIVE_ATTRIBUTES,
    payload: attributes
  }));

export const receiveGroup = group => dispatch => (
  dispatch({
    type: actions.RECEIVE_GROUP,
    payload: group
  }));

export const receiveEquipment = equipment => dispatch => (
  dispatch({
    type: actions.RECEIVE_EQUIPMENT,
    payload: equipment
  }));

export const sendLastItemIdentify = itemId => (dispatch, getState) => (
  dispatch({
    type: actions.SEND_LAST_ITEM_IDENTIFY,
    payload: {
      itemId,
      socket: getState().connection.socket,
    }
  }));

