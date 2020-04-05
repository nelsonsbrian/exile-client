import { RECEIVE_ATTRIBUTES, RECEIVE_METADATA, RECEIVE_MAP } from '../actions/types';

const initialState = {
  attributes: {
    health: { current: 1, max: 1 },
    mana: { current: 1, max: 1 },
    stamina: { current: 1, max: 1 },
  },
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
  },
  map: {
    grid: '',
    extras: {}
  }
};

export default function (state = initialState, { type, payload }) {
  switch (type) {

    case RECEIVE_ATTRIBUTES:
      return { ...state, attributes: { ...state.attributes, ...payload } };

    case RECEIVE_METADATA:
      return { ...state, metadata: { ...state.metadata, ...payload } };

    case RECEIVE_MAP:
      return { ...state, map: { ...state.map, ...payload } };


    default:
      return state;
  }
}