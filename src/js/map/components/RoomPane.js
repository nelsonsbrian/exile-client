import React from 'react'
import styled, { css } from 'styled-components'
import Map from '../Map'
import { colors } from './styled/theme';
import { connect } from 'react-redux';

function RoomPane({ map, metadata }) {

  const { room, roomDesc } = metadata;
  return (
    <>
      <RoomHeader>
        <RoomName>{room}</RoomName>
      </RoomHeader>
      <RoomContainer>
        <Map grid={map.grid} extras={map.extras} />
        <RoomText>
          <RoomDesc>{roomDesc}</RoomDesc>
        </RoomText>
      </RoomContainer>
    </>
  )
}

const mapStateToProps = ({ data, metadata }) => {
  return {
    map: data.map.small,
    metadata,
  }
}

export default connect(mapStateToProps, null)(RoomPane);

const RoomContainer = styled.div`
  flex: 1 1 auto;
  display: flex;
`;

const RoomHeader = styled.div`
`;

const RoomName = styled.p`
  font-size: 1.8em;
  margin: 0;
  margin-bottom: 5px;
  font-weight: 500;
  font-variant: small-caps;
  color: white;
`;

const RoomText = styled.div`
  padding: 0px 10px 30px 10px;
  max-height: 225px;
  overflow-y: scroll;

`;

const RoomDesc = styled.p`
  margin: 0;
  font-size: 1.05em;
  line-height: 1.6;
  height: fit-content;
  color: ${colors.secondaryText};

`;