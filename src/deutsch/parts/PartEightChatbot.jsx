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
      'hallo': 'Hallo, wie kann ich Ihnen helfen?',
      'name': 'Mein Name ist Chatbot, Freut mich, Sie kennenzulernen!',
      'wie geht es Ihnen': 'Es geht mir gut, danke. Und du?',
      'gut': 'Das ist schön zu hören!',
      'danke': 'Gern geschehen!',
      'default': 'Es tut mir leid, aber ich verstehe es nicht. Können Sie die Frage bitte umformulieren oder eine andere Frage stellen?',
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
    const chatHistoryElement = chatHistoryRef.current;
    chatHistoryElement.scrollTop = chatHistoryElement.scrollHeight;
  }, [chatHistory]);

  return (
    <div className="part-eight-container">
      <div className="chat-history" ref={chatHistoryRef}>
        <div className="chat-messages">
          {chatHistory.map((chat, index) => {
            const isUser = chat.sender === 'user';

            return (
              <div
                key={index}
                className={`chat-message ${isUser ? 'user' : 'chatbot'}`}
              >
                {isUser ? (
                  <span className="user-name">{chat.name}: </span>
                ) : (
                  <span className="chatbot-name">{chat.name}: </span>
                )}
                {chat.message}
              </div>
            );
          })}
        </div>
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
