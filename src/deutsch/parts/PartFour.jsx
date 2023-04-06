import React, { useState, useEffect } from 'react';
import './partFour.css';

const ParFour = () => {
  const [boxPosition, setBoxPosition] = useState({ x: 0, y: 0 });
  const containerSize = { width: 400, height: 400 };
  const boxSize = { width: 50, height: 50 };
  const [gameOver, setGameOver] = useState(false);
  //the total numbers of boxes/ to help gameover button apearing when
  // all boxes are clicked
  const [boxesClicked, setBoxesClicked] = useState(0);
  const totalBoxes = 3;

  useEffect(() => {
    if(!gameOver){
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

{/**  const handleBoxClick = () => {
    if (!gameOver) {
      const box = document.getElementById('box');
      if (box.style.display !== 'none') {
        box.style.display = 'none';
        setBoxesClicked(boxesClicked + 1);
      }
      if (boxesClicked + 1 === totalBoxes) {
        setGameOver(true);
      }
    }
  }; */}

  const handleBoxClick = (event) => {
    if (!gameOver) {
      const box = event.target;
      if (box.style.display !== 'none') {
        box.style.display = 'none';
        setBoxesClicked(prevBoxesClicked => prevBoxesClicked + 1);
      }
      if (boxesClicked + 1 === totalBoxes) {
        setGameOver(true);
      }
    }
  };
{/**
  const handleBoxClick1 = () => {
    document.getElementById('gutenMorgen').style.display = 'none';
    if(boxesClicked + 1 === totalBoxes){
      setGameOver(true);
    }
  }
  const handleBoxClick2 = () => {
    document.getElementById('danke').style.display = 'none';
    if(boxesClicked + 1 === totalBoxes){
      setGameOver(true);
    }
  }
   */}

  const handleRefreshClick = () => {
    setBoxPosition({ x: 0, y: 0 });
    setGameOver(false);
    setBoxesClicked(0);
  }

  return (
    <div className='part-four-container'>
{!gameOver && (
      <div>
      
        
      <div
        className='hallo'
        style={{
          top: `${boxPosition.y}px`,
          left: `${boxPosition.x}px`,
        }}
        onClick={handleBoxClick}
      >hallo</div>
     

<div
        className='danke'
        style={{
          top: `${boxPosition.y * Math.floor(Math.random() * 5)}px`,
          left: `${boxPosition.x * Math.floor(Math.random() * 5)}px`,
        }}
        onClick={handleBoxClick}
      > danke</div>

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
        <p>gameOver</p>
      <button style={{ display: 'block' }} className='gam-over-button' onClick={handleRefreshClick}>Play again</button>
      </div>
      )}

    </div>
  );
};

export default ParFour;