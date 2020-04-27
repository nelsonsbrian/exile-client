import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { colors } from './styled/theme';
import { PanelContainer, PanelInner } from './styled/Panel';
import ShowSocketData from './ShowSocketData';
import { setCharacterPanel } from '../js/settings/settingsActions';
import CharacterPanel from '../js/character/CharacterContainer';
import RoomPane from './RoomPane';
import Map from './Map';

function LeftPane({ metadata, imgPanel, imgBorder, settings, setCharacterPanel, map }) {

  const { room } = metadata;
  const paneTab = settings.characterPane;
  return (
    <PaneContainer >

      <CharacterPanel />

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


const mapStateToProps = ({ connection, data, settings }) => {
  return {
    attributes: data.attributes,
    group: data.group,
    settings,
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