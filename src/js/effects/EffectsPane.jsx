import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Line, Circle } from 'rc-progress';
import { colors } from '../shared/styled/theme';
import bullet from '../../img/bullet.jpg';
import useDispatchTimer from '../utils/hooks/useDispatchTimer';

export default function EffectsPane({ effects, imgPanel, imgBorder, updateTimers }) {

  useDispatchTimer(updateTimers, 1000);

  return (
    <EffectsContent>
      {effects
        .filter(e => e.flags[0] === 'DEBUFF')
        .map(effect => <Effect key={effect.uuid} effect={effect} />)}
      {effects
        .filter(e => e.flags[0] === 'BUFF')
        .map(effect => <Effect key={effect.uuid} effect={effect} />)}
    </EffectsContent>
  )
}

const EffectsContent = styled.div`
  height: 100%;
  overflow-y: auto;
`;

const Effect = ({ effect }) => {
  const { flags = [], name, short, remaining, duration, stacks, maxStacks } = effect;
  const remainingFormat = remaining === Infinity ? 0 : remaining;
  const durationFormat = duration === Infinity ? 1 : duration;
  const stackString = (maxStacks > 1) ? `(${stacks}/${maxStacks}) ` : '';
  return (
    <EffectRow>
      <Bar
        current={remainingFormat || 0}
        max={durationFormat || 1}
        flags={flags}
      />
      <EffectOverlay>
        <EffectDuration>
          {short}
        </EffectDuration>
        <EffectName>
          {stackString}{name}
        </EffectName>
      </EffectOverlay>
    </EffectRow>
  )
};


const EffectRow = styled.div`
  position: relative;
  width: 100%;
  height: 20px;

`;

const EffectOverlay = styled.div`
  color: black;
  font-size: .8em;
  color: ${colors.secondaryText};
  position: absolute;
  display: flex;
  /* justify-content: flex-start; */

  left: 0;
  transform: translateY(-50%);
  top: 50%;
  font-weight: 500;
`;

const GridChild = styled.div`
  /* border-left: solid 2px black; */
  padding: 2px 10px;
`;

const EffectDuration = styled(GridChild)`
  width: 50px;
`;

const EffectName = styled(GridChild)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Bar = ({ current, max, flags = [] }) => {
  return (
    <BarContainer >
      <Line percent={current / max * 100}
        strokeWidth="50"
        trailWidth="50"
        trailColor={getColor(flags, 'trail')}
        strokeColor={getColor(flags, 'stroke')}
        strokeLinecap="butt"
      />
    </BarContainer >
  )
};

const BarContainer = styled.div`
  height: 20px;
  width: 100%;
  padding: 2px 0px;
`;


function getColor(flags, type) {
  if (flags[0] === "BUFF") {
    if (type === 'stroke') { return colors.cyan }
    if (type === 'trail') { return colors.complementaryDark1 }
  } else if (flags[0] = "DEBUFF") {
    if (type === 'stroke') { return colors.complementaryDark2 }
    if (type === 'trail') { return colors.primary }
  } else {
    if (type === 'stroke') { return colors.primary }
    if (type === 'trail') { return colors.primaryText }
    return colors.secondary;
  }

}

