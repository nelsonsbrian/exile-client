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


const MapContainer = styled.div`
  height: 300px;
  background: black;
  border: 3px solid ${colors.byellow};
  border-radius: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 25px;
  div {
    background: black;
    color: white;
    font-family: monospace;
    white-space: pre;
    display: table;
    margin: 0 auto;
    /* font-size: ${({ fontSize }) => fontSize}px; */
    font-size: ${({ fontSize }) => fontSize ? `${fontSize + 4}px` : '22px'};
  }
  `;
// `${fontSize}px`

const Map = ({ grid, extras, fontSize }) => {
  const convertAnsi = new Convert({ newline: true });
  return (
    <MapContainer fontSize={fontSize}>
      <div dangerouslySetInnerHTML={{ __html: convertAnsi.toHtml(grid) }}></div >
    </MapContainer>

  )
}

function App(props) {

  const [historyIndex, sethistoryIndex] = useState(1)
  const [fontSize, setFontSize] = useState(12);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const { inputHistory } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    props.sendMessage(inputRef.current.value);
    // props.updateMessage(inputRef.current.value); // if we use store for this, enable
    inputRef.current.value = '';
    sethistoryIndex(-1);
  }

  // Focus the input text bar on initial load
  useEffect(() => {
    focusInputBar()
  }, [inputRef]);

  // Select text in field when you scroll through inputHistory
  useEffect(() => {
    inputRef.current.select();
  }, [historyIndex]);

  const focusInputBar = (e) => {
    inputRef.current.focus();
  }



  const { health = { current: 0, max: 1 },
    mana = { current: 0, max: 1 },
    stamina = { current: 0, max: 1 },
  } = props.attributes;

  const {
    name, race, playerClass, level, experience, experienceTNL, sex, title, afkMessage, clan, clanName, maxLevel, room } = props.metadata;


  const handleSizeChange = (type) => {
    if (type === '+' && fontSize < 24) {
      setFontSize((old) => old + 2);
    } else if (type === '-' && fontSize > 6) {
      setFontSize((old) => old - 2);
    }
  }


  return (
    <div className="app-container">
      <Socket />
      <div className="left-pane">
        Name: {name}
        <br />
        Room: {room}
        <br />
        Attributes:

        <br />
        {Object.entries(props.attributes).map(([key, { current, max }]) => (
          <Wrapper key={key}>
            <Attribute>
              {key}: {current}/{max}
            </Attribute>
          </Wrapper>
        ))}
      </div>
      <div className="middle-pane">

        <div id="output" style={{ 'fontSize': `${fontSize}px` }} onClick={focusInputBar}>
          <Messages messages={props.messages} messagesEndRef={messagesEndRef} />
          <div ref={messagesEndRef} />
        </div>
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
        <div className="font-size-container">
          {fontSize}pt
          <button className="font-size-button" onClick={() => handleSizeChange('+')}>+</button>
          <button className="font-size-button" onClick={() => handleSizeChange('-')}>-</button>
        </div>
        <StatBar
          health={health}
          mana={mana}
          stamina={stamina}
          exp={level >= maxLevel ? null : { current: experience, max: experience + experienceTNL }}
        />

        {Object.entries(props.metadata).map(([key, value]) => (
          <Wrapper key={key}>
            <Attribute>
              {key}: {JSON.stringify(value)}
            </Attribute>
          </Wrapper>
        ))}

        <StatValue center>{name} Lvl {level} {race} {playerClass}</StatValue>

        <br />

        <Map grid={props.map.grid} extras={props.map.extras} fontSize={fontSize} />
        <StatValue center>{room}</StatValue>

      </div>
    </div>
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
