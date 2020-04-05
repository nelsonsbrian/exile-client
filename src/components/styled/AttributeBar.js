import React from 'react'
import styled from 'styled-components';
import { Line, Circle } from 'rc-progress';

export const RCLINE = styled(Link)`

`;

const Link = ({ className, children }) => (
  <div className={className}>
    {children}
  </div>
);

export default function AttributeBar() {
  return (
    <RCLINE>
      <Line percent={health.current / health.max * 100}
        strokeWidth="8"
        trailWidth="8"
        trailColor="black"
        strokeColor="#ff5555"
        strokeLinecap="square"
        style={{ height: '75px' }}
      />
    </RCLINE>
  )
}
