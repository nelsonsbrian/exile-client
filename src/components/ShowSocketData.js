import React from 'react';
import styled from 'styled-components';

export function ShowAttributeData({ attributes }) {
  return (
    <div>
      <h3>Attribute Data:</h3>
      {Object.entries(attributes).map(([key, { current, max }]) => (
        <Wrapper key={key}>
          {key}:
          <Attribute>
            {current}/{max} &nbsp;
            </Attribute>
        </Wrapper>
      ))}
      <br/>
    </div>
  )
}

export function ShowMetadata({ metadata }) {
  return (
    <div>
      <h3>Metadata:</h3>
      {Object.entries(metadata).map(([key, value]) => (
        <Wrapper key={key}>
          {key}:
          <Attribute>
            {JSON.stringify(value)} &nbsp;
            </Attribute>
        </Wrapper>
      ))}
      <br/>
    </div>
  )
}

const Attribute = styled.span`
font-size: .75em;
color: palevioletred;
`;

const Wrapper = styled.span`
color: papayawhip;
`;
