import React from 'react'
import styled, { css } from 'styled-components'
import { colors } from './styled/theme';
import { connect } from 'react-redux';
import TargetsPane from './TargetsPane';
import ChannelPane from './ChannelPane';
import { PanelContainer, PanelInner } from './styled/Panel';
import QuestsPane from './QuestsPane';
import EffectsPane from './EffectsPane';

function RightPane({ combat, imgPanel, imgBorder, channels }) {

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

const mapStateToProps = ({ data, connection }) => {
  return {
    combat: data.combat,
    imgPanel: data.imgPanel,
    imgBorder: data.imgBorder,
    equipment: data.equipment,
    channels: data.channels,
  }
}

export default connect(mapStateToProps, null)(RightPane);

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