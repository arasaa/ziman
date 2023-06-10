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
        { message: chatbotResponse.message, sender: 'chatbot', name: 'Chatbot', buttons: chatbotResponse.buttons },
      ]);

      setIsChatbotTyping(false);
    }, 2000);
  };

  const responsePatterns = [
    { pattern: /hi|hey/i, response: 'Hello! How can I assist you?' },
    { pattern: /open account/i, response: 'To open an account, please visit our website and fill out the application form.', buttons: { label: 'Open Account', url: 'https://example.com/open-account' } },
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
        return { message: pattern.response, buttons: pattern.buttons };
      }
    }

    if (!userName) {
      // Extract the name from the user's message
      const namePattern = /(?:mein Name ist|ich bin|ich heiße)?\s*([\w\s]+)/i;
      const match = lowercaseUserMessage.match(namePattern);

      if (match && match[1]) {
        const name = match[1];
        setUserName(name);
        const welcomeMessage = `Hallo, ${name}! Wie kann ich Ihnen helfen?`;
        return { message: welcomeMessage };
      }
    }

    // Check if the user is currently being asked a question
    const lastChat = chatHistory[chatHistory.length - 1];
    if (lastChat && lastChat.buttons) {
      const selectedButton = lastChat.buttons.find((button) => button.label === lowercaseUserMessage);
      if (selectedButton) {
        if (selectedButton.isCorrect) {
          // User provided the correct answer
          const nextQuestion = getNextQuestion();
          if (nextQuestion) {
            return { message: 'Excellent!', buttons: nextQuestion };
          } else {
            return { message: 'You answered all the questions correctly!' };
          }
        } else {
          // User provided the wrong answer
          return { message: 'Wrong answer. Try again.', buttons: lastChat.buttons };
        }
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

  const getNextQuestion = () => {
    // Define the list of questions and their corresponding buttons
    const questions = [
      {
        question: 'Was bedeutet "Alter"?',
        buttons: [
          { label: 'العمر', isCorrect: true },
          { label: 'الوزن', isCorrect: false },
          { label: 'الطول', isCorrect: false }
        ]
      },
      {
        question: 'Was bedeutet "Stadt"?',
        buttons: [
          { label: 'مدينة', isCorrect: true },
          { label: 'قرية', isCorrect: false },
          { label: 'بلدة', isCorrect: false }
        ]
      },
      // Add more questions and buttons as needed
    ];
  
    // Find the next unanswered question
    const lastQuestionIndex = chatHistory.findIndex((chat) => chat.buttons);
    const nextQuestionIndex = lastQuestionIndex + 1;
  
    if (nextQuestionIndex < questions.length) {
      const nextQuestion = questions[nextQuestionIndex];
      const buttons = nextQuestion.buttons.map((button, index) => (
        <button
          key={index}
          onClick={() => handleUserMessageSubmit(button.label)}
        >
          {button.label}
        </button>
      ));
      return { question: nextQuestion.question, buttons };
    } else {
      return null; // All questions answered
    }
  };
  
  useEffect(() => {
    const chatHistoryElement = chatHistoryRef.current;
    chatHistoryElement.scrollTop = chatHistoryElement.scrollHeight;
  }, [chatHistory]);

  useEffect(() => {
    if (userName) {
      const nextQuestion = getNextQuestion();
      if (nextQuestion) {
        setChatHistory((prevChatHistory) => [
          ...prevChatHistory,
          { message: `Hallo, ${userName}! ${nextQuestion.question}`, sender: 'chatbot', name: 'Chatbot', buttons: nextQuestion.buttons },
        ]);
      } else {
        setChatHistory((prevChatHistory) => [
          ...prevChatHistory,
          { message: `Hallo, ${userName}! You answered all the questions correctly!`, sender: 'chatbot', name: 'Chatbot' },
        ]);
      }
    } else {
      setChatHistory((prevChatHistory) => [
        { message: 'Wie heißen Sie?', sender: 'chatbot', name: 'Chatbot' },
      ]);
    }
  }, [userName]);

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
                      <button
                        key={buttonIndex}
                        onClick={() => handleUserMessageSubmit(button.label)}
                      >
                        {button.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
          {isChatbotTyping && (
            <div className="chat-message chatbot">
              <span className="chatbot-name">Chatbot: </span>
              <span className="typing-indicator">Typing...</span>
            </div>
          )}
        </div>
      </div>
      <div className="chat-input">
        <form onSubmit={handleUserMessageSubmit}>
          <input
            type="text"
            placeholder="Type a message..."
            value={userMessage}
            onChange={handleUserMessageChange}
            autoFocus
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default PartEightChatbot;
