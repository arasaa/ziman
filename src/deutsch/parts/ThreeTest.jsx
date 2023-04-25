import React, { useState, useEffect } from 'react';
import { words } from '../data/words';
import PartFour from './PartFour'

const ThreeTest = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectBedeutungIndex, setSelectBedeutungIndex] = useState(null);
  const [countdown, setCountdown] = useState(5);
  const [isLastWord, setIsLastWord] = useState(false);
  const [showPartFour, setShowPartFour] = useState(false);

  const handleFinish = () => {
  
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
      {currentWordIndex === words.length ? (
        <>
          <h2>Quiz beendet!</h2>
          <p>{`Sie haben ${score} von ${words.length} Punkten erzielt.`}</p>
          <button onClick={() => setShowPartFour(true)}>Zeige Teil 4</button>
        </>
      ) : (
        <>
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
          <button onClick={handleNextWordClick}>Nächstes Wort</button>
          <p>{`Verbleibende Zeit: ${countdown} Sek...`}</p>
        </>
      )}
      {showPartFour && <PartFour />}
    </div>
  );
  
  
};



export default ThreeTest;
export { words };
