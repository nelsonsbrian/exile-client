import * as events from "./combatEvents";
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

const initialState = {
  target: null,
  targets: [],
  targetsEffects: {},
};

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case events.RECEIVE_COMBAT:
      return { ...state, ...payload };

    case events.RECEIVE_COMBATANT_EFFECTS: {
      const { targetsEffects } = payload;
      return {
        ...state,
        targetsEffects: { ...targetsEffects }
      }
    };

    case events.UPDATE_COMBATANT_EFFECT: {
      const { combatant, updatedEffect } = payload;
      return {
        ...state,
        targetsEffects: {
          ...state.targetsEffects,
          [combatant.id]: sortEffects([...state.targetsEffects[combatant.id]
            .map(e => updatedEffect.uuid === e.uuid ? updatedEffect : e)]),
        }
      };
    }

    case events.ADD_COMBATANT_EFFECT: {
      const { combatant, addedEffect } = payload;
      const newTargetEffects = { ...state.targetsEffects };
      const oldEffects = state.targetsEffects[combatant.id] || [];
      newTargetEffects[combatant.id] = sortEffects([...oldEffects, addedEffect]);
      return {
        ...state,
        targetsEffects: { ...newTargetEffects }
      };
    }

    case events.REMOVE_COMBATANT_EFFECT: {
      const { combatant, removedEffect } = payload;
      const combatantEffects = [...state.targetsEffects[combatant.id] || []];
      return {
        ...state,
        targetsEffects: {
          ...state.targetsEffects,
          [combatant.id]: combatantEffects.filter(e => e.uuid !== removedEffect.uuid)
        }
      };
    }

    case events.CLEAR_COMBATANTS: {
      return { ...initialState };
    }

    case events.ADD_COMBATANT: {
      const { combatant, effects } = payload;
      return {
        ...state,
        targetsEffects: {
          ...state.targetsEffects,
          [combatant.id]: effects
        }
      };
    }

    case events.REMOVE_COMBATANT: {
      const { combatant } = payload;
      const newTargetEffects = { ...state.targetsEffects };
      delete newTargetEffects[combatant.id];
      return {
        ...state,
        targetsEffects: newTargetEffects
      };
    }

    case events.CALCULATE_TARGET_EFFECT_TIMERS: {
      const now = Date.now();
      const updatedCharacters = {};
      Object.entries(state.targetsEffects).forEach(([id, effects]) => {
        const updatedEffects = effects.map(eff => {
          const remaining = eff.startedAt + eff.duration - now;
          if (remaining > 0 || isNaN(eff.remaining)) {
            return {
              ...eff,
              remaining,
              short: remaining === Infinity ? 'Perm' : humanize(remaining)
            }
          } else { return null }
        })
        updatedCharacters[id] = updatedEffects.filter(eff => eff !== null);
      })
      return { ...state, targetsEffects: updatedCharacters };
    }

    default:
      return state;
  }
}

function sortEffects(effects) {
  return effects.map(eff => ({ ...eff, duration: eff.duration ? eff.duration : Infinity, remaining: eff.remaining ? eff.remaining : Infinity })
  )
    .sort((a, b) => a.remaining - b.remaining);
}