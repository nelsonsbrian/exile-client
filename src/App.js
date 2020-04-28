import React from 'react';
import './App.css';
import Socket from './js/connection/Socket';
import styled from 'styled-components';
import GlobalStyle from './js/shared/styled/GlobalStyle';
import LeftPane from './js/left/LeftContainer';
import RightPane from './js/right/RightContainer';
import MiddlePane from './js/middle/MiddleContainer';
import HeaderPane from './js/header/HeaderContainer';


export default function App() {

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

const AppContainer = styled.div`
  width: 100vw;
`;

const Content = styled.div`
  display: flex;
  height: calc(100vh - 55px);
  width: 100vw;
`;

