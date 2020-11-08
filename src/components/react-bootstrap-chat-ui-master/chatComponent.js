import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ChatInput from './ChatInput'
import ChatMessagesGroup from './ChatMessageGroup'

class ChatComponent extends Component {
    componentRef = React.createRef()
    onMessageSend = text => {
        this.props.onMessageSend(text)
        this.scrollToBottom()
    }
    scrollToBottom = () =>{
        this.componentRef.current.scrollIntoView({ behavior: 'smooth' })
    }
    componentDidMount(){
        this.scrollToBottom()
    }
    componentDidUpdate(prevProps){
        const prevMsgs = prevProps.messages
        const msgs = this.props.messages
        this.scrollToBottom()
        
    }
    render() {
        const { messages, agentUser, iconSend } = this.props
        return (
            <div className='container chat-component mt-2'>
                <div className='chat-messages-container row' >
                    <div className='col-12' style={{maxHeight: "50vh", overflowX: "scroll"}}>
                        <ChatMessagesGroup
                            messages={messages}
                            displayName={this.props.displayName}
                            
                        />
                        <div style={{ float: "left", clear: "both" }}>
                        <div ref={this.componentRef} />
                    </div>
                    </div>
                </div>
                <div className='row chat-component-bottom '>
                    
                    <div className='col-12 fixed-bottom'>
                        <ChatInput
                            iconSend={iconSend} 
                            sendMsg={this.onMessageSend}
                        />
                    </div>
                </div>
            </div>
        )
    }
}
ChatComponent.propTypes = {
    messages: PropTypes.array,
    displayName: PropTypes.string,
    timeFormatter: PropTypes.func,
    iconSend: PropTypes.node,
    onMessageSend: PropTypes.func,
    displayStop: PropTypes.bool,
    onMessageStop: PropTypes.func
}

ChatComponent.defaultProps = {
    onMessageSend: (text) => null,
    onMessageStop: () => null,
}
export default ChatComponent
