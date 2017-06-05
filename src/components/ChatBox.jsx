import React from 'react';
import Messages from './Messages.jsx';
import InputText from './InputText.jsx';

const ChatBox = ({addMessage, handleChange, messages, inputValue }) => {
  return (
    <div>
      <h1>Chat App</h1>
      <div>
        <h1>Message List</h1>
        <Messages messages={messages}/>
      </div>
      <div>
        <InputText addMessage={addMessage} handleChange={handleChange} inputValue={inputValue}/>
      </div>
    </div>
  )
}

export default ChatBox;
