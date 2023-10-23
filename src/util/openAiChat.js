import OpenAI from "openai";



const openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
});




async function sendChatRequest(chat) {
    const chatCompletion = await openai.chat.completions.create({
        messages: chat,
        model: "gpt-3.5-turbo",
        temperature: 0.2
    });
    return chatCompletion;
}
export default sendChatRequest;