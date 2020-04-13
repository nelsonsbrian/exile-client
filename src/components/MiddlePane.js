import React, { useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux';
import { colors } from './styled/theme';
import styled from 'styled-components';
import { sendMessage, updateMessage, setFontSize } from '../actions/index';
import OutputScreen from './styled/OutputScreen';
import Messages from './Messages';
import InputPane from './InputPane';
import Queue from './styled/Queue';
import StatBar from './styled/StatBar';
import { PanelContainer, PanelInner } from './styled/Panel';

const MiddlePane = ({ messages, settings, metadata, attributes, combat, imgPanel, imgBorder }) => {
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
    <PaneContainer imgPanel={imgPanel} imgBorder={imgBorder}>
      <PaneInner>
        <OutputScreen fontSize={fontSize} inputRef={inputRef}      >
          <Messages messages={messages} messagesEndRef={messagesEndRef} />
          <div ref={messagesEndRef} />
        </OutputScreen>

        <StatContainer>
          <StatBar
            attributes={attributes}
            exp={level >= maxLevel ? null : { current: experience, max: experience + experienceTNL }}
          />

          <Queue commands={metadata.commands} />

          <StatBar
            targetBar
            target={combat.target}
            attributes={combat.target.attributes}
          />
        </StatContainer>

        <InputPane inputRef={inputRef}
          historyIndex={historyIndex}
          sethistoryIndex={sethistoryIndex}
        />
      </PaneInner>
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
    combat: data.combat,
    imgPanel: data.imgPanel,
    imgBorder: data.imgBorder,
  }
};

export default connect(mapStateToProps, { updateMessage, sendMessage, setFontSize })(MiddlePane);

const PaneContainer = styled(PanelContainer)`
  /* padding: 0 15px 15px 15px; */
  height: 100%;
  width: 900px;
  margin-top: 15px;
  margin-bottom: 15px;
  flex: 0 0 auto;
`;

const PaneInner = styled(PanelInner)`

`;

const StatContainer = styled.div`
  background: rgba(0, 0, 0, 0.6);

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;