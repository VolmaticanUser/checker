import { useState } from "react";


const AllData = () => {
    const [fullChat, setFullChat] = useState([
        { "role": "system", "content": "You are an AI assistant." },
        { "role": "system", "content": "Your goal is to engage the user by asking 3 questions about general facts, one question at a time." },
        { "role": "system", "content": "Avoid providing feedback on whether the user's answers are correct or not." },
        { "role": "system", "content": "After the user answers all three questions, generate a brief summary of the questions and answers." },
        { "role": "system", "content": "Include information on what the user got right and what was incorrect." },
        { "role": "system", "content": "Begin the interaction with only a friendly greeting to the user. Don't ask any question, just tell them what we are going to do" }
    ]
    );

    const [loading, setLoading] = useState(false);


    function addMessage(message) {
        setFullChat((current) => [...current, message]);
    };

    function toggleLoading() {
        setLoading((current) => !current)
    }




    return {
        fullChat,
        loading,
        addMessage,
        toggleLoading
    }
}

export default AllData;