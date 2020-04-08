import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { colors } from './styled/theme';
import EffectsModal from './EffectsModal';
import MapModal from './MapModal';
import SettingsModal from './SettingsModal';
import { setFontSize } from '../actions/index';
import WhoModal from './WhoModal';

function MenuBar({ effects, map, metadata, settings, setFontSize }) {

  return (
    <MenuContainer>
      <EffectsModal effects={effects} />
      <MapModal map={map} metadata={metadata} />
      <WhoModal metadata={metadata} />
      <SettingsModal settings={settings} setFontSize={setFontSize} />
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

const mapDispatchToProps = {
  setFontSize,
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuBar);

const MenuContainer = styled.div`
  height: 80px;
  padding: 10px 0px;
  width: 310px;
  margin: 10px;
  border: solid 3px black;
  background: ${colors.secondaryText};
  border-radius: 4px;

`;

export const SVGContainer = styled.div`
  display: inline-block;
  border: 4px solid ${colors.dark};
  margin: auto 10px;
  width: 55px;
  height: 55px;
  background: ${colors.secondary};
  border-radius: 4px;
  cursor: pointer;

`;


export const SVGLink = styled.a`
  /* display: block; */
  display: flex;
  /* width: 55px;
  height: 55px; */
  align-items: center;
  justify-items: center;
  /* grid-column-gap: 5px; */
  padding: 3px 3px;
  /* margin: 5px; */
`;

export const SVGIcon = styled.svg`
  flex: none;
  fill: ${colors.primaryText};

  transition: fill 0.25s;

  width: 40px;
  height: 40px;
  ${SVGLink}:hover & {
    fill: ${colors.secondaryText};
  }
`;
