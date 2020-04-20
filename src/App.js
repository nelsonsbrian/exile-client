import React from 'react';
import './App.css';
import Socket from './components/SocketManager';
import styled from 'styled-components';
import GlobalStyle from './components/styled/GlobalStyle';
import LeftPane from './components/LeftPane';
import RightPane from './components/RightPane';
import MiddlePane from './components/MiddlePane';
import HeaderPane from './components/HeaderPane';


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

