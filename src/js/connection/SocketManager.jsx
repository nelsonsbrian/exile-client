// import React from "react";
// import io from 'socket.io-client';
// import { connect } from 'react-redux';
// import { receiveMetadata, receiveMap, receiveEffects, receiveChannels, receiveChannelUpdate, receiveActionBar } from '../../actions';
// import { updateMessage, saveSocket, setAutoConnect, setSocketStatus, sendMessage } from './connectionActions';
// import receiveData from './receiveData';
// import { receiveCombat } from '../combat/combatActions.js';
// import { receiveSettings } from '../settings/settingsActions';
// import { receiveQuests } from '../quests/questActions';
// import { receiveEquipment, receiveGroup, recieveAttributes } from '../character/characterActions';
// import Convert from 'ansi-to-html';
// import AU from 'ansi_up';
// import Ansi from "ansi-to-react";
// import sty from 'sty';
// import autoLogin from '../../utils/autoLogin';
// export class Socket extends React.Component {

//   componentDidMount() {

//     this.props.setSocketStatus('connecting');

//     const url = process.env.NODE_ENV === 'development'
//       ? `http://localhost:4001/`
//       : `http://localhost:4001/`
//     console.log(url)
//     this.socket = io.connect(url, {
//       transports: ['websocket'],
//       rejectUnauthorized: false,
//       secure: true
//     });

//     this.props.saveSocket(this.socket);
//     console.log(this.socket);

//     this.socket.on("connect", (data) => {
//       console.log('connected')
//       this.props.setSocketStatus('connected');
//       this.socket.sendBuffer = []; // Clear any pending commands that may have be inputed
//       this.props.updateMessage('Connected...\r\n');
//       autoLogin(this.props);
//     });
//     this.socket.on("disconnect", (data) => {
//       this.props.setSocketStatus('disconnected');
//       this.props.setAutoConnect(false);
//       this.props.updateMessage('Zap!! Disconnected from server!\r\n');
//       console.log("disconnect", data)
//     });

//     this.socket.on("message", (payload) => {
//       this.props.updateMessage(payload.message);
//       return
//       const output = document.getElementById('output');
//       const convertAnsi = new Convert({ newline: true });
//       const ansi_up = new AU();
//       ansi_up.use_classes = true;
//       const newDiv = document.createElement('div')
//       newDiv.innerHTML = convertAnsi.toHtml(payload.message);
//       // newDiv.innerHTML = ansi_up.ansi_to_html(payload.message);
//       // newDiv.innerHTML = sty.parse(payload.message);
//       // newDiv.innerHTML = `<Ansi useClasses>${payload.message}</Ansi>`;
//       // console.log(payload.message)
//       // newDiv.innerHTML = payload.message;
//       // console.log(newDiv)
//       output.appendChild(newDiv);
//       // output.scrollIntoView(false);
//       const { scrollTop, scrollHeight, offsetHeight, childNodes } = output;

//       // console.log(childNodes.length)
//       if (childNodes.length > 500) {
//         for (let i = 0; i < 50; i++) {
//           if (childNodes.length > 1) {
//             childNodes[0].remove();
//           }
//         }
//       }

//       // Only auto-scroll to bottom if you're pretty close to it already, enabling scrollback
//       if (scrollHeight - scrollTop < offsetHeight * 2.5) {
//         // const endOut = document.getElementById('endOutput');
//         // endOut.scrollTop = scrollHeight;

//         output.scrollTop = scrollHeight;
//       }
//       // console.log(payload.message);
//       // this.props.updateMessage(payload.message);
//     });
//     this.socket.on("data", (payload) => receiveData(this.props, payload));

//     this.socket.on("error", (data) => {
//       console.log("error", data);
//       this.props.setSocketStatus('disconnected');
//       this.props.setAutoConnect(false);
//     })

//     this.socket.on("welcome", (message) => {
//       console.log(message)
//     })
//   }

//   componentWillUnmount() {
//     try {
//       this.socket !== null && this.socket.disconnect();
//       this.props.setSocketStatus('disconnected');
//       this.props.setAutoConnect(false);
//     } catch (e) {
//       // socket not connected
//     }
//   }

//   render() {
//     return (
//       null
//     );
//   }
// }

// const mapStateToProps = () => {
// };



// const mapDispatchToProps = {
//   updateMessage,
//   saveSocket,
//   sendMessage,
//   recieveAttributes,
//   receiveMetadata,
//   receiveMap,
//   receiveEffects,
//   receiveSettings,
//   receiveCombat,
//   receiveGroup,
//   receiveEquipment,
//   receiveQuests,
//   setSocketStatus,
//   setAutoConnect,
//   receiveChannels,
//   receiveChannelUpdate,
//   receiveActionBar,
// };

// export default connect(null, mapDispatchToProps)(Socket);

