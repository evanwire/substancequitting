import PropTypes from 'prop-types'
import React, { Component } from 'react'
import MessageList from './MessageList'
import UserInput from './UserInput'
import Header from './Header'


class ChatWindow extends Component {
  constructor(props) {
    super(props)
  }

  onUserInputSubmit = (message) => {
    this.props.onUserInputSubmit(message)
  }

  onMessageReceived(message) {
    this.setState({ messages: [...this.state.messages, message] })
  }

  render() {
    let messageList = this.props.messageList || []
    let classList = [
      "sc-chat-window",
      (this.props.isOpen ? "opened" : "closed")
    ]
    return (
      <div className={classList.join(' ')}>
        <Header
          teamName="Scoob"
        />
        <MessageList
          messages={messageList}
          onDelete={this.props.onDelete}
        />
        <UserInput
          showEmoji={this.props.showEmoji}
          onSubmit={this.onUserInputSubmit}
          showFile={this.props.showFile}
          onKeyPress={this.props.onKeyPress} />
      </div>
    )
  }
}

ChatWindow.propTypes = {
  showEmoji: PropTypes.bool,
  showFile: PropTypes.bool,
  onKeyPress: PropTypes.func
}

export default ChatWindow
