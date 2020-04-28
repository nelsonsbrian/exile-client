import React, { useEffect, } from 'react';
import Ansi from "ansi-to-react";


export default function Messages(props) {
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