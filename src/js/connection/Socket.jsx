import React, { useEffect } from 'react';
import io from 'socket.io-client';
import { connect } from 'react-redux';
import { receiveMetadata, receiveEffects, receiveChannels, receiveChannelUpdate } from '../../actions';
import { updateMessage, saveSocket, setAutoConnect, setSocketStatus, sendMessage } from './connectionActions';
import receiveData from './receiveData';
import { receiveCombat } from '../combat/combatActions';
import { receiveMap } from '../map/mapActions';
import { receiveActionBar } from '../actionBar/actionbarActions';
import { receiveSettings } from '../settings/settingsActions';
import { receiveQuests } from '../quests/questActions';
import { receiveEquipment, receiveGroup, recieveAttributes } from '../character/characterActions';
import autoLogin from '../utils/autoLogin';


const Socket = (props) => {

  useEffect(() => {

    props.setSocketStatus('connecting');

    const url = process.env.NODE_ENV === 'development'
      ? `http://localhost:4001/`
      : `http://localhost:4001/`
    console.log(url)
    const socket = io.connect(url, {
      transports: ['websocket'],
      rejectUnauthorized: false,
      secure: true
    });

    props.saveSocket(socket);
    console.log(socket);

    socket.on("connect", (data) => {
      console.log('connected')
      props.setSocketStatus('connected');
      socket.sendBuffer = []; // Clear any pending commands that may have be inputed
      props.updateMessage('Connected...\r\n');
      autoLogin(props);
    });

    socket.on("disconnect", (data) => {
      props.setSocketStatus('disconnected');
      props.setAutoConnect(false);
      props.updateMessage('Zap!! Disconnected from server!\r\n');
      console.log("disconnect", data)
    });

    socket.on("message", (payload) => props.updateMessage(payload.message));
    socket.on("data", (payload) => receiveData(props, payload));

    socket.on("error", (data) => {
      console.log("error", data);
      props.setSocketStatus('disconnected');
      props.setAutoConnect(false);
    })

    socket.on("welcome", (message) => {
      console.log(message)
    })

    return () => {
      try {
        socket !== null && socket.disconnect();
        props.setSocketStatus('disconnected');
        props.setAutoConnect(false);
      } catch (e) {
        // socket not connected
      }
    }
  }, [])

  return null;
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
  receiveActionBar,
};

export default connect(null, mapDispatchToProps)(Socket);