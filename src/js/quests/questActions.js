import * as events from "./questEvents";

export const receiveQuests = quests => dispatch => (
  dispatch({
    type: events.RECEIVE_QUESTS,
    payload: quests
  }));