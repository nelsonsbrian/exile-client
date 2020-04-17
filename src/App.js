import React from 'react';
import './App.css';
import Socket from './components/SocketManager';
import { connect } from 'react-redux';
import styled, { createGlobalStyle } from 'styled-components';
import { colors } from './components/styled/theme';
import LeftPane from './components/LeftPane';
import RightPane from './components/RightPane';
import MiddlePane from './components/MiddlePane';
import HeaderPane from './components/HeaderPane';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    overflow: hidden;

    &::-webkit-scrollbar {
      display: block;
    }
    -ms-overflow-style: block;

    
    ::-webkit-scrollbar-thumb {
      background: rgb(126, 3, 3);
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: red;
    }
    ::-webkit-scrollbar-track {
      /* background: rgba(0,0,0,.6); */
    }
    scrollbar-color: rgb(126, 3, 3) transparent; /* thumb and track color  firefox*/

  }
  body{
    color: white;    
    font-family: 'Roboto', Helvetica, Arial, sans-serif;


  }
`;

function App() {
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

const mapStateToProps = ({ connection, data }) => {
  return {
    inputHistory: connection.inputHistory,
    messages: connection.messages,
    attributes: data.attributes,
    metadata: data.metadata,
    map: data.map.small,
    settings: data.settings,
  }
};


export default connect(mapStateToProps, null)(App);

const AppContainer = styled.div`
  /* display: flex; */
  width: 100vw;
`;

const Content = styled.div`
  display: flex;
  /* height: 100%; */
  height: calc(100vh - 55px);
  /* flex-wrap: wrap; */
  /* flex-flow: column; */
  width: 100vw;
  /* padding-bottom: 15px; */
`;

