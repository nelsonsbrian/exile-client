import React from 'react';
import { Line, Circle } from 'rc-progress';
import styled from 'styled-components';
import { colors } from './theme';

export default ({ health, mana, stamina, exp }) => {

  return (
    <StatBarContainer>
      <Bar current={health.current} max={health.max} attribute='health' />
      {exp && <Bar current={exp.current} max={exp.max} height='5px' attribute='exp' />}
      <Bar current={mana.current} max={mana.max} height='11px' attribute='mana' />
      <Bar current={stamina.current} max={stamina.max} height='11px' attribute='stamina' />
      <AttributeContainer>
        <AttributeAmount amount={health} attribute='health'>
          {health.current.toLocaleString()} hp
      </AttributeAmount>
        <AttributeAmount amount={mana} attribute='mana'>
          {mana.current.toLocaleString()} mn
      </AttributeAmount>
        <AttributeAmount amount={stamina} attribute='stamina'>
          {stamina.current.toLocaleString()} st
      </AttributeAmount>
      </AttributeContainer>
    </StatBarContainer>
  )
}

const StatBarContainer = styled.div`
  width: 100%;
  max-width: 350px;
  height: 130px;
  padding: 0 15px;
  display: flex;
  flex-flow: column;
  justify-content: center;
`;

const Bar = ({ current, max, attribute, height, width }) => {
  return (
    <div style={{ height: height || '40px', width: width || '100%', padding: '2px 0px' }}>
      <Line percent={current / max * 100}
        strokeWidth="25"
        trailWidth="25"
        trailColor="black"
        strokeColor={colors[attribute] || 'white'}
        strokeLinecap="butt"
      />
    </div>
  )
};

const AttributeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(0, 0, 0, .5);
  height: 25px;
  padding: 0px 10px;
`;

const AttributeAmount = styled.div`
  color: ${props => colors[props.attribute] || 'white'};
  height: 100%;
`;


// <Amount> {current.toLocaleString()}</Amount>
// If we want the #s on the bars themselves, this will do that.
const Amount = styled.div`
color: black;
font-size: 1.5em;
position: absolute;
display: inline-block;
right: 0;
transform: translateY(-55%);
padding: 0 15px;
top: 50%;
font-weight: 500;
`;