import React, { useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { sendMessage, updateMessage, setFontSize } from '../actions/index';
import OutputScreen from './styled/OutputScreen';
import Messages from './Messages';
import InputPane from './InputPane';
import StatBar from './styled/StatBar';

const MiddlePane = ({ messages, settings, metadata, attributes }) => {
  const messagesEndRef = useRef(null);
  const [historyIndex, sethistoryIndex] = useState(1)
  const inputRef = useRef(null);
  const { fontSize } = settings;
  const { level, experience, experienceTNL, maxLevel, room } = metadata;


  // Focus the input text bar on initial load
  useEffect(() => {
    inputRef.current.focus();
  }, [inputRef]);

  // Select text in field when you scroll through inputHistory
  useEffect(() => {
    inputRef.current.select();
  }, [historyIndex]);

  return (
    <PaneContainer>
      <OutputScreen fontSize={fontSize} inputRef={inputRef}      >
        <Messages messages={messages} messagesEndRef={messagesEndRef} />
        <div ref={messagesEndRef} />
      </OutputScreen>

      <StatContainer>
        <StatBar
          attributes={attributes}
          exp={level >= maxLevel ? null : { current: experience, max: experience + experienceTNL }}
        />
      </StatContainer>

      <InputPane inputRef={inputRef}
        historyIndex={historyIndex}
        sethistoryIndex={sethistoryIndex}
      />
    </PaneContainer>
  );
}

const mapStateToProps = ({ connection, data }) => {
  return {
    attributes: data.attributes,
    metadata: data.metadata,
    inputHistory: connection.inputHistory,
    messages: connection.messages,
    settings: data.settings,
    metadata: data.metadata,

  }
};

export default connect(mapStateToProps, { updateMessage, sendMessage, setFontSize })(MiddlePane);

const PaneContainer = styled.div`
  height: 100%;
  /* min-height: 100vh; */
  /* height: 0vh; */
  /* display: flex; */
  /* flex-flow: column; */
  /* flex-wrap: wrap; */
  /* min-width: 500px; */
  /* max-width: 800px; */

  /* align-items: stretch; */
  flex: 0 0 auto;
`;

const StatContainer = styled.div`
  background: black;
`;