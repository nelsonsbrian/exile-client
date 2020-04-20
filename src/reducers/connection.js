import io from 'socket.io-client';

import {
  UPDATE_MESSAGE,
  SOCKET,
  SOCKET_STATUS,
  SEND_MESSAGE,
  SEND_LAST_ITEM_IDENTIFY,
  AUTO_CONNECT,
  SEND_ACTIONBAR,
} from '../actions/types';
import Convert from 'ansi-to-html';
const convertAnsi = new Convert({ newline: true });


const initialState = {
  messages: ["\r\n", "\r\n"],
  socket: null,
  status: 'disconnected',
  autoConnect: true,
  inputHistory: [],
};

export default function (state = initialState, { type, payload }) {
  switch (type) {

    case SOCKET:
      return { ...state, socket: payload };

    case SOCKET_STATUS:
      return { ...state, status: payload };

    case AUTO_CONNECT:
      return { ...state, autoConnect: payload };

    case SEND_MESSAGE:
      payload.split(';').forEach(msg => state.socket.emit('message', msg))
      const history = state.inputHistory;
      if (payload.length && payload !== history[0]) {
        const updatedHistory = history.length > 150 ? history.slice(0, 100) : history;
        return { ...state, inputHistory: [payload, ...updatedHistory] }
      } else {
        return state;
      }

    case UPDATE_MESSAGE:
      const output = document.getElementById('output');
      const newDiv = document.createElement('div')
      newDiv.innerHTML = convertAnsi.toHtml(payload);
      output.appendChild(newDiv);
      const { scrollTop, scrollHeight, offsetHeight, childNodes } = output;
      if (scrollHeight - scrollTop < offsetHeight * 2.5) {
        output.scrollTop = scrollHeight;
      }
      if (childNodes.length > 500) {
        for (let i = 0; i < 50; i++) {
          if (childNodes.length > 1) {
            childNodes[0].remove();
          }
        }
      }
      return state;
    // Really slow  
    // const convertAnsi = new Convert({ newline: true });
    // return Object.assign({}, state, {
    //   messages: [...state.messages, convertAnsi.toHtml(payload)]
    // });
    // return { ...state, messages: [...state.messages, payload] };

    case SEND_LAST_ITEM_IDENTIFY:
      state.socket.emit('action', { type: SEND_LAST_ITEM_IDENTIFY, ...payload })
      return state;

    case SEND_ACTIONBAR:
      state.socket.emit('action', { type: SEND_ACTIONBAR, ...payload })
      return state;

    default:
      return state;
  }
}