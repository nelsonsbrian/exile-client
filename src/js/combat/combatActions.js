import * as events from "./combatEvents";

export const receiveCombat = payload => dispatch => (
  dispatch({ type: events.RECEIVE_COMBAT, payload }));

export const receiveCombatantEffects = payload => dispatch => (
  dispatch({ type: events.RECEIVE_COMBATANT_EFFECTS, payload }));

export const updateCombatantEffect = payload => dispatch => (
  dispatch({ type: events.UPDATE_COMBATANT_EFFECT, payload }));

export const addCombatantEffect = payload => dispatch => (
  dispatch({ type: events.ADD_COMBATANT_EFFECT, payload }));

export const removeCombatantEffect = payload => dispatch => (
  dispatch({ type: events.REMOVE_COMBATANT_EFFECT, payload }));

export const clearCombatants = payload => dispatch => (
  dispatch({ type: events.CLEAR_COMBATANTS, payload }));

export const addCombatant = payload => dispatch => (
  dispatch({ type: events.ADD_COMBATANT, payload }));

export const removeCombatant = payload => dispatch => (
  dispatch({ type: events.REMOVE_COMBATANT, payload }));

export const updateTargetTimers = () => dispatch => (
  dispatch({ type: events.CALCULATE_TARGET_EFFECT_TIMERS }));

