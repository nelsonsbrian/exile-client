import * as events from "./combatEvents";

const initialState = {
  target: { attributes: {} },
  targets: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case events.RECEIVE_COMBAT:
      return { ...payload };

    default:
      return state;
  }
}