import * as events from "./metadataEvents";

const initState = {
  name: '',
  race: '',
  playerClass: '',
  level: 1,
  experience: 0,
  experienceTNL: 0,
  sex: '',
  title: '',
  afkMessage: '',
  clan: null,
  clanName: null,
  maxLevel: 41,
  wholist: {
    list: []
  },
  commands: [],
  mail: 0,
  currencies: { gold: 0 },

  imgPanel: 'steel.jpg',
  imgBorder: 'cobble.jpg',

};

export default (state = initState, { type, payload }) => {
  switch (type) {

    case events.RECEIVE_METADATA:
      return { ...state, ...payload };

    case events.CALCULATE_QUEUE_TIMERS: {
      const now = Date.now();
      const commands = state.commands
        .filter(command => command.ttr > 0)
        .map(command => {
          return { ...command, ttr: command.runAt - now }
        })
        .filter(command => command.ttr > 150);
      return { ...state, commands };
    }
    default:
      return state;
  }
};