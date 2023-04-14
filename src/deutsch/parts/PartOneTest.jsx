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
const renderGreeting = (word, index) => (
  <div className={`p1Container ${word.className}`} key={word.word} style={{ color: word.color }}>
    <p className='words-elements'><span className='span-words-elements'>{word.word}</span></p>
    <p>{word.bedeutung[word.currectBedeutungIndex]}</p>
  </div>
);
const wordsWithClassName = words.map((word, index) => {
  return { ...word, className: `word-${index}` };
});

return (
  <div className='partOneTestContainer'>
  {wordsWithClassName.slice(0, count + 1).map((word, index) => (
  <div key={word.word} className={`word-animation ${word.className} ${index === count ? 'appear' : index < count ? '' : 'disappear'}`}>
    {renderGreeting(word, index)}
  </div>
))}

    {count > 0 && <button className='partOneButtons prev-partOneButtons' onClick={() => setCount(count - 1)}>prev</button>}
    {count < words.length - 1 && (
      <button className='partOneButtons' onClick={handleNextClick}>next</button>
    )}

    <div className='partTowa1' id='box' onClick={handleButtonClick}>
      {isShown && <PartTow />}
    </div>
  </div>
);

}

export default PartOneTest;
export { words, colors };





{/**



import React, { useState } from 'react'
import PartTow from './PartTow';
import './partOne.css'
import { words, colors } from '../data/words';

function ParOne() {

  const [count, setCount] = useState(0);
  const [isShown, setIsShown] = useState(false);

  const handleNextClick = () => {
    setCount(count + 1);
  };

  const handleButtonClick = () => {
    setIsShown(true)
  }

  //hiding the button of the part one and displaying the PartTow component
  const btn = document.getElementById('btn');
  function hideButton() {
    const box = document.getElementById('box');
    box.style.display = 'block';
  }


  const renderGreeting = (word, index) => (
    <div className={`p1Container ${word.className}`} key={word.word} style={{ color: word.color }}>
      <p className='words-elements'><span className='span-words-elements'>{word.word}</span></p>
      <p>{word.bedeutung[word.currectBedeutungIndex]}</p>
    </div>
  );
  const wordsWithClassName = words.map((word, index) => {
    return { ...word, className: `word-${index}` };
  });




  return (
    <div className='partOneTestContainer'>
    {wordsWithClassName.slice(0, count + 1).map((word, index) => (
    <div key={word.word} className={`word-animation ${word.className} ${index === count ? 'appear' : index < count ? '' : 'disappear'}`}>
      {renderGreeting(word, index)}
    </div>
  ))}
  
      {count > 0 && <button id='btn' className='partOneButtons prev-partOneButtons' onClick={() => {setCount(count - 1); hideButton()} }>prev</button>}
      {count < words.length - 1 && (
        <button className='partOneButtons' onClick={handleNextClick}>next</button>
      )}
  
      <div className='partTowa1' id='box' onClick={handleButtonClick}>
        {isShown && <PartTow />}
      </div>
    </div>
  );
}

export default ParOne
export { words, colors };




*/}