import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Line, Circle } from 'rc-progress';
import { colors } from './styled/theme';

function EffectsPane({ effects }) {
  return (
    <>
      <EffectsTitle>Effects:</EffectsTitle>
      <EffectContainer >
        <EffectsContent>
          {effects
            .filter(e => e.flags[0] === 'DEBUFF')
            .map(effect => <Effect key={effect.uuid} effect={effect} />)}
          {effects
            .filter(e => e.flags[0] === 'BUFF')
            .map(effect => <Effect key={effect.uuid} effect={effect} />)}
        </EffectsContent>
      </EffectContainer>
    </>
  )
}

const mapStateToProps = ({ data }) => {
  return {
    effects: data.effects
  }

}

export default connect(mapStateToProps, null)(EffectsPane);

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
function getColor(flags, type) {
  if (flags[0] === "BUFF") {
    if (type === 'stroke') { return colors.cyan }
    if (type === 'trail') { return colors.complementaryDark1 }
  } else if (flags[0] = "DEBUFF") {
    if (type === 'stroke') { return colors.primary }
    if (type === 'trail') { return colors.complementaryDark2 }
  } else {
    if (type === 'stroke') { return colors.primary }
    if (type === 'trail') { return colors.primaryText }
    return colors.secondary;
  }

}

const Effect = ({ effect }) => {
  const { current, max, flags = [] } = effect;
  return (
    <EffectRow>
      <Bar
        current={effect.remaining || 0}
        max={effect.duration || 1}
        flags={effect.flags}
      />
      <EffectOverlay>
        <EffectDuration>
          {effect.short}
        </EffectDuration>
        <EffectName>
          {effect.name}
        </EffectName>
      </EffectOverlay>
    </EffectRow>
  )
};

const BarContainer = styled.div`
  height: 20px;
  width: 100%;
  padding: 2px 0px;
`;


const EffectContainer = styled.div`
  /* min-height: 100%; */
  /* width: 100%; */
  padding: 25px 0px;
  padding-left: 15px;
  /* height: 200px; */
  height: 400px;
  margin: 0px 15px;
  /* border: 10px solid black; */

  /* margin: 20px; */
	/* background-color: rgba(210,180,140, .9); */
  color: ${colors.secondaryText};
  background: rgba(0, 0, 0, 0.6);
  /* padding: 20px; */
  border-radius: 4px;
  box-shadow: inset 0px 0px 10px 5px ${colors.dark};
  `;

const EffectRow = styled.div`
  position: relative;
  width: 100%;
  
`;

const EffectOverlay = styled.div`
  color: black;
  font-size: .8em;
  color: ${colors.secondaryText};
  position: absolute;
  display: flex;
  justify-content: flex-start;

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

  `;

const EffectsContent = styled.div`
  overflow-y: scroll;
  display: flex;
  flex-wrap: wrap;
`;

const EffectsTitle = styled.div`
  text-align: center;
  font-size: 32px;
  font-weight: 500;
  color: ${colors.primaryText}
`;

