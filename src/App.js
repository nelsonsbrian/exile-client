import React, { useEffect, useState, useRef } from 'react';
import './App.css';
import Socket from './components/SocketManager';
import Convert from 'ansi-to-html';
import { connect } from 'react-redux';
import { sendMessage, updateMessage } from './actions/index';
import InputBar from './components/InputBar';
import Ansi from "ansi-to-react";

const MyFunctionalComponent = (props) => {
  return Object.keys(props).map(key => (
    <div key={key}>
      {key}: {JSON.stringify(props[key])}
    </div>
  ))
}

const parse = () => {
  return <Ansi>
    {'\u001b[34mhello world'}
  </Ansi>;
};

const Messages = (props) => {
  const { messages = [], messagesEndRef } = props;

  useEffect(() => {
    messagesEndRef.current.scrollIntoView(false);
  }, [messagesEndRef]);

  return (
    <div>
      {messages.map((msg, i) => (
        <Ansi key={i}>{msg}</Ansi>
      ))}
    </div>
  )

  return messages.map((msg, i) => (
    <div key={i} dangerouslySetInnerHTML={{ __html: msg }}></div >
  ))
  // const convertAnsi = new Convert({ newline: true });
  // return messages.map((msg, i) => (
  //   <div key={i} dangerouslySetInnerHTML={{ __html: convertAnsi.toHtml(msg) }}></div >
  // ))
}


function App(props) {

  const [historyIndex, sethistoryIndex] = useState(1)
  const [fontSize, setFontSize] = useState(12);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const { inputHistory } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    props.sendMessage(inputRef.current.value);
    // props.updateMessage(inputRef.current.value); // if we use store for this, enable
    inputRef.current.value = '';
    sethistoryIndex(-1);
  }

  // Focus the input text bar on initial load
  useEffect(() => {
    focusInputBar()
  }, [inputRef]);

  // Select text in field when you scroll through inputHistory
  useEffect(() => {
    inputRef.current.select();
  }, [historyIndex]);

  const focusInputBar = (e) => {
    inputRef.current.focus();
  }

  const FontSizeButton = ({ type, name }) => {
    const handleSizeChange = () => {
      if (type === 'bigger' && fontSize < 24) {
        setFontSize((old) => old + 2);
      } else if (type === 'smaller' && fontSize > 6) {
        setFontSize((old) => old - 2);
      }
    }
    return (
      <button className="font-size-button" onClick={handleSizeChange}>{name}</button>
    )
  }

  return (
    <div className="app-container">
      <div className="left-pane">

      </div>
      <div className="middle-pane">

          <Socket />
        <div id="output" style={{ 'fontSize': `${fontSize}px` }} onClick={focusInputBar}>
          <Messages messages={props.messages} messagesEndRef={messagesEndRef} />
          <div ref={messagesEndRef} />
        </div>
        <div id="input">
          <form id="form-input" onSubmit={handleSubmit}>
            <InputBar
              historyIndex={historyIndex}
              sethistoryIndex={sethistoryIndex}
              inputHistory={inputHistory}
              inputRef={inputRef}
            />
            <button id="button-input">Send</button>
          </form>
        </div>
      </div>
      <div className="right-pane">
        <div className="font-size-container">
          {fontSize}pt
        <FontSizeButton type="smaller" name="-" />
          <FontSizeButton type="bigger" name="+" />
        </div>

      </div>
    </div>
  );
}

const mapStateToProps = ({ connection }) => {
  return {
    inputHistory: connection.inputHistory,
    messages: connection.messages,
  }
};


export default connect(mapStateToProps, { updateMessage, sendMessage })(App);
