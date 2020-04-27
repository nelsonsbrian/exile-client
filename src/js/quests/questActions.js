const actions = require("./questEvents");

export const receiveQuests = quests => dispatch => (
  dispatch({
    type: actions.RECEIVE_QUESTS,
    payload: quests
  }));