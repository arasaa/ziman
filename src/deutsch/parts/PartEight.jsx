import React, { useState } from 'react';
import './partEight.css'
import hallo from '../sounds/hallo.mp3'
import bitte from '../sounds/bitte.mp3'
import abend from '../sounds/abend.mp3'

const questions = [
  {
    question: 'What is the capital of France?',
    options: ['Paris', 'London', 'Berlin'],
    answer: 'Paris'
  },
  {
    question: 'Which planet is known as the Red Planet?',
    options: ['Venus', 'Mars', 'Jupiter'],
    answer: 'Mars'
  },
  {
    question: 'Who painted the Mona Lisa?',
    options: ['Pablo Picasso', 'Leonardo da Vinci', 'Vincent van Gogh'],
    answer: 'Leonardo da Vinci'
  }
];

const audioQuestions = [
    {
      audio: hallo,
      word: 'Hello',
      options: ['Guten Morgen', 'Auf Wiedersehen', 'Danke'],
      answer: 'Guten Morgen'
    },
    {
      audio: bitte,
      word: 'Goodbye',
      options: ['Danke', 'Guten Tag', 'Auf Wiedersehen'],
      answer: 'Auf Wiedersehen'
    },
    {
      audio: abend,
      word: 'Thank you',
      options: ['Auf Wiedersehen', 'Guten Tag', 'Danke'],
      answer: 'Danke'
    }
  ];

const PartEight = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);

    if (answer === getCurrentQuestion().answer) {
      // Correct answer
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer('');
      setShowFeedback(false);

      if (currentQuestion === questions.length - 1) {
        if (currentQuestion === questions.length + audioQuestions.length - 1) {
          // All questions completed
          setShowResults(true);
          setScore(calculateScore());
        }
      }
    } else {
      // Wrong answer
      setShowFeedback(true);
    }
  };

  const calculateScore = () => {
    let correctAnswers = 0;
    questions.concat(audioQuestions).forEach((question, index) => {
      if (question.answer === selectedAnswer[index]) {
        correctAnswers++;
      }
    });
    return correctAnswers;
  };

  const getCurrentQuestion = () => {
    if (currentQuestion < questions.length) {
      return questions[currentQuestion];
    } else {
      return audioQuestions[currentQuestion - questions.length];
    }
  };

  return (
    <div className="part-eight-container">
      {showResults ? (
        <div>
          <h3>Quiz Results</h3>
          <p>Your score: {score}/{questions.length + audioQuestions.length}</p>
        </div>
      ) : (
        <div>
          {currentQuestion < questions.length ? (
            <div>
              <h3>{getCurrentQuestion().question}</h3>
              <ul>
                {getCurrentQuestion().options.map((option, index) => (
                  <li key={index} onClick={() => handleAnswerClick(option)}>
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div>
              <h3>Question {currentQuestion + 1 - questions.length}</h3>
              <audio controls autoPlay src={getCurrentQuestion().audio} />
              <p>What is the German translation of "{getCurrentQuestion().word}"?</p>
              <ul>
                {getCurrentQuestion().options.map((option, index) => (
                  <li key={index} onClick={() => handleAnswerClick(option)}>
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {showFeedback && <p>Wrong answer! Try again.</p>}
        </div>
      )}
    </div>
  );
};

export default PartEight;
