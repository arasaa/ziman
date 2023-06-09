import React, { useState, useEffect, useRef } from 'react';
import './partEightChatbot.css';

const PartEightChatbot = () => {
  const [userMessage, setUserMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [isChatbotTyping, setIsChatbotTyping] = useState(false);
  const [hasAskedName, setHasAskedName] = useState(false);
  const chatHistoryRef = useRef(null);
  const [userName, setUserName] = useState(null);

  const handleUserMessageChange = (e) => {
    setUserMessage(e.target.value);
  };

  const handleUserMessageSubmit = (e) => {
    e.preventDefault();

    setChatHistory((prevChatHistory) => [
      ...prevChatHistory,
      { message: userMessage, sender: 'user', name: 'User' },
    ]);

    setUserMessage('');

    setIsChatbotTyping(true);

    setTimeout(() => {
      const chatbotResponse = generateChatbotResponse(userMessage);

      setChatHistory((prevChatHistory) => [
        ...prevChatHistory,
        { message: chatbotResponse, sender: 'chatbot', name: 'Chatbot' },
      ]);

      setIsChatbotTyping(false);
    }, 2000);
  };

  const generateChatbotResponse = (userMessage) => {
    const responseMapping = {
      'hallo': 'Hallo, wie kann ich Ihnen helfen?',
      'name': `Mein Name ist Chatbot, Freut mich, ${userName}, wie kann ich Ihnen helfen?`,
      'wie heißen Sie': `Mein Name ist Chatbot, Freut mich, ${userName}, wie kann ich Ihnen helfen?`,
      'wer bist du': `Mein Name ist Chatbot, Freut mich, ${userName}, wie kann ich Ihnen helfen?`,
      'wie geht es Ihnen': 'Es geht mir gut, danke. Und dir?',
      'gut': 'Das ist schön zu hören!',
      'ich komme aus Syrien': 'Warum lernen Sie Deutsch?',
      'ich bin aras': 'hallo aras',
      'danke': 'Gern geschehen!',
      'default': 'Es tut mir leid, aber ich verstehe es nicht. Können Sie die Frage bitte umformulieren oder eine andere Frage stellen?',
    };
  
    const questionMapping = {
      'ok': 'Woher kommen Sie?',
      'ja': 'Woher kommen Sie?',
      'frage1': 'Wie lautet Ihre erste Frage?',
      'frage2': 'Wie lautet Ihre zweite Frage?',
      // Add more questions as needed
    };
  
    const lowercaseUserMessage = userMessage.toLowerCase();
  
    if (responseMapping.hasOwnProperty(lowercaseUserMessage)) {
      return responseMapping[lowercaseUserMessage];
    }
  
    if (!userName) {
      setHasAskedName(true);
      setUserName(userMessage);
      return `Hallo, ${userMessage}. Lass uns anfangen`;
    }
  
    if (questionMapping.hasOwnProperty(lowercaseUserMessage)) {
      return questionMapping[lowercaseUserMessage];
    }
  
    return responseMapping['default'];
  };
  
  useEffect(() => {
    const chatHistoryElement = chatHistoryRef.current;
    chatHistoryElement.scrollTop = chatHistoryElement.scrollHeight;
  }, [chatHistory]);

  useEffect(() => {
    setChatHistory((prevChatHistory) => [
      { message: 'Wie heißen Sie?', sender: 'chatbot', name: 'Chatbot' },
    ]);
  }, []);

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
