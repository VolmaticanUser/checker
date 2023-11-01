import React, { useEffect, useRef, useState } from 'react'
import SystemMessage from '../components/SystemMessage'
import UserMessage from '../components/UserMessage'
import UseData from '../hooks/UseData'
import Loader from '../components/Loader';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function ChatPage() {
    const { fullChat, addMessage, loading, toggleLoading } = UseData();
    const [userInput, setUserInput] = useState("");
    const textFieldRef = useRef(null);
    const messageWindow = useRef(null);

    // const URL = "http://localhost:5100";
    const URL = "https://checker-backend.umar30.repl.co";

    const token = `Bearer ${localStorage.getItem('token')}`

    const navigate = useNavigate();



    // This function is used if token is tampered with. It logs out the user.
    const tokenTamper = (error) => {
        if (error.response.status === 401 || error.response.status === 403) {
            localStorage.removeItem('token');
            console.log(loading)
            navigate('/login');
        }
    }


    // UseEffect to focus cursor on textbox.
    useEffect(() => {
        if (!loading) {
            textFieldRef.current.focus();
        }
        messageWindow.current.scrollTop = messageWindow.current.scrollHeight;
    }, [loading]);

    // UseEffect for sending data to server on first load, also logs out user if token is tampered with and deletes the token
    useEffect(() => {
        (async function cool() {
            try {
                const { data } = await axios.post(`${URL}/sendChat`, { prompts: fullChat }, {
                    headers: {
                        'Authorization': token,
                        'Content-Type': 'application/json'
                    }
                },)
                addMessage(data[0].message);
            } catch (error) {
                // toggleLoading();
                tokenTamper(error);
            }
        })();
    }, []);


    // Function on form submittion
    async function formFunction(e) {
        e.preventDefault();
        toggleLoading();
        try {
            if (userInput !== "") {
                addMessage({ role: 'user', content: userInput });
                const { data } = await axios.post(`${URL}/sendChat`, {
                    prompts: [...fullChat, { role: 'user', content: userInput }]
                }, {
                    headers: {
                        'Authorization': token,
                        'Content-Type': 'application/json'
                    }
                },)
                addMessage(data[0].message);
            } else {
                alert("Input cannot be empty thank you (❁´◡`❁)");
            }
        } catch (error) {
            tokenTamper(error);
        }
        console.log("IDK MAN, just work")
        toggleLoading();
        setUserInput("");

    }





    // Render all the chats in the chatbox using this
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