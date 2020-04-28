import * as events from "./actionBarEvents";

export const receiveActionBar = actionBar => dispatch => (
  dispatch({
    type: events.RECEIVE_ACTIONBAR,
    payload: actionBar
  }));
