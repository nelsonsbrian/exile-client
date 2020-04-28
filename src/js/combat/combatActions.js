import * as events from "./combatEvents";

export const receiveCombat = combat => dispatch => (
  dispatch({
    type: events.RECEIVE_COMBAT,
    payload: combat
  }));
