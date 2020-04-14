import React from 'react'
import styled, { css } from 'styled-components'
import { colors } from './styled/theme';
import { connect } from 'react-redux';
import GroupPane from './GroupPane';
import TargetsPane from './TargetsPane';
import ShowSocketData from './ShowSocketData';
import RoomPane from './RoomPane';
import { PanelContainer, PanelInner } from './styled/Panel';

function RightPane({ combat, imgPanel, imgBorder, equipment }) {

  return (
    <PaneContainer>

      <MapContainer imgPanel={imgPanel} imgBorder={imgBorder}>
        <MapInner>
          <RoomPane />
        </MapInner>
      </MapContainer>

      {combat.targets.length ? <TargetsPane /> : null}

      {/* <ShowSocketData equipment={equipment} /> */}


    </PaneContainer>
  )
}

const mapStateToProps = ({ data }) => {
  return {
    combat: data.combat,
    imgPanel: data.imgPanel,
    imgBorder: data.imgBorder,
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
`;

const MapInner = styled(PanelInner)`
  display: flex;
  justify-items: center;
  flex-wrap: wrap;
  padding: 15px;
`;