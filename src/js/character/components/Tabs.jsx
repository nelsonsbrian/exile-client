import React from 'react'
import styled from 'styled-components';
import { colors } from '../../../components/styled/theme';

export default function Tabs({ setCharacterPanel, paneTab }) {
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

const TabContainer = styled.div`
  width: 100%;
  display: flex;
  /* margin-bottom: 10px; */
  justify-content: center;
  position: absolute;
  bottom: 10px;
  left: 0px;
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