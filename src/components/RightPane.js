import React from 'react'
import styled, { css } from 'styled-components'
import MenuBar from './MenuBar'
import Map from './Map'
import { colors } from './styled/theme';
import { connect } from 'react-redux';
import StatBar from './styled/StatBar';
import ShowSocketData from './ShowSocketData';
import GroupPane from './GroupPane';
import TargetsPane from './TargetsPane';

function RightPane({ attributes, map, metadata, settings, group, combat }) {

  const { fontSize } = settings;
  const { room } = metadata;

  const inGroup = !!(group.front.length || group.middle.length || group.back.length);

  return (
    <PaneContainer>
      {/* <MenuBar /> */}

      <Map grid={map.grid} extras={map.extras} fontSize={fontSize} />
      <br />


      <StatValue center>{room}</StatValue>
      <br />

      {combat.targets.length ? <TargetsPane /> : null}

      {inGroup && <GroupPane />}

      {/* <ShowSocketData settings={settings.player.other} /> */}


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
    combat: data.combat,
  }
}

export default connect(mapStateToProps, null)(RightPane);

const PaneContainer = styled.div`
  /* width: 30%; */
  /* min-width: 200px; */
  position: relative;
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