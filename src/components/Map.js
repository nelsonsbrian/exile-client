import React from 'react';
import styled from 'styled-components';
import Convert from 'ansi-to-html';
import { colors } from './styled/theme';

export default function Map({ grid, extras, fontSize }) {
  const convertAnsi = new Convert({ newline: true });
  return (
    <MapContainer fontSize={fontSize}>
      <pre dangerouslySetInnerHTML={{ __html: convertAnsi.toHtml(grid) }}></pre >
    </MapContainer>

  )
}

const MapContainer = styled.div`
height: 300px;
width: 300px;
/* padding: 25px; */
/* background: rgba(0,0,0,.9); */
background: black;
box-shadow: black 0px 0px 5px 2px;
/* border: 3px solid ${colors.byellow}; */
border-radius: 4px;
display: flex;
justify-content: center;
align-items: center;
margin: 0 25px;
pre {
  background: black;
  color: white;
  font-family: monospace;
  white-space: pre;
  /* display: table; */
  margin: 0 auto;
  font-size: ${({ fontSize }) => fontSize ? `${fontSize + 4}px` : '22px'};
}
`;

