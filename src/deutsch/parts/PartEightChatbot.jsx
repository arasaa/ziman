import React, { useState, useEffect, useRef } from 'react';
import './partEightChatbot.css';

const PartEightChatbot = () => {
  const [userMessage, setUserMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [isChatbotTyping, setIsChatbotTyping] = useState(false);
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
        { message: chatbotResponse.message, sender: 'chatbot', name: 'Chatbot', button: chatbotResponse.button },
      ]);

      setIsChatbotTyping(false);
    }, 2000);
  };

  const responsePatterns = [
    { pattern: /hi|hey/i, response: 'Hello! How can I assist you?' },
    { pattern: /open account/i, response: 'To open an account, please visit our website and fill out the application form.', button: { label: 'Open Account', url: 'https://example.com/open-account' } },
    { pattern: /balance/i, response: 'You can check your account balance by logging into your online banking account.' },
    { pattern: /transfer money/i, response: 'You can transfer money between accounts using our mobile banking app.' },
    // Add more response patterns and replies as needed
  ];

  const questionPatterns = [
    { pattern: /hello|wie geht es dir|hi/i, question: 'Woher kommen Sie?' },
    {
      pattern: /was machst du/i,
      question: {
        message: 'Ich bin ein Chatbot, der Ihnen bei Fragen und Anliegen helfen kann.',
        buttons: [
          { label: 'Mehr erfahren', url: 'https://example.com/mehr-erfahren' },
          { label: 'Mehr', url: 'https://example.com/mehr' },
          { label: 'Erfahren', url: 'https://example.com/erfahren' }
        ]
      }
    },
    // Add more question patterns and questions as needed
  ];
  
  

  const generateChatbotResponse = (userMessage) => {
    const lowercaseUserMessage = userMessage.toLowerCase();
  
    // Check if any response patterns match the user's message
    for (const pattern of responsePatterns) {
      if (pattern.pattern.test(lowercaseUserMessage)) {
        return { message: pattern.response, button: pattern.button };
      }
    }
  
    if (!userName) {
      // Extract the name from the user's message
      const namePattern = /(mein name ist|ich bin|ich heiße)\s*([\w\s]+)/i;
      const match = lowercaseUserMessage.match(namePattern);
  
      if (match && match[2]) {
        const name = match[2];
        setUserName(name);
        return { message: `Hallo, ${name}. Wie kann ich Ihnen helfen?` };
      }
    }
  
    // Check if any question patterns match the user's message
    for (const pattern of questionPatterns) {
      if (pattern.pattern.test(lowercaseUserMessage)) {
        return { message: pattern.question };
      }
    }
  
    return { message: 'Es tut mir leid, aber ich verstehe Ihre Frage nicht. Wie kann ich Ihnen helfen?' };
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
                {typeof chat.message === 'string' ? (
                  <span>{chat.message}</span>
                ) : (
                  <div>
                    <span>{chat.message.message}</span>
                    {chat.message.buttons.map((button, buttonIndex) => (
                      <a key={buttonIndex} href={button.url}>
                        {button.label}
                      </a>
                    ))}
                  </div>
                )}
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
