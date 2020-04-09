import React from 'react'
import styled from 'styled-components'
import PlayerScore from './PlayerScore'
import { connect } from 'react-redux';
import ShowSocketData from './ShowSocketData';
import EffectsPane from './EffectsPane';

function LeftPane({ attributes, metadata, combat }) {
  return (
    <PaneContainer>
      <PlayerScore attributes={attributes} metadata={metadata} />


      <EffectsPane/>

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
  max-width: 445px;
  width: 445px;
  color: white;
  /* background: #444; */
  flex: 1 1 auto;
`;
