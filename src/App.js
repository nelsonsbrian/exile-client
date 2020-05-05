import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import Socket from './js/connection/Socket';
import styled from 'styled-components';
import GlobalStyle from './js/shared/styled/GlobalStyle';
import LeftPane from './js/left/LeftContainer';
import RightPane from './js/right/RightContainer';
import MiddlePane from './js/middle/MiddleContainer';
import HeaderPane from './js/header/HeaderContainer';

import useDispatchTimer from './js/utils/hooks/useDispatchTimer';
import { updateTimers } from './js/effects/effectsActions';
import { updateTargetTimers } from './js/combat/combatActions';
import { updateQueue } from './redux/metadata/metadataActions';

function App({ effects, combat, updateQueue, updateTargetTimers, updateTimers, commands }) {

  useDispatchTimer(updateTargetTimers, 1000, combat)
  useDispatchTimer(updateTimers, 1000, effects)
  useDispatchTimer(updateQueue, 100, commands)

  return (
    <AppContainer >
      <GlobalStyle />
      <Socket />
      <HeaderPane />
      <Content>
        <LeftPane />
        <MiddlePane />
        <RightPane />
      </Content>
    </AppContainer >
  );
}

const mapStateToProps = ({ effects, combat, metadata }) => {
  return {
    effects,
    combat,
    commands: metadata.commands,
  }

}


export default connect(mapStateToProps, { updateQueue, updateTimers, updateTargetTimers })(App)

const AppContainer = styled.div`
  width: 100vw;
`;

const Content = styled.div`
  display: flex;
  height: calc(100vh - 55px);
  width: 100vw;
`;

