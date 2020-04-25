import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { colors } from './styled/theme';
import EffectsModal from './EffectsModal';
import MapModal from './MapModal';
import SettingsModal from '../js/settings/SettingsModal';
import WhoModal from './WhoModal';

function MenuBar({ effects, map, metadata }) {

  return (
    <MenuContainer>
      <EffectsModal effects={effects} />
      <MapModal map={map} metadata={metadata} />
      <WhoModal metadata={metadata} />
      <SettingsModal />
    </MenuContainer>
  );
}

const mapStateToProps = ({ connection, data }) => {
  return {
    effects: data.effects,
    map: data.map.large,
    metadata: data.metadata,
    settings: data.settings,
  }
};


export default connect(mapStateToProps, null)(MenuBar);

const MenuContainer = styled.div`
  /* height: 50px; */
  display: flex;
  align-items: center;
  /* justify-content: center; */
  /* padding: 1px; */
  /* padding: 2px 0px; */
  width: 310px;
  border: solid 3px black;
  background: ${colors.tan};
  border-radius: 4px;
  /* background: ${colors.secondaryText}; */

`;

export const SVGContainer = styled.div`
  display: inline-block;
  border: 4px solid ${colors.dark};
  margin: auto 5px;
  width: 40px;
  height: 40px;
  background: ${colors.secondary};
  border-radius: 4px;
  cursor: ${({ noButton }) => noButton ? 'auto' : 'pointer'};

`;


export const SVGLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

`;

export const SVGIcon = styled.svg`
  flex: none;
  fill: ${({ colorFill }) => colorFill ? colorFill : colors.primaryText};

  transition: fill 0.25s;

  width: 30px;
  height: 30px;

  ${SVGLink}:hover & {
    ${ ({ noButton }) => !noButton && `fill: ${colors.secondaryText}`};
  }

`;
