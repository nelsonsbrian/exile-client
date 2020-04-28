import * as events from "./mapEvents";

export const receiveMap = mapData => dispatch => (
  dispatch({
    type: events.RECEIVE_MAP,
    payload: mapData
  }));