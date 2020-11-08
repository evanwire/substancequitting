import React from 'react'
import PropTypes from 'prop-types'
import SingleChat from './SingleChat'


const ChatMessagesGroup = ({messages = [], displayName}) =>{
    if(Array.isArray(messages)){
        return(
            <div className='chat-message-list'>
                {
                    messages.map(
                        (d,i) =><SingleChat key={i} message={d} left={d.sender !== displayName}/> 
                    )
                }
            </div>
        )
    }
    return null
}

ChatMessagesGroup.propTypes ={
    messages: PropTypes.array,
    displayName: PropTypes.string,
}

export default ChatMessagesGroup