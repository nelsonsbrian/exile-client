import React from 'react'
import styled from 'styled-components'
import PlayerScore from './PlayerScore'
import { connect } from 'react-redux';
import ShowSocketData from './ShowSocketData';
import EffectsPane from './EffectsPane';
import { colors } from './styled/theme';
import MenuBar from './MenuBar'
import StatusBar from './StatusBar'
import exile from '../img/web-client-logo.png';

function LeftPane({ attributes, metadata, combat, imgBorder }) {

  return (
    <PaneContainer imgBorder={imgBorder}>
      <LogoContainer>
        <ExileLogo src={exile} />
      </LogoContainer>
      <div />
      <div />
      <StatusBar />
      <MenuBar />


    </PaneContainer>
  )
}


const mapStateToProps = ({ connection, data }) => {
  return {
    attributes: data.attributes,
    metadata: data.metadata,
    combat: data.combat,
    imgBorder: data.imgBorder,

  }
};


export default connect(mapStateToProps, null)(LeftPane);


const PaneContainer = styled.div`
  /* width: 30%; */
  /* min-width: 400px; */
  /* max-width: 30%; */
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  place-content: center;
  /* justify-items: center;
  align-items: center;
  justify-content: center; 
  align-content: center;  */
  height: 55px;
  width: 100%;
  color: white;
  padding: 1px;
  background: ${colors.primary};

  border-bottom-width: 4px;
  border-image-outset: 5px;
  border-image-source: url("${({ imgBorder }) => imgBorder ? require(`../img/${imgBorder}`) : require('../img/steel.jpg')}");
  border-bottom-style: solid;
  border-image-repeat: round;
  border-image-slice: 5;
`;

const LogoContainer = styled.div`
  justify-self: start;
  padding-left: 30px;
  height: 100%;
`;

const ExileLogo = styled.img`
  height: 55px;
`;
