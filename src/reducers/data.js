import {
  RECEIVE_METADATA,
  RECEIVE_EFFECTS,
  RECEIVE_CHANNELS,
  RECEIVE_CHANNEL_UPDATE,
} from '../actions/types';

const initialState = {
  imgPanel: 'steel.jpg',
  imgBorder: 'cobble.jpg',
  metadata: {
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
  },
  effects: [],
  channels: {},
};

export default function (state = initialState, { type, payload }) {
  switch (type) {

    case RECEIVE_METADATA:
      return { ...state, metadata: { ...state.metadata, ...payload } };



    case RECEIVE_EFFECTS:
      return { ...state, effects: [...payload] };

    case RECEIVE_CHANNELS:
      return { ...state, channels: { ...state.channels, ...payload } };

    case RECEIVE_CHANNEL_UPDATE:
      return { ...state, [payload.channel]: [...state[payload.channel], payload.message] };

    default:
      return state;
  }
}