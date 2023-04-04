import React from 'react'
import { useState } from 'react'
import words from '../data/words';

const PartThree = ({words}) => {

    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [selectBedeutungIndex, setSelectBedeutungIndex] = useState(null);

    const handleBeudeutngOptionClick = (index) => {
        setSelectBedeutungIndex(index);
    };

    const handleNextWordClick = () => {
        if(selectBedeutungIndex !== null){
            const isCorrect = selectBedeutungIndex === words[currentWordIndex].currectBedeutungIndex;
        const newScore = isCorrect ? score + 1 : score;        

        if(currentWordIndex === words.length - 1){
            alert(`Quiz beendet! Sie haben ${newScore} von ${words.length} Punkten erzielt.`);
        }else {
            setSelectBedeutungIndex(null);
            setCurrentWordIndex(currentWordIndex + 1);
            setScore(newScore);
        }}};
    
  return (
    <div>
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
    </div>
  )
}

export default PartThree