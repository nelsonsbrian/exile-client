import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from '../shared/styled/theme';
import { PanelContainer, PanelInner } from '../shared/components/Panel';
import Tabs from './components/Tabs';

import PlayerScore from './components/PlayerScore';
import GroupPane from './components/GroupPane';
import EquipmentPane from './components/EquipmentPane';


export default ({ metadata, imgPanel, imgBorder, settings, setCharacterPanel, map }) => {

  const { room } = metadata;
  const paneTab = settings.characterPane;
  return (
    <CharacterPanel imgPanel={imgPanel} imgBorder={imgBorder} >
      <PanelInner>
        {paneTab === 'player' && <PlayerScore />}
        {paneTab === 'group' && <GroupPane />}
        {paneTab === 'equipment' && <EquipmentPane />}

      </PanelInner>
      <Tabs setCharacterPanel={setCharacterPanel} paneTab={paneTab} />
    </CharacterPanel>
  )
}

const CharacterPanel = styled(PanelContainer)`
  flex: 0 0 auto;
  min-height: 500px;
  height: 500px;
  margin-bottom: 15px;
`;


