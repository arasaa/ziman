import React, { useState, useEffect } from 'react';
import './partFour.css';
import words from '../data/words';

const ParFour = () => {
  const [boxPosition, setBoxPosition] = useState({ x: 0, y: 0 });
  const containerSize = { width: 400, height: 400 };
  const boxSize = { width: 50, height: 50 };
  const [gameOver, setGameOver] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [boxesClicked, setBoxesClicked] = useState(0);
  const totalBoxes = 3;

  useEffect(() => {
    if (!gameOver) {
      const intervalId = setInterval(() => {
        const maxX = containerSize.width - boxSize.width;
        const maxY = containerSize.height - boxSize.height;
        const nextX = Math.floor(Math.random() * maxX);
        const nextY = Math.floor(Math.random() * maxY);
        setBoxPosition({ x: nextX, y: nextY });
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [gameOver]);


 const handleBoxClick = (event) => {
  if (!gameOver) {
    const box = event.target;
    const currentMeaning = words[currentWordIndex].bedeutung[0];
    const clickedWord = box.getAttribute('data-word');
    if (box.style.display !== 'none') {
      if (clickedWord === currentMeaning) {
        box.style.display = 'none';
        setBoxesClicked((prevBoxesClicked) => prevBoxesClicked + 1);
        setCurrentWordIndex((prevIndex) => prevIndex + 1);
      } else {
        alert('Wrong word!');
      }
    }
    if (boxesClicked + 1 === totalBoxes) {
      setGameOver(true);
    }
  }
};


  //const currectWord = box.getAttribute('data-word');

{/**origin hadleboxclick


 const handleBoxClick = (event) => {
    if (!gameOver) {
      const box = event.target;
      if (box.style.display !== 'none') {
        box.style.display = 'none';
        setBoxesClicked((prevBoxesClicked) => prevBoxesClicked + 1);
        setCurrentWordIndex((prevIndex) => prevIndex + 1);
      }
      if (boxesClicked + 1 === totalBoxes) {
        setGameOver(true);
      }
    }
  };

*/}

  const currentWord = words[currentWordIndex];

  
  const handleRefreshClick = () => {
    setBoxPosition({ x: 0, y: 0 });
    setGameOver(false);
    setBoxesClicked(0);
    setCurrentWordIndex(0);
  }; 

  
  const currentMeaning = currentWord.bedeutung[0];

  return (
    <div className='part-four-container'>
      <div>
          <p className='bedeutung-container' key={0}>{currentMeaning}</p>
      </div>

      {!gameOver && (
        <div>
          <div
            className='hallo'
            data-word="مرحبا"
            style={{
              top: `${boxPosition.y}px`,
              left: `${boxPosition.x}px`,
            }}
            onClick={handleBoxClick}
            //onClick={(event) => handleBoxClick(event, 'hallo')}
           // onClick={(event) => handleBoxClick(event)}
            //onClick={hadleRightClick}
           //onClick={handleBoxClickAndRightClick}
          >
            hallo
          </div>

          <div
            className='gutenMorgen'
            data-word="صباح الخير"
            style={{
              top: `${boxPosition.y * Math.floor(Math.random() * 5)}px`,
              left: `${boxPosition.x * Math.floor(Math.random() * 5)}px`,
            }}
            onClick={handleBoxClick}
          > Guten Morgen</div>

          <div
            className='gutenTag'
            data-word="انهارك سعيد"
            style={{
              top: `${boxPosition.y * Math.floor(Math.random() * 5)}px`,
              left: `${boxPosition.x * Math.floor(Math.random() * 5)}px`,
            }}
            onClick={handleBoxClick}
          > Guten Morgen</div>

<div
            className='gutenAbend'
            data-word="مساء الخير"
            style={{
              top: `${boxPosition.y * Math.floor(Math.random() * 5)}px`,
              left: `${boxPosition.x * Math.floor(Math.random() * 5)}px`,
            }}
            onClick={handleBoxClick}
          > Guten Morgen</div>
      
      <div
            className='aufWiedersehen'
            data-word="الى اللقاء"
            style={{
              top: `${boxPosition.y * Math.floor(Math.random() * 5)}px`,
              left: `${boxPosition.x * Math.floor(Math.random() * 5)}px`,
            }}
            onClick={handleBoxClick}
          > Guten Morgen</div>

<div
            className='WieGehtsIhnen'
            data-word="كيف حال حضرتك؟"
            style={{
              top: `${boxPosition.y * Math.floor(Math.random() * 5)}px`,
              left: `${boxPosition.x * Math.floor(Math.random() * 5)}px`,
            }}
            onClick={handleBoxClick}
          > Guten Morgen</div>

<div
            className='ichHeiß'
            data-word="...انا اسمي"
            style={{
              top: `${boxPosition.y * Math.floor(Math.random() * 5)}px`,
              left: `${boxPosition.x * Math.floor(Math.random() * 5)}px`,
            }}
            onClick={handleBoxClick}
          > Guten Morgen</div>

<div
            className='ichHeißAli'
            data-word="انا اسمي علي"
            style={{
              top: `${boxPosition.y * Math.floor(Math.random() * 5)}px`,
              left: `${boxPosition.x * Math.floor(Math.random() * 5)}px`,
            }}
            onClick={handleBoxClick}
          > Guten Morgen</div>

<div
            className='wieHeißenSie'
            data-word="ما اسم حضرتك؟"
            style={{
              top: `${boxPosition.y * Math.floor(Math.random() * 5)}px`,
              left: `${boxPosition.x * Math.floor(Math.random() * 5)}px`,
            }}
            onClick={handleBoxClick}
          > Guten Morgen</div>

</div>)}

        {gameOver && (
      <div >
        <p className='game-over'>Spiel ist aus</p>
      <button className='gam-over-button' onClick={handleRefreshClick}>nochmal abspielen</button>
       
      </div>
      )}

    </div>
  );
};

export default ParFour;