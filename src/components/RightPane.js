import React from 'react'
import styled, { css } from 'styled-components'
import { colors } from './styled/theme';
import { connect } from 'react-redux';
import GroupPane from './GroupPane';
import TargetsPane from './TargetsPane';
import ShowSocketData from './ShowSocketData';
import RoomPane from './RoomPane';
import { PanelContainer, PanelInner } from './styled/Panel';
import QuestsPane from './QuestsPane';

function RightPane({ combat, imgPanel, imgBorder, quests }) {

  return (
    <PaneContainer>

      <MapContainer imgPanel={imgPanel} imgBorder={imgBorder}>
        <MapInner>
          <RoomPane />
        </MapInner>
      </MapContainer>


      <QuestContainer imgPanel={imgPanel} imgBorder={imgBorder}>
        <QuestInner>
          <QuestsPane />
        </QuestInner>
      </QuestContainer>

      {/* <ShowSocketData quests={quests} /> */}

      <PositionDiv>
        <TargetsContainer imgPanel={imgPanel} imgBorder={imgBorder}>
          <TargetsInner>
            <TargetsPane />
          </TargetsInner>
        </TargetsContainer>
      </PositionDiv>

    </PaneContainer>
  )
}

const mapStateToProps = ({ data }) => {
  return {
    combat: data.combat,
    imgPanel: data.imgPanel,
    imgBorder: data.imgBorder,
    quests: data.quests,
    equipment: data.equipment,
  }
}

export default connect(mapStateToProps, null)(RightPane);

const PaneContainer = styled.div`
  position: relative;
  flex: 1 1 auto;
  padding: 15px;
`;

const MapContainer = styled(PanelContainer)`
  padding: 0 15px 15px 15px;
  height: 310px;
`;

const MapInner = styled(PanelInner)`
  display: flex;
  justify-items: center;
  flex-wrap: wrap;
  padding: 15px;

`;

const QuestContainer = styled(PanelContainer)`
  padding: 0;
  width: 300px;
  margin-top: 15px;
`;

const QuestInner = styled(PanelInner)`
  padding: 15px 15px 15px 15px;
  height: 400px;
  overflow-y: scroll;
`;

const PositionDiv = styled.div`
  position: absolute;
  left: 0; bottom: 0;
  margin: 15px;
`;

const TargetsContainer = styled(PanelContainer)`
  padding: 0;
  width: 150px;
  margin-top: 15px;
`;

const TargetsInner = styled(PanelInner)`
  padding: 15px 15px 15px 15px;
  height: 215px;
  overflow-y: scroll;
`;