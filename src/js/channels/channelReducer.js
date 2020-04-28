import * as events from "./channelEvents";

const initState = {

};

export default (state = initState, { type, payload }) => {
  switch (type) {

    case events.RECEIVE_CHANNELS:
      return { ...payload };

    case events.RECEIVE_CHANNEL_UPDATE:
      return { ...state, [payload.channel]: [...state[payload.channel], payload.message] };


    default:
      return state;
  }
};