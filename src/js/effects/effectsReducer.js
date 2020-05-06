import * as events from "./effectsEvents";
import Humanize from 'humanize-duration';
const humanize = (sec) => {
  return Humanize(sec, {
    round: true,
    largest: 1,
    spacer: '',
    language: 'short',
    languages: {
      short: {
        w: () => 'w',
        d: () => 'd',
        h: () => 'h',
        m: () => 'm',
        s: () => 's'
      }
    }
  });
};


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
      return sortEffects(state.map(eff => eff.uuid === uuid ? updatedEffect : eff));
    }

    case events.ADD_EFFECT: {
      const { newEffect } = payload;
      return sortEffects([...state, newEffect]);
    }

    case events.CALCULATE_EFFECT_TIMERS:
      const now = Date.now();
      return state.map(eff => {
        const remaining = eff.startedAt + eff.duration - now;
        return {
          ...eff,
          remaining,
          short: remaining === Infinity ? 'Perm' : humanize(remaining)
        }
      }).filter(eff => isNaN(eff.remaining) || eff.remaining > 0)


    default:
      return state;
  }
};

function sortEffects(effects) {
  return effects.map(eff => ({ ...eff, duration: eff.duration ? eff.duration : Infinity, remaining: eff.remaining ? eff.remaining : Infinity })
  )
    .sort((a, b) => a.remaining - b.remaining);
}