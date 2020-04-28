import * as events from './effectsEvents';

export const receiveEffects = effects => dispatch => (
  dispatch({
    type: events.RECEIVE_EFFECTS,
    payload: effects
  }));