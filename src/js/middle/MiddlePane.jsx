import React, { useEffect, useState, useRef } from 'react';
import { colors } from '../shared/styled/theme';
import styled from 'styled-components';
import { sendMessage, updateMessage } from '../connection/connectionActions';
import OutputScreen from './components/OutputScreen';
import Messages from '../connection/components/Messages';
import InputPane from './components/InputPane';
import Queue from './components/Queue';
import StatBar from './components/StatBar';
import ActionBar from '../actionBar/ActionBarContainer';

import { PanelContainer, PanelInner } from '../shared/components/Panel';

export default function MiddlePane({ messages, settings, metadata, attributes, combat, imgPanel, imgBorder, updateQueue }) {
  const messagesEndRef = useRef(null);
  const [historyIndex, sethistoryIndex] = useState(-1)
  const inputRef = useRef(null);
  const { fontSize } = settings.account;
  const { level, experience, experienceTNL, maxLevel, room } = metadata;


  // Focus the input text bar on initial load
  useEffect(() => {
    inputRef.current.focus();
  }, [inputRef]);

  // Select text in field when you scroll through inputHistory
  useEffect(() => {
    if (historyIndex !== -1) { inputRef.current.select(); }
  }, [historyIndex]);

  const target = combat.targets.find(tar => tar.id === combat.target) || {};
  return (
    <PaneContainer imgPanel={imgPanel} imgBorder={imgBorder}>
      <PaneInner>
        <OutputScreen fontSize={fontSize} inputRef={inputRef}      >
          <Messages messages={messages} messagesEndRef={messagesEndRef} />
          <div ref={messagesEndRef} />
        </OutputScreen>

        <Test>
          <StatContainer>
            <StatBar
              attributes={attributes}
              exp={level >= maxLevel ? null : { current: experience, max: experience + experienceTNL }}
            />

            <Queue
              commands={metadata.commands}
              updateQueue={updateQueue}
              fontSize={fontSize}
            />

            <StatBar
              targetBar
              target={target}
              attributes={target.attributes || {}}
            />
          </StatContainer>

          <ActionBar />
        </Test>

        <InputPane inputRef={inputRef}
          historyIndex={historyIndex}
          sethistoryIndex={sethistoryIndex}
        />
      </PaneInner>
    </PaneContainer>
  );
}

const PaneContainer = styled(PanelContainer)`
  /* padding: 0 15px 15px 15px; */
  /* height: 100%;
  height: 600px; */
  width: 900px;
  margin-top: 15px;
  margin-bottom: 15px;
  flex: 0 0 auto;
`;

const PaneInner = styled(PanelInner)`
  height: 100%;
  display: flex;
  /* flex-wrap: wrap; */
  flex-flow: column;

  z-index:auto;

`;

const StatContainer = styled.div`
  background: rgba(0, 0, 0, 0.6);
  flex: 0 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  width: 100%;
`;

const Test = styled.div`
  /* height: 145px; */
  flex: 0 0 auto;

  position: relative;
  display: flex;
  flex-wrap: wrap;
`;