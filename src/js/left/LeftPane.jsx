import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from '../shared/styled/theme';
import { PanelContainer, PanelInner } from '../shared/components/Panel';
import CharacterPanel from '../character/CharacterContainer';
import MapPanel from '../map/MapContainer';

export default function LeftPane({ }) {

  return (
    <PaneContainer >

      <CharacterPanel />

      <MapPanel />

    </PaneContainer >
  )
}


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