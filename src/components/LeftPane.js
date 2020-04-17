import React, { useState } from 'react';
import styled from 'styled-components';
import PlayerScore from './PlayerScore';
import { connect } from 'react-redux';
import EffectsPane from './EffectsPane';
import EquipmentPane from './EquipmentPane';
import { colors } from './styled/theme';
import { PanelContainer, PanelInner } from './styled/Panel';
import GroupPane from './GroupPane';
import ShowSocketData from './ShowSocketData';
import { setCharacterPanel } from '../actions';
import RoomPane from './RoomPane';
import Map from './Map';


const Tabs = ({ paneTab, setCharacterPanel }) => {

  return (
    <TabContainer>
      <Tab
        paneTab={paneTab}
        panelType="player"
        onClick={() => setCharacterPanel("player")}>
        Player
        </Tab>
      <Tab
        paneTab={paneTab}
        panelType="equipment"
        onClick={() => setCharacterPanel("equipment")}>
        Equipment
        </Tab>
      <Tab
        paneTab={paneTab}
        panelType="group"
        onClick={() => setCharacterPanel("group")}>
        Group
        </Tab>
    </TabContainer>
  )
}


function LeftPane({ metadata, imgPanel, imgBorder, settings, setCharacterPanel, map }) {

  const { room } = metadata;
  const paneTab = settings.characterPane;
  return (
    <PaneContainer >


      <CharacterPanel imgPanel={imgPanel} imgBorder={imgBorder} >
        <PanelInner>
          {paneTab === 'player' && <PlayerScore />}
          {paneTab === 'group' && <GroupPane />}
          {paneTab === 'equipment' && <EquipmentPane />}

        </PanelInner>
        <Tabs setCharacterPanel={setCharacterPanel} paneTab={paneTab} />
      </CharacterPanel>

      <MapContainer imgPanel={imgPanel} imgBorder={imgBorder}>
        <MapInner>
          <MapTitle>{room}</MapTitle>
          <Map grid={map.grid} extras={map.extras} />
        </MapInner>
      </MapContainer>

      {/* <ShowSocketData channels={channels} /> */}


    </PaneContainer >
  )
}


const mapStateToProps = ({ connection, data }) => {
  return {
    attributes: data.attributes,
    group: data.group,
    settings: data.settings,
    combat: data.combat,
    imgPanel: data.imgPanel,
    imgBorder: data.imgBorder,
    map: data.map.small,
    channels: data.channels,
    metadata: data.metadata,

  }
};


export default connect(mapStateToProps, { setCharacterPanel })(LeftPane);


const PaneContainer = styled.div`
  flex: 0 0 auto;
  position: relative;
  padding: 15px;
  max-width: 445px;
  width: 445px;
  color: white;

  display: flex;
  flex-direction: column;

  @media(max-width: 1350px) {
    display: none;
  }
`;

const TabContainer = styled.div`
  width: 100%;
  display: flex;
  /* margin-bottom: 10px; */
  justify-content: center;
  position: absolute;
  bottom: 10px;
  left: 0px;
`;

const CharacterPanel = styled(PanelContainer)`
  flex: 0 0 auto;
  min-height: 500px;
  height: 500px;
  margin-bottom: 15px;
`;

const Tab = styled.div`
  padding: 10px;
  color: ${({ paneTab, panelType }) => paneTab === panelType ? colors.primary : 'black'};
  background: ${({ paneTab, panelType }) => paneTab === panelType ? colors.primaryText : colors.tan};
  border: 2px solid ${({ paneTab, panelType }) => paneTab === panelType ? colors.primary : 'transparent'};
  font-weight: 600;
  cursor: pointer;
  margin: 0px 7px 0px 7px;
  &:hover{
    color: black;
    background: white;
    border: 2px solid ${colors.primaryText};
  }
`;

const MapContainer = styled(PanelContainer)`
  flex: 1 1 auto;

  padding: 0 10px 10px 10px;
  height: 310px;
  display: flex;
  justify-items: center;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const MapInner = styled(PanelInner)`
  display: flex;
  /* justify-items: center; */
  align-items: center;
  flex-direction: column;
  width: 100%;
  /* flex-wrap: wrap; */
  /* padding: 15px; */

`;

const MapTitle = styled.div`
  font-size: 1.4em;
  width: 100%;
  text-align: center;
  margin: 0;
  margin-bottom: 15px;
  font-weight: 500;
  font-variant: small-caps;
  color: white;
`;