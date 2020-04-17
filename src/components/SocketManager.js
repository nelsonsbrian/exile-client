import React from "react";
import io from 'socket.io-client';
import { connect } from 'react-redux';
import { updateMessage, saveSocket, sendMessage, recieveAttributes, receiveMetadata, receiveMap, receiveEffects, receiveSettings, receiveCombat, receiveGroup, receiveEquipment, receiveQuests, setSocketStatus, setAutoConnect, receiveChannels, receiveChannelUpdate } from '../actions';
import Convert from 'ansi-to-html';
import AU from 'ansi_up';
import Ansi from "ansi-to-react";
import sty from 'sty';
import autoLogin from '../utils/autoLogin';
export class Socket extends React.Component {

  componentDidMount() {

    this.props.setSocketStatus('connecting');

    const url = process.env.NODE_ENV === 'development'
      ? `http://localhost:4001/`
      // ? `https://nelsonsbrian.com/socket.io`
      : `http://localhost:4001/`
    // : `https://nelsonsbrian.com/socket.io`
    console.log(url)
    this.socket = io.connect(url, {
      transports: ['websocket'],
      rejectUnauthorized: false,
      secure: true
    });

    this.props.saveSocket(this.socket);
    console.log(this.socket);

    this.socket.on("connect", (data) => {
      console.log('connected')
      this.props.setSocketStatus('connected');
      this.socket.sendBuffer = []; // Clear any pending commands that may have be inputed
      this.props.updateMessage('Connected...\r\n');
      autoLogin(this.props);
    });
    this.socket.on("disconnect", (data) => {
      this.props.setSocketStatus('disconnected');
      this.props.setAutoConnect(false);
      this.props.updateMessage('Zap!! Disconnected from server!\r\n');
      console.log("disconnect", data)
    });

    this.socket.on("message", (payload) => {
      this.props.updateMessage(payload.message);
      return
      // console.log(payload.message)

      // return console.log(payload.message)
      const output = document.getElementById('output');

      // console.log(sty.parse(payload.message))

      const convertAnsi = new Convert({ newline: true });
      const ansi_up = new AU();
      ansi_up.use_classes = true;
      const newDiv = document.createElement('div')
      newDiv.innerHTML = convertAnsi.toHtml(payload.message);
      // newDiv.innerHTML = ansi_up.ansi_to_html(payload.message);
      // newDiv.innerHTML = sty.parse(payload.message);
      // newDiv.innerHTML = `<Ansi useClasses>${payload.message}</Ansi>`;
      // console.log(payload.message)
      // newDiv.innerHTML = payload.message;
      // console.log(newDiv)
      output.appendChild(newDiv);
      // output.scrollIntoView(false);
      const { scrollTop, scrollHeight, offsetHeight, childNodes } = output;

      // console.log(childNodes.length)
      if (childNodes.length > 500) {
        for (let i = 0; i < 50; i++) {
          if (childNodes.length > 1) {
            childNodes[0].remove();
          }
        }
      }

      // Only auto-scroll to bottom if you're pretty close to it already, enabling scrollback
      if (scrollHeight - scrollTop < offsetHeight * 2.5) {
        // const endOut = document.getElementById('endOutput');
        // endOut.scrollTop = scrollHeight;

        output.scrollTop = scrollHeight;
      }
      // console.log(payload.message);
      // this.props.updateMessage(payload.message);
    });
    this.socket.on("data", (payload) => {
      payload = JSON.parse(payload);
      const { group, data } = payload;
      switch (group.toUpperCase()) {
        case `ATTRIBUTES`:
          return this.props.recieveAttributes(data);
        case 'METADATA':
          return this.props.receiveMetadata(data);
        case 'MAP':
          return this.props.receiveMap(data);
        case 'EFFECTS':
          return this.props.receiveEffects(data);
        case 'SETTINGS':
          return this.props.receiveSettings(data);
        case 'COMBAT':
          return this.props.receiveCombat(data);
        case 'GROUP':
          return this.props.receiveGroup(data);
        case 'EQUIPMENT':
          return this.props.receiveEquipment(data);
        case 'QUESTS':
          return this.props.receiveQuests(data);
        case 'CHANNELS':
          return this.props.receiveChannels(data);
        case 'CHANNEL_UPDATE':
          return this.props.receiveChannelUpdate(data);
      }

    });

    this.socket.on("error", (data) => {
      console.log("error", data);
      this.props.setSocketStatus('disconnected');
      this.props.setAutoConnect(false);
    })

    this.socket.on("welcome", (message) => {
      console.log(message)
    })
  }

  componentWillUnmount() {
    try {
      this.socket !== null && this.socket.disconnect();
      this.props.setSocketStatus('disconnected');
      this.props.setAutoConnect(false);
    } catch (e) {
      // socket not connected
    }
  }

  render() {
    return (
      null
    );
  }
}

const mapStateToProps = () => {
};



const mapDispatchToProps = {
  updateMessage,
  saveSocket,
  sendMessage,
  recieveAttributes,
  receiveMetadata,
  receiveMap,
  receiveEffects,
  receiveSettings,
  receiveCombat,
  receiveGroup,
  receiveEquipment,
  receiveQuests,
  setSocketStatus,
  setAutoConnect,
  receiveChannels,
  receiveChannelUpdate,
};

export default connect(null, mapDispatchToProps)(Socket);

