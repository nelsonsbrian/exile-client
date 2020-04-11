import React from 'react'
import styled from 'styled-components'
import PlayerScore from './PlayerScore'
import { connect } from 'react-redux';
import ShowSocketData from './ShowSocketData';
import EffectsPane from './EffectsPane';
import { colors } from './styled/theme';
import MenuBar from './MenuBar'
import StatusBar from './StatusBar'

function LeftPane({ attributes, metadata, combat }) {

  return (
    <PaneContainer>

      <div/>
      <StatusBar/>
      <MenuBar />


    </PaneContainer>
  )
}


const mapStateToProps = ({ connection, data }) => {
  return {
    attributes: data.attributes,
    metadata: data.metadata,
    combat: data.combat,
  }
};


export default connect(mapStateToProps, null)(LeftPane);


const PaneContainer = styled.div`
  /* width: 30%; */
  /* min-width: 400px; */
  /* max-width: 30%; */
  display: grid;
  grid-template-columns: 60% 20% 20%;
  height: 50px;
  width: 100%;
  color: white;
  background: ${colors.primary};
`;
