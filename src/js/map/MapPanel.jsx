import React from 'react';
import styled from 'styled-components';
import Convert from 'ansi-to-html';
import { colors } from '../shared/styled/theme';
import { PanelContainer, PanelInner } from '../shared/components/Panel';

export default function Map({ grid, fontSize, imgBorder, imgPanel, metadata }) {
  const convertAnsi = new Convert({ newline: true });
  const { room } = metadata;
  return (
    <PaneContainer imgPanel={imgPanel} imgBorder={imgBorder}>
      <MapInner>
        <MapTitle>{room}</MapTitle>
        <MapContainer fontSize={fontSize}>
          <pre dangerouslySetInnerHTML={{ __html: convertAnsi.toHtml(grid) }}></pre >
        </MapContainer>
      </MapInner>
    </PaneContainer>
  )
}

const PaneContainer = styled(PanelContainer)`
  flex: 1 1 auto;

  padding: 0 10px 10px 10px;
  height: 310px;
  display: flex;
  justify-items: center;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const MapInner = styled(PanelInner)`
  display: flex;
  /* justify-items: center; */
  align-items: center;
  flex-direction: column;
  width: 100%;
  /* flex-wrap: wrap; */
  /* padding: 15px; */

`;

const MapTitle = styled.div`
  font-size: 1.4em;
  width: 100%;
  text-align: center;
  margin: 0;
  margin-bottom: 15px;
  font-weight: 500;
  font-variant: small-caps;
  color: white;
`;

const MapContainer = styled.div`
  height: 205px;
  width: 205px;
  flex: 0 0 auto;
  /* padding: 25px; */
  /* background: rgba(0,0,0,.9); */
  background: black;
  box-shadow: black 0px 0px 5px 2px;
  /* border: 3px solid ${colors.byellow}; */
  border-radius: 4px;
  /* display: flex; */
  justify-content: center;
  align-items: center;
  /* margin: 0 25px; */
pre {
  background: black;
  color: white;
  font-family: monospace;
  white-space: pre;
  /* display: table; */
  margin: 0 auto;
  /* font-size: ${({ fontSize }) => fontSize ? `${fontSize + 4}px` : '22px'}; */
  font-size: 16px;
}
`;

