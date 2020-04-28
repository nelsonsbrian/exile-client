import React from 'react'
import styled, { css } from 'styled-components'
import { colors } from '../shared/styled/theme';
import TargetsPane from '../combat/components/TargetsPane';
import ChannelPane from '../../components/ChannelPane';
import { PanelContainer, PanelInner } from '../shared/components/Panel';
import QuestsPane from '../quests/QuestContainer';
import EffectsPane from '../../components/EffectsPane';

export default function RightPane({ imgPanel, imgBorder }) {

  return (
    <PaneContainer>

      <ChannelContainer imgPanel={imgPanel} imgBorder={imgBorder}>
        <ChannelInner>
          <ChannelPane />
        </ChannelInner>
      </ChannelContainer>

      <QuestContainer imgPanel={imgPanel} imgBorder={imgBorder}>
        <QuestInner>
          <QuestsPane />
        </QuestInner>
      </QuestContainer>


      <EffectsContainer imgPanel={imgPanel} imgBorder={imgBorder}>
        <PanelInner>
          <EffectsPane />
        </PanelInner>
      </EffectsContainer>

      <TargetsContainer imgPanel={imgPanel} imgBorder={imgBorder}>
        <TargetsInner>
          <TargetsPane />
        </TargetsInner>
      </TargetsContainer>

    </PaneContainer>
  )
}

const PaneContainer = styled.div`
  position: relative;
  flex: 1 1 auto;
  padding: 15px;

  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);

  @media(max-width: 1750px) {
    display: none;
  }

`;

const QuestContainer = styled(PanelContainer)`
  padding: 0;
  grid-column: 7 / 11;
  grid-row: 1 / 6;
`;

const QuestInner = styled(PanelInner)`
  padding: 15px 15px 15px 15px;
  overflow-y: scroll;
`;

const TargetsContainer = styled(PanelContainer)`
  padding: 0;
  grid-column: 1 / 3;
  grid-row: 9 / 11;
`;

const TargetsInner = styled(PanelInner)`
  padding: 15px 15px 15px 15px;
  overflow-y: scroll;
`;

const ChannelContainer = styled(PanelContainer)`
  padding: 0;
  grid-column: 1 / 7;
  grid-row: 1 / 6;
  `;

const ChannelInner = styled(PanelInner)`
  padding: 15px 0px 15px 15px;
  height: 100%;
`;

const EffectsContainer = styled(PanelContainer)`
  grid-column: 1 / 5;
  grid-row: 6 / 9;
`;