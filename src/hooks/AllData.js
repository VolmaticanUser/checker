import { useState } from "react";
import mdToHTML from "../util/mdToHTML";
import makePDF from "../util/makePDF";
import { initialArrOfPrompts } from "./Prompts";


const AllData = () => {
    // const test = {
    //     "role": "system",
    //     "content": `## Project Overview Brief

    //     ### Introduction

    //     After the user responds to all questions, it's time to present the project overview brief. The purpose of this brief is to format the information gathered into a structured document using Markdown. This presentation is designed to render nicely on a webpage and serve as a comprehensive guide for potential service providers. It will help them determine whether the project aligns with their skills and expertise.

    //     ### Project Overview

    //     The project overview will be structured with ## and ### headings, providing detailed insights into every question and answer provided by the user. This document aims to save service providers time by building much of the final document for them.

    //     ### Milestones

    //     Outlined within the project overview brief are essential milestones that will guide the service provider through the project lifecycle. The milestones include:

    //     1. **Identify 3 Possible Vendors:**
    //        - Explore potential vendors based on the project requirements.

    //     2. **Vet Vendors:**
    //        - Assess and evaluate the identified vendors to ensure they meet the project criteria.

    //     3. **Generate a Comprehensive Scope of Work:**
    //        - Collaborate with the selected vendors to develop a detailed scope of work that aligns with project goals.

    //     4. **Get Quotes From Each Vendor:**
    //        - Request and gather quotes from the selected vendors to understand the financial aspects of the project.

    //     5. **Compare Quotes and Select a Vendor:**
    //        - Analyze the received quotes and select the vendor that best fits the project requirements and budget.

    //     6. **Build the Solution:**
    //        - Collaborate with the chosen vendor to construct the proposed solution.

    //     7. **Execute the Plan:**
    //        - Implement the project plan in collaboration with the selected vendor.

    //     8. **Measure and Modify as Required:**
    //        - Regularly evaluate project progress and make necessary modifications to ensure success.

    //     ### Recommendations

    //     The project overview brief does not include suggestions for specific vendors or service providers. Instead, it serves as a comprehensive guide for service providers to assess the project's suitability for their skills.

    //     ### Additional Information

    //     If you believe any information needs to be added to this rough draft project overview brief to be useful for a service provider, please leverage your knowledge of the project type, problem statement, and proposed solution to generate and incorporate that information.
    //     Also give the user the report, don't say that give me a moment or something like that.
    //     Then ask the user if they want any changes, and proceed accordingly.
    //     If they don't want any changes, then close it up and generate questions for them to ask the service provider.
    //     `
    // }

    // const initialArrOfPrompts = [
    //     {
    //         "role": "system",
    //         "content": "You are an AI Assistant that speaks on behalf of the Mosaia Project Overview Generator."
    //     },
    //     {
    //         "role": "system",
    //         "content": "Your objective is to collect information about the user's project and create a project overview brief. Each question should be asked separately. Do not proceed to the next question until the current one is answered properly."
    //     },
    //     {
    //         "role": "system",
    //         "content": "Begin by greeting the user warmly and explaining the purpose. Ask if they are ready to answer questions about their project. Don't start asking questions right away. Make sure to greet them first and explain the purpose and then ask if they are ready."
    //     },
    //     {
    //         "role": "system",
    //         "content": "If the user fails to answer a question adequately, repeat the question before moving on. Redirect the user if they veer off-topic."
    //     },

    //     test,

    //     {
    //         "role": "system",
    //         "content": "Ask the user if they would like any changes after receiving the project overview. If yes, make the changes and provide additional questions for them to ask the service provider. If no, generate questions for them to ask the service provider."
    //     },
    //     {
    //         "role": "system",
    //         "content": "Remember to provide thoughtful responses to each question."
    //     },
    //     {
    //         "role": "system",
    //         "content": "1. What is the one-line summary of your project?"
    //     },
    //     {
    //         "role": "system",
    //         "content": "2. Have you undertaken a project similar to this before?"
    //     },
    //     {
    //         "role": "system",
    //         "content": "3. Can you elaborate on why you decided to pursue this project? What pain points were you experiencing?"
    //     },
    //     {
    //         "role": "system",
    //         "content": "4. What does success look like for this project? Can you explain the bigger picture?"
    //     },
    //     {
    //         "role": "system",
    //         "content": "5. Who is the client's directly responsible individual (DRI) that will be the main point of contact?"
    //     },
    //     {
    //         "role": "system",
    //         "content": "6. What is your ideal timeline to complete this project?"
    //     },
    //     {
    //         "role": "system",
    //         "content": "7. Is there a set budget? We won't share it with the vendor."
    //     },
    //     {
    //         "role": "system",
    //         "content": "Do not ask the questions right away or give a template or anything. Ask questions one by one and also greet the user."
    //     },
    // ];


    const [fullChat, setFullChat] = useState(initialArrOfPrompts);

    const [loading, setLoading] = useState(false);

    function addMessage(message) {
        if (message.content.includes("Project Overview")) {
            const convertedContentToHTML = mdToHTML(message.content);
            makePDF(convertedContentToHTML);
            setFullChat((current) => [...current, { role: 'assistant', content: "I have provided the information, and your system must've downloaded it as pdf." }])
        } else {
            setFullChat((current) => [...current, message]);
        }

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