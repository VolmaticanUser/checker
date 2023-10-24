import React from 'react'

function UserMessage({ message }) {
    return (
        <div className="userMessage">
            <div>
                <div className="userMessage_box">
                    <p className="text-sm">{message}</p>
                </div>
                {/* <span className="userMessage_time">5 min ago</span> */}
            </div>
            <div className="userMessage_logo"></div>
        </div>
    )
}

export default UserMessage