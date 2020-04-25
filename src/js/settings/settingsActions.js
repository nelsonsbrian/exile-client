const {
  RECEIVE_SETTINGS,
  UPDATE_FONTSIZE,
  SET_CHARACTER_PANEL
} = require("./settingsEvents");

export const receiveSettings = settings => dispatch => (
  dispatch({
    type: RECEIVE_SETTINGS,
    payload: settings
  }));

export const setFontSize = fontSize => (dispatch, getState) => (
  dispatch({
    type: UPDATE_FONTSIZE,
    payload: {
      fontSize,
      socket: getState().connection.socket,
    }
  }));

  export const setCharacterPanel = selection => dispatch => (
    dispatch({
      type: SET_CHARACTER_PANEL,
      payload: selection
    }));