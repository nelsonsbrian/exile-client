const events = require("./mapEvents");

const initState = {
  small: {
    grid: '',
    extras: {}
  },
  large: {
    grid: '',
    extras: {}
  }
};

const inboxReducer = (state = initState, { type, payload }) => {
  switch (type) {

    case events.RECEIVE_MAP:
      return { ...payload };

    default:
      return state;
  }
};

module.exports = inboxReducer;