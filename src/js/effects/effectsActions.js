import * as events from './effectsEvents';

export const receiveEffects = payload => dispatch => (
  dispatch({
    type: events.RECEIVE_EFFECTS,
    payload
  }));

export const updateEffect = payload => dispatch => (
  dispatch({
    type: events.UPDATE_EFFECT,
    payload
  }));

export const removeEffect = payload => dispatch => (
  dispatch({
    type: events.REMOVE_EFFECT,
    payload
  }));

export const addEffect = payload => dispatch => (
  dispatch({
    type: events.ADD_EFFECT,
    payload
  }));