import React from 'react'
import PropTypes from 'prop-types'

const SingleChat = ({ message, left, timeFormatter }) => {
    let {content, sender, timestamp } = message

    var d = new Date(0); 
    d.setUTCSeconds(timestamp.seconds);
    var time = d.toLocaleTimeString()


    const rightSpanClass = left ? 'hidden ml-2' : 'ml-2 single-chat-time'
    const leftSpanClass = left ? 'mr-2 single-chat-time' : 'hidden mr-2'
    const upperClass = left? 'single-chat  d-flex justify-content-start mb-2' : 'single-chat d-flex justify-content-end mb-2'
    const bodyClass = left?'bg-success text-black p-2 w-50 single-chat-text rounded text-left ' : 'bg-info text-black  p-2 w-50 single-chat-text rounded text-left'
    //time = timeFormatter(time)
    return (
        <div className={upperClass}>
            <span className={leftSpanClass} hidden={!left}>{time}</span> <span className={bodyClass}><h6>{sender}</h6> {content}</span><span className={rightSpanClass} hidden={left}>{time}</span>
        </div>
    )
}


SingleChat.propTypes ={
    message: PropTypes.shape({
        content: PropTypes.string,
        sender: PropTypes.string,
        timestamp: PropTypes.shape({seconds: PropTypes.number, nanoseconds: PropTypes.number})
    }),
    left: PropTypes.bool,
    //depending on your time format you might need this
}


export default SingleChat