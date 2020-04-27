import {
  RECEIVE_METADATA,
  RECEIVE_MAP,
  RECEIVE_EFFECTS,
  RECEIVE_COMBAT,
  RECEIVE_CHANNELS,
  RECEIVE_CHANNEL_UPDATE,
  RECEIVE_ACTIONBAR,
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
  map: {
    small: {
      grid: '',
      extras: {}
    },
    large: {
      grid: '',
      extras: {}
    }
  },
  effects: [],
  combat: {
    target: { attributes: {} },
    targets: [],
  },
  channels: {},
  actionBar: { aliases: [], actionBar: {} },
};

export default function (state = initialState, { type, payload }) {
  switch (type) {

    case RECEIVE_METADATA:
      return { ...state, metadata: { ...state.metadata, ...payload } };

    case RECEIVE_MAP:
      return { ...state, map: { ...state.map, ...payload } };

    case RECEIVE_EFFECTS:
      return { ...state, effects: [...payload] };

    case RECEIVE_COMBAT:
      return { ...state, combat: { ...state.combat, ...payload } };

    case RECEIVE_CHANNELS:
      return { ...state, channels: { ...state.channels, ...payload } };

    case RECEIVE_CHANNEL_UPDATE:
      return { ...state, [payload.channel]: [...state[payload.channel], payload.message] };

    case RECEIVE_ACTIONBAR:
      return { ...state, actionBar: { ...payload } };

    default:
      return state;
  }
}