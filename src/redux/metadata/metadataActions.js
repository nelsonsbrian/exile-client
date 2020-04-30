import * as events from "./metadataEvents";

export const receiveMetadata = payload => dispatch => (
  dispatch({
    type: events.RECEIVE_METADATA,
    payload,
  }));

export const updateQueue = payload => dispatch => (
  dispatch({
    type: events.CALCULATE_QUEUE_TIMERS,
    payload
  }));