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
  }
  body{

    &:after {
      content: "";
      background: $home-image;
      background-size: cover;
      z-index: -1;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: auto;
      min-height: 100%;
      min-width: 1024px;
    }
    
    /* background: yellow; */

    /* background: ${colors.tan}; */
    /* background: #444; */
;
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
  width: 100vw;
`;

