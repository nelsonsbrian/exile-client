import React, { useState } from 'react';
import styled from 'styled-components';
import PlayerScore from './PlayerScore';
import { connect } from 'react-redux';
import EffectsPane from './EffectsPane';
import { colors } from './styled/theme';
import { PanelContainer, PanelInner } from './styled/Panel';
import GroupPane from './GroupPane';
import { setCharacterPanel } from '../actions';


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


function LeftPane({ attributes, group, imgPanel, imgBorder, settings, setCharacterPanel }) {

  const paneTab = settings.characterPane;
  return (
    <PaneContainer >


      <CharacterPanel imgPanel={imgPanel} imgBorder={imgBorder} >
        <PanelInner>
          {paneTab === 'player' && <PlayerScore />}
          {paneTab === 'group' && <GroupPane />}

        </PanelInner>
        <Tabs setCharacterPanel={setCharacterPanel} paneTab={paneTab} />
      </CharacterPanel>



      <PanelContainer imgPanel={imgPanel} imgBorder={imgBorder}>
        <PanelInner>
          <EffectsPane />
        </PanelInner>
      </PanelContainer>

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
  }
};


export default connect(mapStateToProps, { setCharacterPanel })(LeftPane);


const PaneContainer = styled.div`
  position: relative;
  padding: 15px;
  max-width: 445px;
  width: 445px;
  color: white;

  flex: 0 0 auto;
`;

const TabContainer = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 10px;
  justify-content: center;
  position: absolute;
  bottom: 15px;
  left: 0px;
`;

const CharacterPanel = styled(PanelContainer)`
  min-height: 500px;
  height: 500px;
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
