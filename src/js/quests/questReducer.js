const events = require("./questEvents");

const initState = [];

export default (state = initState, { type, payload }) => {
  switch (type) {

    case events.RECEIVE_QUESTS:
      return [...payload];


    default:
      return state;
  }
};
