import * as events from "./metadataEvents";

export const receiveMetadata = metadata => dispatch => (
  dispatch({
    type: events.RECEIVE_METADATA,
    payload: metadata
  }));