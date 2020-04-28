import * as events from "./channelEvents";

export const receiveChannels = channels => dispatch => (
  dispatch({
    type: events.RECEIVE_CHANNELS,
    payload: channels
  }));


export const receiveChannelUpdate = update => dispatch => (
  dispatch({
    type: events.RECEIVE_CHANNEL_UPDATE,
    payload: update
  }));
