import * as events from "./actionBarEvents";

const initialState = {
  aliases: [],
  actionBar: {},
};

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case events.RECEIVE_ACTIONBAR:
      return { ...payload };

    default:
      return state;
  }
}