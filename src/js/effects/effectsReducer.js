import * as events from "./effectsEvents";

const initState = [];

export default (state = initState, { type, payload }) => {
  switch (type) {

    case events.RECEIVE_EFFECTS:
      return [...payload];

    default:
      return state;
  }
};