const {
  RECEIVE_SETTINGS,
  UPDATE_FONTSIZE,
  SET_CHARACTER_PANEL
} = require("./settingsEvents");

const initState = {
  fontSize: 16,
  characterPane: 'player',
  player: { config: {}, other: {} },
  account: { fontSize: 16 }
};

const inboxReducer = (state = initState, { type, payload }) => {
  switch (type) {

    case RECEIVE_SETTINGS:
      return { ...state, ...payload };

    case UPDATE_FONTSIZE:
      const { fontSize, socket } = payload;
      socket.emit('action', { type: UPDATE_FONTSIZE, payload: fontSize });
      return { ...state, account: { ...state.account, fontSize } };

    case SET_CHARACTER_PANEL:
      return { ...state, characterPane: payload };


    default:
      return state;
  }
};

module.exports = inboxReducer;