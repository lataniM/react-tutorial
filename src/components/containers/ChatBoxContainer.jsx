import React, { Component } from 'react';
import ChatBox from '../ChatBox.jsx';

class ChatBoxContainer extends Component {

  constructor(props) {
    super(props)
    this.addMessage = this.addMessage.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      messages: ["hello there","how can I help you?"],
      value: ''
    }
  }

  handleChange(event) {
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

  render () {
    return <ChatBox handleChange={this.handleChange} addMessage={this.addMessage} messages={this.state.messages} inputValue={this.state.value}/>
  }
}

export default ChatBoxContainer;
