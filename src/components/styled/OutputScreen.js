import React, { useRef } from 'react';
import styled from 'styled-components';
import Convert from 'ansi-to-html';


export default function OutputScreen({ fontSize, inputRef }) {
  const outputRef = useRef(null);

  const { scrollTop, scrollHeight, offsetHeight } = outputRef && outputRef.current || {};
  let showSlider = true;
  if (scrollHeight - scrollTop < offsetHeight + 1) {
    showSlider = false;
  }

  return (
    <OutputContainer
      id="output"
      ref={outputRef}
      showSlider={showSlider}
      fontSize={fontSize}
      onClick={() => inputRef.current.focus()}
    />
  )
}


const OutputContainer = styled.div`
  flex: 1 1 auto;
  padding: 5px;
  background: black;
  overflow-y: scroll;
  overflow-x: hidden;
  font-family: monospace;
  white-space: pre;
  color: white;
  position: relative;
  font-size: ${ ({ fontSize }) => fontSize ? `${fontSize}px` : '24px'};
  &::-webkit-scrollbar {
    display: ${ ({ showSlider }) => showSlider ? `block` : 'none'}; /*Chrome etc */
  }
  -ms-overflow-style: ${ ({ showSlider }) => showSlider ? `block` : 'none'}; /*IE & EDGE*/
  ::-webkit-scrollbar-thumb {
  background: rgb(126, 3, 3);
  border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: red;
  }
  ::-webkit-scrollbar-track {
  }
`;