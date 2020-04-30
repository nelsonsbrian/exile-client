import React, { useEffect } from 'react';
import { Line, Circle } from 'rc-progress';
import styled from 'styled-components';
import { colors } from '../../shared/styled/theme';
import useDispatchTimer from '../../utils/hooks/useDispatchTimer';

export default ({ commands, updateQueue, fontSize }) => {

  useDispatchTimer(updateQueue, 100);

  return (
    <QueueContainer fontSize={fontSize}>
      {commands.map(cmd => (
        <QueueLine key={cmd.uuid}>
          <Col style={{ flex: '0 0 auto', marginRight: '3px' }}>
            {(cmd.ttr / 1000).toFixed(1)}
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
  font-size: ${ ({ fontSize }) => fontSize ? `${fontSize}px` : '16px'};

  /* padding: 0px 15px; */
  /* padding-left: 12px; */
  /* overflow-y: scroll; */
  overflow-y: auto;

`;

const QueueLine = styled.div`
  color: ${colors['byellow']};
  font-weight: 500;
  display: flex;

`;

const Col = styled.div`
  white-space: nowrap;
  text-overflow: ellipsis;
`;