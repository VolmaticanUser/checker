import React from 'react'
import Markdown from 'react-markdown'

function SystemMessage({ message }) {
    
    return (
        <div className="systemMessage">
            <div className="systemMessage_logo"></div>
            <div>
                <div className="systemMessage_box">
                    {/* <p className="text-sm">{message}</p> */}
                    <Markdown className="text-sm">{message}</Markdown>
                </div>
                {/* <span className="systemMessage_time">2 min ago</span> */}
            </div>
        </div>
    )
}

export default SystemMessage