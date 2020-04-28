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

    default:
      return state;
  }
};