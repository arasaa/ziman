import React, { useState, useEffect } from 'react';
import { words } from '../data/words';
import PartFour from './PartFour'

const ThreeTest = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectBedeutungIndex, setSelectBedeutungIndex] = useState(null);
  const [countdown, setCountdown] = useState(5);
  const [isLastWord, setIsLastWord] = useState(false);

  const handleFinish = () => {
    alert(`Quiz beendet! Sie haben ${score} von ${words.length} Punkten erzielt.`);
    setCurrentWordIndex(0);
    setScore(0);
    setSelectBedeutungIndex(null);
    setIsLastWord(false);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(countdown => countdown - 1);
    }, 1000);
    
    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (countdown === 0) {
      handleNextWordClick();
    }
  }, [countdown]);

  const handleBeudeutngOptionClick = index => {
    setSelectBedeutungIndex(index);

    const isCorrect = index === words[currentWordIndex]?.currectBedeutungIndex;
    const newScore = isCorrect ? score + 1 : score;

    setCurrentWordIndex(currentWordIndex + 1);
    setScore(newScore);
    setCountdown(5);

    if (currentWordIndex === words.length - 1) {
      setIsLastWord(true);
    }
  };

  const handleNextWordClick = () => {
    if (isLastWord) {
      handleFinish();
    } else {
      const isAnswered = selectBedeutungIndex !== null;
      const isTimeout = countdown === 0;

      if (isAnswered || isTimeout) {
        const isCorrect = selectBedeutungIndex === words[currentWordIndex]?.currectBedeutungIndex;
        const newScore = isCorrect ? score + 1 : score;

        setSelectBedeutungIndex(null);
        setCurrentWordIndex(currentWordIndex + 1);
        setScore(newScore);
        setCountdown(5);

        if (currentWordIndex === words.length - 1) {
          setIsLastWord(true);
        }
      }
    }
  };

  return (
    <div className="part-three-container">
      <h2>Wortschatztest</h2>
      <p>{`Punkt: ${score}/${words.length}`}</p>

      <p>{`Wort ${currentWordIndex + 1}/${words.length}: ${words[currentWordIndex]?.word}`}</p>

      <ul>
        {words[currentWordIndex]?.bedeutung.map((bedeutung, index) => (
          <li key={index}>
            <button onClick={() => handleBeudeutngOptionClick(index)}>{bedeutung}</button>
          </li>
        ))}
      </ul>


      {currentWordIndex === words.length  ? (
        <p>{`Quiz beendet! Sie haben ${score} von ${words.length} Punkten erzielt.`}</p>
      ) : (
        <button onClick={handleNextWordClick}>Nächstes Wort</button>
      )}
      <p>{`Verbleibende Zeit: ${countdown} Sek...`}</p>
      
      {currentWordIndex === words.length - 1 && <PartFour /> }
    </div>
  );
};



export default ThreeTest;
export { words };
