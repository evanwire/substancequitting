import React, { useState } from 'react'
import PropTypes from 'prop-types'

const ChatInput = ({ iconSend, sendMsg }) => {
    const textareaRef = React.createRef()
    const [text, setText] = useState('')
    return (
        <div className="input-group chat-input-wrapper p-5 d-flex justify-content-end">
            <textarea ref={textareaRef} className="chat-input form-control border-primary rounded-0 border-top-0 border-right-0 border-left-0 border-bottom" aria-label="textarea message value" value={text} onChange={e => {
                setText(e.target.value)
            }} />
            <div className="input-group-append bg-light chat-button-wrapper p-3 rounded-0" >
                <button type="button" className="btn btn-outline-primary chat-button-send mr-3 rounded-0"
                    onClick={() => {
                        sendMsg(text)
                        setText('')
                        textareaRef.current.focus()
                    }}
                    onKeyPress={e => {
                        if (e.keyCode === 13) {
                            sendMsg(text)
                            setText('')
                            textareaRef.current.focus()
                        }
                    }}>
                    {iconSend}
                </button>
                
            </div>
        </div>
    )
}

ChatInput.propTypes = {
    iconSend: PropTypes.node,
    sendMsg: PropTypes.func,
}

export default ChatInput