import * as events from "./characterEvents";

const initState = {

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
    nature: { current: 1, max: 1, percent: null },
    elemental: { current: 1, max: 1, percent: null },
    divine: { current: 1, max: 1, percent: null },
    strength: { current: 1, max: 1, percent: null },
    intelligence: { current: 1, max: 1, percent: null },
    wisdom: { current: 1, max: 1, percent: null },
    dexterity: { current: 1, max: 1, percent: null },
    constitution: { current: 1, max: 1, percent: null },
  },

  group: { front: [], middle: [], back: [] },
  equipment: {},

};

export default (state = initState, { type, payload }) => {
  switch (type) {

    case events.RECEIVE_ATTRIBUTES:
      return { ...state, attributes: { ...state.attributes, ...payload } };

    case events.RECEIVE_GROUP:
      return { ...state, group: { ...payload } };

    case events.RECEIVE_EQUIPMENT:
      return { ...state, equipment: { ...payload } };

    case events.SEND_LAST_ITEM_IDENTIFY: {
      const { itemId, socket } = payload;
      socket.emit('action', { type: events.SEND_LAST_ITEM_IDENTIFY, ...itemId })
      return state;
    }

    default:
      return state;
  }
};