import React from 'react'
import { useState } from 'react'
import './partThree.css'
import { useEffect } from 'react';
import { words } from "../data/words";

const PartThree = () => {

    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [selectBedeutungIndex, setSelectBedeutungIndex] = useState(null);
    const [countdown, setCountdown] = useState(5);

  
    const handleFinish = () => {
        alert('Quiz finished!');
      }
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


    const handleBeudeutngOptionClick = (index) => {
        setSelectBedeutungIndex(index);
    };
 
          const handleNextWordClick = () => {
            const isLastWord = currentWordIndex === words.length - 1;
          
            if (isLastWord) {
              alert(`Quiz beendet! Sie haben ${score} von ${words.length} Punkten erzielt.`);
             // onFinish();
            } else {
              const isAnswered = selectBedeutungIndex !== null;
              const isTimeout = countdown === 0;
          
              if (isAnswered || isTimeout) {
                const isCorrect = selectBedeutungIndex === words[currentWordIndex].currectBedeutungIndex;
                const newScore = isCorrect ? score + 1 : score;
            
                setSelectBedeutungIndex(null);
                setCurrentWordIndex(currentWordIndex + 1);
                setScore(newScore);
                setCountdown(5);
              }
            }
          };
       
    
  return (
    <div className='part-three-container'>
        <h2>Wortschatztest</h2>
        <p>{`Punkt: ${score}/${words.length}`}</p>
        <p>{`Wort ${currentWordIndex + 1}/${words.length}: ${words[currentWordIndex].word}`}</p>
        <ul>
            {words[currentWordIndex].bedeutung.map((bedeutung, index) => (
                <li key={index}>
                    <button onClick={() => handleBeudeutngOptionClick (index)}>{bedeutung}</button>
                </li>

            ))}

        </ul>
        <button onClick={handleNextWordClick}>Nächstes Wort</button>
        <p>{`Verbleibende Zeit: ${countdown} Sekunden`}</p>
    </div>
  )
}

export default PartThree
export { words };