import React, { useState } from 'react';
import './partEightChatbot.css'
const PartEightChatbot = () => {
  const [userMessage, setUserMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const handleUserMessageChange = (e) => {
    setUserMessage(e.target.value);
  };

  const handleUserMessageSubmit = (e) => {
    e.preventDefault();

    // Add user message to chat history
    setChatHistory((prevChatHistory) => [
      ...prevChatHistory,
      { message: userMessage, sender: 'user' },
    ]);

    // Process user message and generate chatbot response
    const chatbotResponse = generateChatbotResponse(userMessage);

    // Add chatbot response to chat history
    setChatHistory((prevChatHistory) => [
      ...prevChatHistory,
      { message: chatbotResponse, sender: 'chatbot' },
    ]);

    // Clear user message input
    setUserMessage('');
  };

  const generateChatbotResponse = (userMessage) => {
    // Predefined responses or language resources
    const responseMapping = {
      'hello': 'Hello! How can I help you?',
      'name': 'My name is Chatbot. Nice to meet you!',
      'how are you': 'I am doing well, thank you. How about you?',
      'fine': 'That\'s great to hear!',
      'thank you': 'You\'re welcome!',
      'default': 'I\'m sorry, but I don\'t understand. Can you please rephrase or ask a different question?',
    };
  
    // Convert user message to lowercase for case-insensitive matching
    const lowercaseUserMessage = userMessage.toLowerCase();
  
    // Check if there is a predefined response for the user message
    if (responseMapping.hasOwnProperty(lowercaseUserMessage)) {
      return responseMapping[lowercaseUserMessage];
    }
  
    // If no predefined response matches, return the default response
    return responseMapping['default'];
  };
  

  return (
    <div className='part-eight-container'>
      <div className="chat-history">
        {chatHistory.map((chat, index) => (
          <div
            key={index}
            className={`chat-message ${chat.sender === 'user' ? 'user' : 'chatbot'}`}
          >
            {chat.message}
          </div>
        ))}
      </div>
      <form onSubmit={handleUserMessageSubmit}>
        <input
          type="text"
          value={userMessage}
          onChange={handleUserMessageChange}
          placeholder="Type your message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default PartEightChatbot;
