import React, { Component } from 'react';
import Messages from './Messages.jsx';
import InputText from './InputText.jsx';

class ChatBox extends Component {

  constructor(props) {
    super(props)
    this.addMessage = this.addMessage.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      messages: ["hello there","how can I help you?"],
      value: ''
    }
  }

  handleChange(event){
    this.setState({value:event.target.value})
  }

  addMessage(event) {
    event.preventDefault()
    let text = this.state.value
    let messages = this.state.messages
    messages.push(text)
    this.setState({
      messages
    })
    this.setState({value:''})
  }

  render() {
    return (
      <div>
        <h1>Chat App</h1>
        <div>
          <h1>Message List</h1>
          <Messages messages={this.state.messages}/>
        </div>
        <div>
          <InputText addMessage={this.addMessage} handleChange={this.handleChange} inputValue={this.state.value}/>
        </div>
      </div>
    )
  }
}

export default ChatBox;
