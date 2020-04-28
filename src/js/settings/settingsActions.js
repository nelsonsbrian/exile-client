import * as events from "./settingsEvents";

export const receiveSettings = settings => dispatch => (
  dispatch({
    type: events.RECEIVE_SETTINGS,
    payload: settings
  }));

export const setFontSize = fontSize => (dispatch, getState) => (
  dispatch({
    type: events.UPDATE_FONTSIZE,
    payload: {
      fontSize,
      socket: getState().connection.socket,
    }
  }));

export const setCharacterPanel = selection => dispatch => (
  dispatch({
    type: events.SET_CHARACTER_PANEL,
    payload: selection
  }));

export const togglePlayerSetting = setting => (dispatch, getState) => (
  dispatch({
    type: events.TOGGLE_PLAYER_SETTING,
    payload: {
      setting,
      socket: getState().connection.socket,
    }
  }));

export const setSummonLevel = setting => (dispatch, getState) => (
  dispatch({
    type: events.SET_SUMMON_LEVEL,
    payload: {
      setting,
      socket: getState().connection.socket,
    }
  }));
