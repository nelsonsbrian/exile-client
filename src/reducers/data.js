import { RECEIVE_ATTRIBUTES, RECEIVE_METADATA, RECEIVE_MAP } from '../actions/types';

const initialState = {
  attributes: {
    health: { current: 1, max: 1, percent: null },
    mana: { current: 1, max: 1, percent: null },
    stamina: { current: 1, max: 1, percent: null },
    critical: { current: 1, max: 1, percent: null },
    speed: { current: 1, max: 1, percent: null },
    damroll: { current: 1, max: 1, percent: null },
    hitroll: { current: 1, max: 1, percent: null },
    spellHit: { current: 1, max: 1, percent: null },
    armor: { current: 1, max: 1, percent: null },
    dodge: { current: 1, max: 1, percent: null },
    parry: { current: 1, max: 1, percent: null },
    shieldBlock: { current: 1, max: 1, percent: null },
    spellDeflect: { current: 1, max: 1, percent: null },
    hitroll: { current: 1, max: 1, percent: null },
    spell: { current: 1, max: 1, percent: null },
    arcane: { current: 1, max: 1, percent: null },
    elemental: { current: 1, max: 1, percent: null },
    divine: { current: 1, max: 1, percent: null },
    strength: { current: 1, max: 1, percent: null },
    intelligence: { current: 1, max: 1, percent: null },
    wisdom: { current: 1, max: 1, percent: null },
    dexterity: { current: 1, max: 1, percent: null },
    constitution: { current: 1, max: 1, percent: null },
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