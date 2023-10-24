import React, { useEffect, useRef, useState } from 'react'
import SystemMessage from '../components/SystemMessage'
import UserMessage from '../components/UserMessage'
import UseData from '../hooks/UseData'
import sendChatRequest from '../util/openAiChat';
import Loader from '../components/Loader';
function ChatPage() {
    const { fullChat, addMessage, loading, toggleLoading } = UseData();
    const [userInput, setUserInput] = useState("");
    const textFieldRef = useRef(null);
    const messageWindow = useRef(null)



    useEffect(() => {
        if (!loading) {
            textFieldRef.current.focus()
        }
        messageWindow.current.scrollTop = messageWindow.current.scrollHeight;
    }, [loading]);

    useEffect(() => {
        (async function cool() {
            const test = await sendChatRequest(fullChat);
            addMessage(test.choices[0].message);
        })();
    }, [])



    async function formFunction(e) {
        e.preventDefault();
        toggleLoading();
        try {
            if (userInput !== "") {
                addMessage({ role: 'user', content: userInput });
                const test = await sendChatRequest([...fullChat, { role: 'user', content: userInput }]);
                addMessage(test.choices[0].message);
            } else {
                alert("Input cannot be empty thank you (❁´◡`❁)")
            }
        } catch (error) {
            console.log(error);
        }
        toggleLoading();
        setUserInput("");

    }





    const ChatElement = fullChat.map((value, index) => {
        return (
            <React.Fragment key={index}>
                {value.role === "user" ? <UserMessage message={value.content} /> :
                    value.role === "assistant" ? <SystemMessage message={value.content} /> :
                        null}
            </React.Fragment>
        )
    });



    return (
        <div className="flex flex-col items-center justify-center w-screen min-h-screen bg-no-repeat bg-cover text-gray-800 p-10 fancyBackground">
            <div className="flex flex-col flex-grow w-full max-w-xl chatContainer shadow-xl rounded-lg overflow-hidden">
                <div className="flex flex-col flex-grow h-0 p-4 overflow-auto" ref={messageWindow}>
                    {ChatElement}
                </div>
                <div className="bg-gray-300 p-4 inputContainer">
                    {loading && <Loader />}
                    <form onSubmit={(e) => formFunction(e)}>
                        <input ref={textFieldRef} className="flex items-center h-10 w-full rounded px-3 text-sm" value={userInput} onChange={(e) => setUserInput(e.target.value)} type="text" placeholder="Type your message…" disabled={loading} />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ChatPage;