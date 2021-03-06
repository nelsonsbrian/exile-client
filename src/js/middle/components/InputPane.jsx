import React, { useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { sendMessage, updateMessage } from '../../connection/connectionActions';
import { setFontSize } from '../../settings/settingsActions';

import InputBar from './InputBar';

const InputPane = ({ historyIndex, sethistoryIndex, inputRef, updateMessage, sendMessage }) => {


  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(inputRef.current.value);
    // updateMessage(inputRef.current.value); // if we use store for this, enable
    // sethistoryIndex(-1); // toggle this on if you dont want to have input remain in box
    sethistoryIndex(0);
    inputRef.current.select();
  }


  return (
    <PaneContainer >
      <InputForm onSubmit={handleSubmit}>
        <InputBar
          historyIndex={historyIndex}
          sethistoryIndex={sethistoryIndex}
          inputRef={inputRef}
        />
        <FormButton >Send</FormButton>
      </InputForm>
    </PaneContainer>
  );
}

const mapStateToProps = ({ connection }) => {
  return {
    inputHistory: connection.inputHistory,
    messages: connection.messages,
  }
};

export default connect(mapStateToProps, { updateMessage, sendMessage, setFontSize })(InputPane);

const PaneContainer = styled.div`

  flex: 0 0 auto;
  /* max-width: 100vw; */
  height: 38px;
  border-top: 1px white solid;
  background: black;
  color: white;
  position: relative;
  width: 100%;
  /* left: 0;
  bottom: 0; */



`;

const InputForm = styled.form`
  height: 38px;
  display: flex;
  

  &::before{
    content: '>';
    height: 100%;
    /* width: 10px; */
    position: absolute;
    font-size: 24px;
    left: 5px; top: 5px;
  }
`;

const FormButton = styled.button`
  width: 75px;
  background: rgb(126, 3, 3);
  border: none;
  color: white;
  font-weight: 500;
  font-size: 18px;

  flex: 0 0 auto;

  &:hover {
    background: red;
    border: 2px black solid;
  }
`;