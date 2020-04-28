const events = require("./settingsEvents");

const initState = {
  fontSize: 16,
  characterPane: 'player',
  player: { config: {}, other: {} },
  account: { fontSize: 16 },
  playerToggle: {},
  playerOther: {},
};

const settingsReducer = (state = initState, { type, payload }) => {
  switch (type) {

    case events.RECEIVE_SETTINGS:
      return { ...state, ...payload };

    case events.UPDATE_FONTSIZE: {
      const { fontSize, socket } = payload;
      socket.emit('action', { type: events.UPDATE_FONTSIZE, payload: fontSize });
      return { ...state, account: { ...state.account, fontSize } };
    }
    case events.SET_CHARACTER_PANEL:
      return { ...state, characterPane: payload };

    case events.TOGGLE_PLAYER_SETTING: {
      const { setting, socket } = payload;
      socket.emit('action', {
        type: events.TOGGLE_PLAYER_SETTING,
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

    case events.SET_SUMMON_LEVEL: {
      const { setting, socket } = payload;
      socket.emit('action', {
        type: events.SET_SUMMON_LEVEL,
        payload: setting
      });
      return { ...state, playerOther: { ...state.playerOther, summonMsg: setting } };
    }



    default:
      return state;
  }
};

module.exports = settingsReducer;