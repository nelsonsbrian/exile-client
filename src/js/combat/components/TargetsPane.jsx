import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Line, Circle } from 'rc-progress';
import { colors } from '../../shared/styled/theme';

function GroupPane({ targets }) {
  return (
    <GroupContainer >
      {targets.map(char => <Player key={char.id} char={char} />)}
    </GroupContainer>
  )
}

const mapStateToProps = ({ combat }) => {
  return {
    targets: combat.targets
  }

}

export default connect(mapStateToProps, null)(GroupPane);

const Bar = ({ current, max, attribute }) => {
  return (
    <BarContainer attribute={attribute} >
      <Line percent={current / max * 100}
        strokeWidth="50"
        trailWidth="50"
        trailColor={colors[`${attribute}Dark`]}
        strokeColor={colors[attribute] || 'white'}
        strokeLinecap="butt"
      />
    </BarContainer >
  )
};

const Player = ({ char }) => {
  const { health, mana, stamina } = char.attributes;
  return (
    <PlayerContainer>
      <Bar current={health && health.current || 0} max={health && health.max || 1} attribute='health' />
      <PlayerOverlay>
        <CharName>
          {char.name}
        </CharName>
      </PlayerOverlay>
    </PlayerContainer>
  )
};

const BarContainer = styled.div`
  height: ${({ attribute }) => attribute === 'health' ? '20px' : attribute === 'mana' ? '5px' : '5px'};
  width: 100%;
  padding: 1px 0px;
`;


const GroupContainer = styled.div`
  /* position: absolute;
  left: 0px;
  bottom: 0px; */
  display: flex;
  justify-items: center;
  flex-wrap: wrap;

  /* overflow-y: scroll; */
  /* height: 200px; */

  width: 100%;
  /* width: 120px; */
  /* padding: 15px 0px; */
  /* padding-left: 15px; */
  /* margin: 0px 15px; */
  color: ${colors.secondaryText};
  `;

const PlayerContainer = styled.div`
  position: relative;
  width: 100%;
  margin: 2px 2px;
`;

const PlayerOverlay = styled.div`
  color: black;
  font-size: .3em;
  height: 100%;
  padding: 2px 0px;
  color: ${colors.secondaryText};
  position: absolute;
  display: flex;
  justify-content: flex-start;
  flex-wrap: nowrap;

  left: 0;
  transform: translateY(-50%);
  top: 50%;
  /* font-weight: 500; */
`;


const GridChild = styled.div`
  /* border-left: solid 2px black; */
  padding: 2px 10px;
`;

const CharName = styled(GridChild)`
`;

