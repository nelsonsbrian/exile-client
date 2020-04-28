import React from 'react'
import styled from 'styled-components'
import { colors } from '../shared/styled/theme';
import MenuBar from './components/MenuBar'
import StatusBar from './components/StatusBar'
import exile from '../../img/web-client-logo.png';
import { Stop, Play } from './components/Buttons';
import { cap } from '../utils/StringUtil';

export default function HeaderPane({ imgBorder, autoConnect, setAutoConnect, socket, status }) {

  const handleConnectionStatus = () => {
    if (autoConnect) {
      setAutoConnect(false);
      socket.disconnect();
    } else {
      socket.connect();
      setAutoConnect(true);
    }
  }

  return (
    <PaneContainer imgBorder={imgBorder}>
      <Logo>
        <Status>
          <div onClick={() => handleConnectionStatus()}>
            {autoConnect ? <Stop /> : <Play />}
          </div>
          <StatusText>{cap(status)}</StatusText>
        </Status>
        <LogoContainer>
          <ExileLogo src={exile} />
        </LogoContainer>
      </Logo>

      <StatusBar />
      <MenuBar />

    </PaneContainer>
  )
}


const PaneContainer = styled.div`
  display: grid;
  grid-template-columns: 60% 20% 20%;

  height: 55px;
  width: 100%;
  color: white;
  padding: 1px;
  padding-top:5px;
  background: ${colors.primary};

  border-bottom-width: 4px;
  border-image-outset: 5px;
  border-image-source: url("${({ imgBorder }) => imgBorder ? require(`../../img/${imgBorder}`) : require('../../img/steel.jpg')}");
  border-bottom-style: solid;
  border-image-repeat: round;
  border-image-slice: 5;
`;

const Logo = styled.div`
  height: 100%;
  justify-self: start;
  display: flex;
`;

const LogoContainer = styled.div`
  padding-left: 30px;
  width: 240px;
`;

const ExileLogo = styled.img`
  height: 55px;
`;



const Status = styled.div`
  /* height: 55px; */
  display: flex;
  justify-items: center;
  align-items: center;
  /* justify-content: center;  */
  align-content: center; 

  margin-left: 15px;

  width: 200px;
  height: 40px;
  border-right: solid 3px black;
  border-top: solid 3px black;
  border-bottom: solid 3px black;
  background: ${colors.tan};
  border-radius: 4px;
`;

const StatusText = styled.div`
  color: ${colors.black};
  padding: 10px;
  font-size: 22px;
`;

