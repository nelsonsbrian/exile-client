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
      payload.split(';').forEach(msg => state.socket.emit('message', msg))
      const history = state.inputHistory;
      if (payload.length && payload !== history[0]) {
        const updatedHistory = history.length > 150 ? history.slice(0, 100) : history;
        return { ...state, inputHistory: [payload, ...updatedHistory] }
      } else {
        return state;
      }

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