import React from 'react'
import styled from 'styled-components'
import PlayerScore from './PlayerScore'
import { connect } from 'react-redux';

function LeftPane({ attributes, metadata }) {
  return (
    <PaneContainer>
      <PlayerScore attributes={attributes} metadata={metadata} />
    </PaneContainer>
  )
}


const mapStateToProps = ({ connection, data }) => {
  return {
    attributes: data.attributes,
    metadata: data.metadata,
  }
};


export default connect(mapStateToProps, null)(LeftPane);


const PaneContainer = styled.div`
  /* width: 30%; */
  min-width: 400px;
  max-width: 30%;
  color: white;
  /* background: #444; */
  flex: 1 1 auto;
`;
