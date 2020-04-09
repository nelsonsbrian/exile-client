import React from "react";
import io from 'socket.io-client';
import { connect } from 'react-redux';
import { updateMessage, saveSocket, sendMessage, recieveAttributes, receiveMetadata, receiveMap, receiveEffects, receiveSettings, receiveCombat, receiveGroup } from '../actions';
import Convert from 'ansi-to-html';
import AU from 'ansi_up';
import Ansi from "ansi-to-react";
import sty from 'sty';
import autoLogin from '../utils/autoLogin';
export class Socket extends React.Component {

  componentDidMount() {

    this.socket = io.connect(process.env.NODE_ENV === 'development'
      ? `http://localhost:4001/`
      : `http://localhost:4001/`
      , {
        transports: ['websocket'],
        rejectUnauthorized: false,
        secure: true
      });


    // const first = [" ", " ", "<bold><magenta>Test</magenta></bold>", 'test', '<magenta>test</magenta>'];
    // const output = document.getElementById('output');
    // const convertAnsi = new Convert({ newline: true });
    // first.forEach(msg => {
    //   const newDiv = document.createElement('div')
    //   newDiv.innerHTML = convertAnsi.toHtml(msg)
    //   output.appendChild(newDiv);
    //   output.scrollIntoView(false);
    // })

    this.props.saveSocket(this.socket);
    // this.socket.on("pong",this._wsOnPong.bind(this));
    // this.socket.on("connect",this._wsOnOpen.bind(this));
    // this.socket.on("disconnect",this._wsOnClose.bind(this));
    // this.socket.on("message",this._wsOnMessage.bind(this));
    // this.socket.on("data",this._wsOnData.bind(this));
    // this.socket.on("error",this._wsOnError.bind(this));

    // this.socket.on("pong", (data) => console.log("pong", data));
    this.socket.on("connect", (data) => {
      autoLogin(this.props);
    });
    this.socket.on("disconnect", (data) => {
      console.log("disconnect", data)
    });
    this.props.updateMessage('Zap!! Disconnected!\r\n');

    this.socket.on("message", (payload) => {
      // console.log(payload.message)

      // return console.log(payload.message)
      const output = document.getElementById('output');

      // console.log(sty.parse(payload.message))

      const convertAnsi = new Convert({ newline: true });

      // console.log(AU)
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
      }

    });

    this.socket.on("error", (data) => console.log("error", data));

    this.socket.on("welcome", (message) => {
      console.log(message)
    })
  }

  componentWillUnmount() {
    try {
      this.socket !== null && this.socket.disconnect();
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

const mapStateToProps = {
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
};

export default connect(
  null,
  mapDispatchToProps
)(Socket);


function _wsOnMessage(e) {
  var data = JSON.parse(e.data);
  console.log(data)
  if (data.type === 'message') {
    this.writeOutput(data.message);
  } else if (data.type === 'data') {
    if (!this.playerData) {
      this.playerData = {};
    }
    this.set('playerData.' + data.group, data.data);
  }
}

function _wsOnOpen(e) {
  this._isConnected = true;
  this.writeOutput('Connected', 'info', true);
}

function _wsOnClose(e) {
  this.writeOutput('Connection Closed', 'info', true);
  this.playerData = null;
  this._isConnected = false;
}

function _wsOnError(e) {
  console.log(e);
  this.writeOutput('Websocket Error', 'error', true);
  this._isConnected = false;
}