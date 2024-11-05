// Predefined chatbot responses
const responses = {
    "hello": "Hello there! How can I assist you today?",
    "hi": "Hi there! How can I assist you today?",
    "experience": "I have experience in Information Systems and currently learning mainframe programming through the Absa COBOL program.",
    "contact": "You can reach me through the Contact section in the navigation menu!",
    "education": "You can browse through my experience page and you will find my education history.",
    "skills": "You can browse through my experience page and you will find the programming languages that I am proficient with.",
    "cv": "You can download my CV by clicking on the 'See my CV' button in the About section.",
    "default": "I'm here to help! Ask me about my experience, skills, or contact information."
};

// Function to toggle chatbot visibility
function toggleChatbot() {
    const chatbotContainer = document.getElementById("chatbot-container");
    chatbotContainer.style.display = chatbotContainer.style.display === "none" ? "flex" : "none";
}

// Function to handle sending messages
function sendMessage() {
    const userInput = document.getElementById("user-input").value.toLowerCase().trim();
    const chatbotMessages = document.getElementById("chatbot-messages");

    // Display user message
    const userMessage = document.createElement("div");
    userMessage.textContent = "You: " + userInput;
    userMessage.style.color = "#fb8500";
    chatbotMessages.appendChild(userMessage);

    // Display chatbot response
    const botMessage = document.createElement("div");
    botMessage.textContent = "Bot: " + (responses[userInput] || responses["default"]);
    
    botMessage.style.color = "#fb8500";
    chatbotMessages.appendChild(botMessage);

    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    document.getElementById("user-input").value = "";
}

// Function to handle 'Enter' key press for sending messages
function handleKeyPress(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}
