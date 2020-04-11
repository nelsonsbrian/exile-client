import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Line, Circle } from 'rc-progress';
import { colors } from './styled/theme';

function GroupPane({ targets }) {
  return (
    <>
      <GroupContainer >
        <GroupContent>
          {targets.map(char => <Player key={char.id} char={char} />)}
        </GroupContent>
      </GroupContainer>
    </>
  )
}

const mapStateToProps = ({ data }) => {
  return {
    targets: data.combat.targets
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
      {/* <Bar current={mana && mana.current || 0} max={mana && mana.max || 1} attribute='mana' /> */}
      {/* <Bar current={stamina && stamina.current || 0} max={stamina && stamina.max || 1} attribute='stamina' /> */}
      <PlayerOverlay>
        {/* {char.isLeader && <Leader />} */}
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
  position: absolute;
  left: 0px;
  bottom: 0px;

  /* min-height: 100%; */
  /* width: 100%; */
  width: 120px;
  /* min-width: 100%; */
  padding: 15px 0px;
  padding-left: 15px;
  margin: 0px 15px;
	/* background-color: rgba(210,180,140, .9); */
  color: ${colors.secondaryText};
  background: rgba(0, 0, 0, 0.6);
  /* padding: 20px; */
  border-radius: 4px;
  box-shadow: inset 0px 0px 10px 5px ${colors.dark};
  `;

const PlayerContainer = styled.div`
  position: relative;
  width: 100%;
  margin: 2px 2px;
  /* width: 100%; */
  /* padding: 10px; */
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

const GroupContent = styled.div`
  overflow-y: scroll;
  display: flex;
  flex-wrap: wrap;
`;

const GroupTitle = styled.div`
  text-align: center;
  font-size: 32px;
  font-weight: 500;
  color: ${colors.primaryText};
`;

const PositionTitle = styled.div`
  font-weight: 500;
  margin-left: 5px;
`;
