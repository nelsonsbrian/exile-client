import React from 'react';
import styled from 'styled-components';
import ReactTooltip from 'react-tooltip';

export default function ShowSocketData(items) {
  return (
    <div>
      <h3>Data:</h3>
      {Object.entries(items).map((item, i) => (
        <Wrapper key={i}>
          <a data-tip data-for="test">

            {JSON.stringify(item, null, '\t')} &nbsp;
          </a>
        </Wrapper>
      ))}
      <br />

      <ReactTooltip id="test" type="error">
        <span>Show happy face</span>
      </ReactTooltip>
    </div>
  )
}

// export default function ShowSocketData({ entries }) {
//   return (
//     <div>
//       <h3>Data:</h3>
//       {Object.entries(entries).map(([key, value]) => (
//         <Wrapper key={key}>
//           {key}:
//           <Attribute>
//             {JSON.stringify(value)} &nbsp;
//             </Attribute>
//         </Wrapper>
//       ))}
//       <br />
//     </div>
//   )
// }



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
      <br />
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
      <br />
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
