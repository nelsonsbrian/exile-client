import React from 'react';
import styled from 'styled-components';

export const PanelContainer = styled.div`
  width: 100%;
  position: relative;
  
  border-width: 4px;
  border-image-source: url("${({ imgBorder }) => imgBorder ? require(`../../../img/${imgBorder}`) : require(`../../../img/steel.jpg`)}");
  border-style: solid;
  border-image-repeat: round;
  border-image-slice: 10;

  &::before{
    content: "";
    position: absolute;
    background-image: url("${({ imgPanel }) => imgPanel ? require(`../../../img/${imgPanel}`) : require(`../../../img/cobble.jpg`)}");

    filter: brightness(15%);
    top: 0; left: 0; right: 0; bottom: 0;
    width: 100%; height: 100%;
  }
`;

export const PanelInner = styled.div`
  position: relative;
`;
