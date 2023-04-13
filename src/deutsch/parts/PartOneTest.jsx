import React, { useState } from 'react';
import PartTow from './PartTow';
import './partTest.css'
import { words, colors } from '../data/words';


function PartOneTest() {
  const [count, setCount] = useState(0);
  const [isShown, setIsShown] = useState(false);

  const handleNextClick = () => {
    setCount(count + 1);
  };

  const handleButtonClick = () => {
    setIsShown(true);
  };

{/**   const renderGreeting = (word) => (
    <div className='p1Container' key={word.word}>
      <p>{word.word}</p>
      <p>{word.bedeutung[word.currectBedeutungIndex]}</p>
    </div>
);*/}
const renderGreeting = (word) => (
  <div className='p1Container' key={word.word} style={{ color: word.color }}>
    <p>{word.word}</p>
    <p>{word.bedeutung[word.currectBedeutungIndex]}</p>
  </div>
);

  return (
    <>
      {renderGreeting(words[count])}

      {count > 0 && <button className='partOneButtons prev-partOneButtons' onClick={() => setCount(count - 1)}>prev</button>}
      {count < words.length - 1 && (
        <button className='partOneButtons' onClick={handleNextClick}>next</button>
      )}

      <div className='partTowa1' id='box' onClick={handleButtonClick}>
        {isShown && <PartTow />}
      </div>
    </>
  );
}

export default PartOneTest;