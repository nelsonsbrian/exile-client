import { UPDATE_MESSAGE, SOCKET, SEND_MESSAGE } from '../actions/types';
import Convert from 'ansi-to-html';

const initialState = {
  messages: ["\r\n", "\r\n"],
  socket: null,
  inputHistory: [],
};

export default function (state = initialState, { type, payload }) {
  switch (type) {

    case SOCKET:
      return Object.assign({}, state, {
        socket: payload
      });

    case SEND_MESSAGE:
      // todo input history
      state.socket.emit('message', payload);
      return { ...state, inputHistory: [payload, ...state.inputHistory] }

    case UPDATE_MESSAGE: // Really slow
      // const convertAnsi = new Convert({ newline: true });
      // return Object.assign({}, state, {
      //   messages: [...state.messages, convertAnsi.toHtml(payload)]
      // });
      return { ...state, messages: [...state.messages, payload] };

    default:
      return state;
  }
}