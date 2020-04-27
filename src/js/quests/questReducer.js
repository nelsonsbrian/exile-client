const actions = require("./questEvents");

const initState = [];

const questReducer = (state = initState, { type, payload }) => {
  switch (type) {

    case actions.RECEIVE_QUESTS:
      return [...payload];


    default:
      return state;
  }
};

module.exports = questReducer;