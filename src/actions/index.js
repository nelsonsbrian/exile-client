import {
  RECEIVE_METADATA,
  RECEIVE_EFFECTS,
  RECEIVE_CHANNELS,
  UPDATE_FONTSIZE,
  RECEIVE_CHANNEL_UPDATE,
  RECEIVE_ACTIONBAR,
} from './types';

export const receiveMetadata = metadata => dispatch => (
  dispatch({
    type: RECEIVE_METADATA,
    payload: metadata
  }));

export const receiveEffects = effects => dispatch => (
  dispatch({
    type: RECEIVE_EFFECTS,
    payload: effects
  }));

export const setFontSize = size => dispatch => (
  dispatch({
    type: UPDATE_FONTSIZE,
    payload: size
  }));

export const receiveChannels = channels => dispatch => (
  dispatch({
    type: RECEIVE_CHANNELS,
    payload: channels
  }));

export const receiveChannelUpdate = update => dispatch => (
  dispatch({
    type: RECEIVE_CHANNEL_UPDATE,
    payload: update
  }));

export const receiveActionBar = actionBar => dispatch => (
  dispatch({
    type: RECEIVE_ACTIONBAR,
    payload: actionBar
  }));

