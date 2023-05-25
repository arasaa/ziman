import React, { useState, useEffect, useRef } from 'react';
import './partEightChatbot.css';

const PartEightChatbot = () => {
  const [userMessage, setUserMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [isChatbotTyping, setIsChatbotTyping] = useState(false);
  const chatHistoryRef = useRef(null);

  const handleUserMessageChange = (e) => {
    setUserMessage(e.target.value);
  };

  const handleUserMessageSubmit = (e) => {
    e.preventDefault();

    // Add user message to chat history
    setChatHistory((prevChatHistory) => [
      ...prevChatHistory,
      { message: userMessage, sender: 'user', name: 'User' },
    ]);

    // Clear user message input
    setUserMessage('');

    // Show typing animation
    setIsChatbotTyping(true);

    // Delayed chatbot response
    setTimeout(() => {
      // Process user message and generate chatbot response
      const chatbotResponse = generateChatbotResponse(userMessage);

      // Add chatbot response to chat history
      setChatHistory((prevChatHistory) => [
        ...prevChatHistory,
        { message: chatbotResponse, sender: 'chatbot', name: 'Chatbot' },
      ]);

      // Hide typing animation
      setIsChatbotTyping(false);
    }, 2000); // Delay of 2 seconds
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

  useEffect(() => {
    // Scroll to the top of the chat history section
    chatHistoryRef.current.scrollTop = chatHistoryRef.current.scrollHeight;
  }, [chatHistory]);

  return (
    <div className="part-eight-container">
      <div className="chat-history" ref={chatHistoryRef}>
        {chatHistory.map((chat, index) => (
          <div
            key={index}
            className={`chat-message ${chat.sender === 'user' ? 'user' : 'chatbot'}`}
          >
            {chat.sender === 'user' && (
              <span className="user-name">{chat.name}: </span>
            )}
            {chat.sender === 'chatbot' && (
              <span className="chatbot-name">{chat.name}: </span>
            )}
            {chat.message}
          </div>
        ))}
        {isChatbotTyping && (
          <div className="chat-message chatbot">
            <span className="typing-indicator">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </span>
          </div>
        )}
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
