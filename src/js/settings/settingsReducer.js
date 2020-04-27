const actions = require("./settingsEvents");

const initState = {
  fontSize: 16,
  characterPane: 'player',
  player: { config: {}, other: {} },
  account: { fontSize: 16 },
  playerToggle: {},
  playerOther: {},
};

const inboxReducer = (state = initState, { type, payload }) => {
  switch (type) {

    case actions.RECEIVE_SETTINGS:
      return { ...state, ...payload };

    case actions.UPDATE_FONTSIZE: {
      const { fontSize, socket } = payload;
      socket.emit('action', { type: actions.UPDATE_FONTSIZE, payload: fontSize });
      return { ...state, account: { ...state.account, fontSize } };
    }
    case actions.SET_CHARACTER_PANEL:
      return { ...state, characterPane: payload };

    case actions.TOGGLE_PLAYER_SETTING: {
      const { setting, socket } = payload;
      socket.emit('action', {
        type: actions.TOGGLE_PLAYER_SETTING,
        payload: { key: setting, value: !state.playerToggle[setting] }
      });
      return ({
        ...state,
        playerToggle: {
          ...state.playerToggle,
          [setting]: !state.playerToggle[setting]
        }
      });
    }

    case actions.SET_SUMMON_LEVEL: {
      const { setting, socket } = payload;
      socket.emit('action', {
        type: actions.SET_SUMMON_LEVEL,
        payload: setting
      });
      return { ...state, playerOther: { ...state.playerOther, summonMsg: setting } };
    }



    default:
      return state;
  }
};

module.exports = inboxReducer;