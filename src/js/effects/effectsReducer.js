import * as events from "./effectsEvents";

const initState = [];

export default (state = initState, { type, payload }) => {
  switch (type) {

    case events.RECEIVE_EFFECTS:
      return sortEffects([...payload]);

    case events.REMOVE_EFFECT: {
      const { uuid } = payload;
      return sortEffects(state.filter(eff => eff.uuid !== uuid));
    }

    case events.UPDATE_EFFECT: {
      const { uuid, updatedEffect } = payload;
      console.log('udpate', updatedEffect)
      return sortEffects(state.filter(eff => eff.uuid === uuid ? updatedEffect : eff));
    }

    case events.ADD_EFFECT: {
      const { newEffect } = payload;
      console.log('add', newEffect);
      return sortEffects([...state, newEffect]);
    }

    default:
      return state;
  }
};

function sortEffects(effects) {
  return effects.map(eff => ({ ...eff, duration: eff.duration ? eff.duration : Infinity, remaining: eff.remaining ? eff.remaining : Infinity })
  )
    .sort((a, b) => a.remaining - b.remaining);
}