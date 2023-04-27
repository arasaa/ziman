import React, { useState, useEffect } from 'react';
import { words } from '../data/words';
import PartFour from './PartFour'
import './partThree.css'

const PartThree = () => {
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
          <button onClick={() => setShowPartFour(true)}>nächste</button>
        </>
      ) : (
        <div className='quiz-container'>
          <div className='wortschatzWrapper'>
          <div className='wortschatOne'>Wortschatztest</div>
          <div className='wortschatTow'>Wortschatztest</div>
          </div>
          <p>{`Punkte: ${score}/${words.length}`}</p>
          <div>  Wort {currentWordIndex + 1}/ {words.length}: <br></br><br></br>
          <p>{words[currentWordIndex]?.word}</p>
           </div>
          <ul>
            {words[currentWordIndex]?.bedeutung.map((bedeutung, index) => (
              <li key={index}>
                <button onClick={() => handleBeudeutngOptionClick(index)}>{bedeutung}</button>
              </li>
            ))}
          </ul>
          <p>{`Verbleibende Zeit: ${countdown} Sekunden...`}</p>
        </div>
      )}
      {showPartFour && <PartFour />}
    </div>
  );
  
  
};



export default PartThree;
export { words };
