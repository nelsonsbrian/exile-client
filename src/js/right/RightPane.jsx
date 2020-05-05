import React from 'react'
import styled, { css } from 'styled-components'
import { colors } from '../shared/styled/theme';
import TargetsPane from '../combat/components/TargetsPane';
import ChannelPane from '../channels/ChannelContainer';
import { PanelContainer, PanelInner } from '../shared/components/Panel';
import QuestsPane from '../quests/QuestContainer';
import EffectsPane from '../effects/EffectsContainer';

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
        <EffectsInner>
          <EffectsPane />
        </EffectsInner>
      </EffectsContainer>

      <TargetsContainer imgPanel={imgPanel} imgBorder={imgBorder}>
        <TargetsInner>
          <TargetsPane />
        </TargetsInner>
      </TargetsContainer>

      <TargetEffectsContainer imgPanel={imgPanel} imgBorder={imgBorder}>
        <EffectsInner>
          <EffectsPane target />
        </EffectsInner>
      </TargetEffectsContainer>

    </PaneContainer>
  )
}

const PaneContainer = styled.div`
  position: relative;
  flex: 1 1 auto;
  padding: 15px;
  max-width: 1000px;

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
  grid-row: 6 / 11;
`;

const EffectsInner = styled(PanelInner)`
  height: 100%;
`;

const TargetEffectsContainer = styled(PanelContainer)`
  grid-column: 5 / 9;
  grid-row: 6 / 9;
`;

const TargetsContainer = styled(PanelContainer)`
  padding: 0;
  grid-column: 5 / 7;
  grid-row: 9 / 11;
`;
