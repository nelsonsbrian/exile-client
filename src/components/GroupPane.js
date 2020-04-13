import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Line, Circle } from 'rc-progress';
import { colors } from './styled/theme';

function GroupPane({ group }) {
  const inGroup = !!(group.front.length || group.middle.length || group.back.length);

  return (
    <GroupContainer >
      {inGroup ?
        <GroupContent>
          <PositionTitle>Front: ({group.front.length})</PositionTitle>
          <GroupPosition>
            {group.front.map(char => <Player key={char.id} char={char} />)}
          </GroupPosition>
          <PositionTitle>Middle: ({group.middle.length})</PositionTitle>
          <GroupPosition>
            {group.middle.map(char => <Player key={char.id} char={char} />)}
          </GroupPosition>
          <PositionTitle>Back: ({group.back.length})</PositionTitle>
          <GroupPosition>
            {group.back.map(char => <Player key={char.id} char={char} />)}
          </GroupPosition>
        </GroupContent>
        : <NoGroup>You are not currently in a group</NoGroup>
      }
    </GroupContainer>
  )
}

const mapStateToProps = ({ data }) => {
  return {
    group: data.group
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
      <Bar current={mana && mana.current || 0} max={mana && mana.max || 1} attribute='mana' />
      <Bar current={stamina && stamina.current || 0} max={stamina && stamina.max || 1} attribute='stamina' />
      <PlayerOverlay>
        {char.isLeader && <Leader />}
        <CharName>
          {char.name}
        </CharName>
      </PlayerOverlay>
    </PlayerContainer>
  )
};

const BarContainer = styled.div`
  height: ${({ attribute }) => attribute === 'health' ? '36px' : attribute === 'mana' ? '5px' : '5px'};
  width: 100%;
  padding: 1px 0px;
`;


const GroupContainer = styled.div`
  width: 100%;
  min-width: 100%;
  padding: 15px;
  height: 400px;
  color: ${colors.secondaryText};
  `;


const PlayerOverlay = styled.div`
  font-size: 1.0em;
  height: 100%;
  padding: 5px 0px;
  color: ${colors.secondaryText};
  position: absolute;
  display: flex;
  justify-content: flex-start;
  flex-wrap: nowrap;

  left: 0;
  transform: translateY(-50%);
  top: 50%;
  font-weight: 600;
`;

const GroupPosition = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-gap: 5px;
`;

const PlayerContainer = styled.div`
  position: relative;
`;

const GridChild = styled.div`
  padding: 2px 10px;
`;

const CharName = styled(GridChild)`
`;

const GroupContent = styled.div`
  overflow-y: scroll;
  display: flex;
  flex-wrap: wrap;
`;

const PositionTitle = styled.div`
  font-weight: 600;
  margin: 5px;
`;

const NoGroup = styled.div`
  font-weight: 600;
  text-align: center;
  font-size: 24px;
  height: 100%;
  display: flex;
  align-items: center;
`;

const Leader = () => {
  return (
    <SVGContainer>
      <SVGLink >
        <SVGIcon viewBox="0 0 71 71">
          <path d="M72.771,30.157c-0.607-0.389-1.395-0.354-1.965,0.092l-14.07,11.014l-8.97-10.764c-0.646-0.773-1.966-0.775-2.611,0.002   l-8.967,10.762L22.114,30.249c-0.567-0.445-1.355-0.48-1.965-0.092c-0.607,0.387-0.903,1.119-0.737,1.822l5.972,25.209   c0.112,3.973,3.379,7.17,7.379,7.17h27.395c3.999,0,7.266-3.197,7.378-7.17l5.973-25.209   C73.675,31.276,73.379,30.544,72.771,30.157z M64.185,56.587c-0.029,0.127-0.045,0.26-0.045,0.391c0,2.195-1.786,3.98-3.981,3.98   H32.764c-2.196,0-3.982-1.785-3.982-3.98c0-0.131-0.016-0.264-0.046-0.391l-4.896-20.672l11.551,9.039   c0.724,0.57,1.767,0.457,2.354-0.25l8.716-10.461l8.719,10.463c0.586,0.703,1.629,0.818,2.354,0.248l11.549-9.039L64.185,56.587z" />
        </SVGIcon>
      </SVGLink>
    </SVGContainer>
  );
}

const SVGContainer = styled.div`
  display: inline-block;
  width: 30px;
  height: 30px;

`;


const SVGLink = styled.a`
  `;

const SVGIcon = styled.svg`
  transform: translateY(-20%);
  fill: ${colors.secondaryText};
  width: 30px;
  height: 30px;
`;