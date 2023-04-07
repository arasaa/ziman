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

  const handleRefreshClick = () => {
    setBoxPosition({ x: 0, y: 0 });
    setGameOver(false);
    setBoxesClicked(0);
    setCurrentWordIndex(0);
  };

  const currentWord = words[currentWordIndex];
  const currentMeaning = currentWord.bedeutung[0];

  return (
    <div className='part-four-container'>
      <div>
          <p key={0}>{currentMeaning}</p>
      </div>

      {!gameOver && (
        <div>
          <div
            className='hallo'
            style={{
              top: `${boxPosition.y}px`,
              left: `${boxPosition.x}px`,
            }}
            onClick={handleBoxClick}
          >
            hallo
          </div>

          <div
            className='danke'
            style={{
              top: `${boxPosition.y * Math.floor(Math.random() * 5)}px`,
              left: `${boxPosition.x * Math.floor(Math.random() * 5)}px`,
            }}
            onClick={handleBoxClick}
          >
            danke
          </div>

          <div
            className='gutenMorgen'
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