import React, { useEffect, useState, useRef } from 'react';
import './App.css';
import Socket from './components/SocketManager';
import Convert from 'ansi-to-html';
import { connect } from 'react-redux';
import { sendMessage, updateMessage } from './actions/index';
import InputBar from './components/InputBar';
import styled, { css } from 'styled-components';
import { colors } from './components/styled/theme';
import StatBar from './components/styled/StatBar';
import Messages from './components/Messages';
import Map from './components/Map';
import OutputScreen from './components/styled/OutputScreen';
import FontButtons from './components/styled/FontButtons';


const Attribute = styled.div`
font-size: .75em;
color: palevioletred;
`;

const Wrapper = styled.div`
// padding: .7em;
// background: papayawhip;
`;



const StatTitle = styled.span`
  color: ${colors.bblue};
  font-size: 1.75em;
`;

const StatValue = styled.span`
${({ center }) => center && css`
  text-align: center;
  display: block;
`}
  color: ${colors.bwhite};
  font-size: 1.75em;
`;

function App({ attributes, metadata, map, inputHistory, messages, sendMessage }) {

  const [historyIndex, sethistoryIndex] = useState(1)
  const [fontSize, setFontSize] = useState(12);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(inputRef.current.value);
    // updateMessage(inputRef.current.value); // if we use store for this, enable
    inputRef.current.value = '';
    sethistoryIndex(-1);
  }

  // Focus the input text bar on initial load
  useEffect(() => {
    inputRef.current.focus();
  }, [inputRef]);

  // Select text in field when you scroll through inputHistory
  useEffect(() => {
    inputRef.current.select();
  }, [historyIndex]);

  const {
    name, race, playerClass, level, experience, experienceTNL, sex, title, afkMessage, clan, clanName, maxLevel, room } = metadata;


  return (
    <div className="app-container">
      <Socket />
      <div className="left-pane">
        {Object.entries(attributes).map(([key, { current, max }]) => (
          <Wrapper key={key}>
            <Attribute>
              {key}: {current}/{max}
            </Attribute>
          </Wrapper>
        ))}
      </div>
      <div className="middle-pane">
        <OutputScreen
          fontSize={fontSize}
          inputRef={inputRef}
        >
          <Messages messages={messages} messagesEndRef={messagesEndRef} />
          <div ref={messagesEndRef} />
        </OutputScreen>
        <div id="input">
          <form id="form-input" onSubmit={handleSubmit}>
            <InputBar
              historyIndex={historyIndex}
              sethistoryIndex={sethistoryIndex}
              inputHistory={inputHistory}
              inputRef={inputRef}
            />
            <button id="button-input">Send</button>
          </form>
        </div>
      </div>
      <div className="right-pane">
        <FontButtons fontSize={fontSize} setFontSize={setFontSize} />
        <StatBar
          attributes={attributes}
          exp={level >= maxLevel ? null : { current: experience, max: experience + experienceTNL }}
        />

        {Object.entries(metadata).map(([key, value]) => (
          <Wrapper key={key}>
            <Attribute>
              {key}: {JSON.stringify(value)}
            </Attribute>
          </Wrapper>
        ))}

        <StatValue center>{name} Lvl {level} {race} {playerClass}</StatValue>

        <br />

        <Map grid={map.grid} extras={map.extras} fontSize={fontSize} />
        <StatValue center>{room}</StatValue>

      </div>
    </div >
  );
}

const mapStateToProps = ({ connection, data }) => {
  return {
    inputHistory: connection.inputHistory,
    messages: connection.messages,
    attributes: data.attributes,
    metadata: data.metadata,
    map: data.map,
  }
};


export default connect(mapStateToProps, { updateMessage, sendMessage })(App);
