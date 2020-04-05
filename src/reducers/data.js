import { RECEIVE_ATTRIBUTES, RECEIVE_METADATA } from '../actions/types';

const initialState = {
  attributes: {},
  metadata: {},
};

export default function (state = initialState, { type, payload }) {
  switch (type) {

    case RECEIVE_ATTRIBUTES:
      return { ...state, attributes: { ...state.attributes, ...payload } };

    case RECEIVE_METADATA:
      return { ...state, metadata: { ...state.metadata, ...payload } };

    default:
      return state;
  }
}