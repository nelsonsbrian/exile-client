import React from 'react';
import styled from 'styled-components';
import Convert from 'ansi-to-html';
import { colors } from './styled/theme';

export default function Map({ grid, extras, fontSize }) {
  const convertAnsi = new Convert({ newline: true });
  return (
    <MapContainer fontSize={fontSize}>
      <div dangerouslySetInnerHTML={{ __html: convertAnsi.toHtml(grid) }}></div >
    </MapContainer>

  )
}

const MapContainer = styled.div`
height: 300px;
background: black;
border: 3px solid ${colors.byellow};
border-radius: 10%;
display: flex;
justify-content: center;
align-items: center;
margin: 0 25px;
div {
  background: black;
  color: white;
  font-family: monospace;
  white-space: pre;
  display: table;
  margin: 0 auto;
  font-size: ${({ fontSize }) => fontSize ? `${fontSize + 4}px` : '22px'};
}
`;

