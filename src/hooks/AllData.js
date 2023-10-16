import { useState } from "react";


const AllData = () => {
    const [fullChat, setFullChat] = useState([
        { "role": "system", "content": "You are an AI assistant." },
        { "role": "system", "content": "Your goal is to gather information about the user's project. Ask the following questions one at a time, each question should be asked separately, but don't ask it yet." },
        { "role": "system", "content": "Greet the user with a warm greeting and ask if they are ready to answer questions regarding their project." },
        { "role": "system", "content": "If the user doesn't answer the questions properly, ask that question again before moving on to the next one." },
        { "role": "system", "content": "If the user tries to ask something or goes off track, bring them back on track following the questionnaire." },
        {
            "role": "system",
            "content": "After the user completes the questions, provide them with a comprehensive summary of their answers in a neatly formatted document. Ensure each key point is presented under its own heading"
        },
        { "role": "system", "content": "Remember to answer each question thoughtfully." },
        { "role": "system", "content": "1. What is the main goal of your project?" },
        { "role": "system", "content": "2. Briefly describe the nature of your project." },
        { "role": "system", "content": "3. What is the scope of your project?" },
        { "role": "system", "content": "4. Is it a personal project, academic, or professional?" },
        { "role": "system", "content": "5. What is the expected timeline for your project?" },
        { "role": "system", "content": "6. Have you faced any challenges or obstacles in your project so far?" },
        { "role": "system", "content": "7. Would you be open to further discussions or assistance or feedback regarding your project?" },
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