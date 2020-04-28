import React from 'react';
import { Line, Circle } from 'rc-progress';
import styled from 'styled-components';
import { colors } from '../../shared/styled/theme';

export default ({ commands }) => {
  const now = Date.now();
  return (
    <QueueContainer>
      {commands.map((cmd, i) => (
        <QueueLine key={i}>
          <Col style={{ flex: '1 0 auto', marginRight: '3px' }}>
            {cmd.ttr.toFixed(1)}
          </Col>
          <Col>
            {cmd.label}
          </Col>
        </QueueLine>
      ))}
    </QueueContainer>
  )
}

const QueueContainer = styled.div`
  height: 95px;
  width: 140px;
  /* padding: 0px 15px; */
  padding-left: 12px;
  overflow-y: scroll;
`;

const QueueLine = styled.div`
  color: ${colors['byellow']};
  font-weight: 500;
  display: flex;
`;

const Col = styled.div`

`;