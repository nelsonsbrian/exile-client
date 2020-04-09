import React from 'react'
import styled, { css } from 'styled-components'
import MenuBar from './MenuBar'
import Map from './Map'
import { colors } from './styled/theme';
import { connect } from 'react-redux';
import StatBar from './styled/StatBar';
import ShowSocketData from './ShowSocketData';
import GroupPane from './GroupPane';

function RightPane({ attributes, map, metadata, settings, group }) {

  const { fontSize } = settings;
  const { level, experience, experienceTNL, maxLevel, room } = metadata;


  return (
    <PaneContainer>
      <MenuBar />

      <Map grid={map.grid} extras={map.extras} fontSize={fontSize} />
      <br />



      <StatValue center>{room}</StatValue>
      <br />

      <GroupPane/>

      <ShowSocketData group={group} />


    </PaneContainer>
  )
}

const mapStateToProps = ({ data }) => {
  return {
    attributes: data.attributes,
    map: data.map.small,
    metadata: data.metadata,
    settings: data.settings,
    effects: data.effects,
    group: data.group,
  }
}

export default connect(mapStateToProps, null)(RightPane);

const PaneContainer = styled.div`
  /* width: 30%; */
  /* min-width: 200px; */
  max-width: 30%;
  /* background: #444; */
  flex: 1 1 auto;
`;

const StatValue = styled.span`
${({ center }) => center && css`
  text-align: center;
  display: block;
`}
  color: ${colors.bwhite};
  font-size: 1.75em;
`;