import React from 'react'
import Message from './Message.jsx';

const Messages = ({messages}) => {
  let messageList = messages.map((message, index) =>
    <li key={index}> <Message text={message} /> </li>
  )
  return (
    <ul>{messageList}</ul>
  )
}

export default Messages;
