const fou = [
    {
        word: 'Hallo',
        bedeutung: ['مرحبا','اهلا'],
        currectBedeutungIndex: 0,
      
    },
    {
        word: 'Guten Morgen',
        bedeutung: ['صباح الخير','مرحبا'],
        currectBedeutungIndex: 0,
   
    },
    {
        word: 'Guten Tag',
        bedeutung: ['نهارك سعيد','مرحبا'],
        currectBedeutungIndex: 0,
      
    },
    {
        word: 'Guten Abend',
        bedeutung: ['مساء الخير','صباح الخير'],
        currectBedeutungIndex: 0,
      
    },
    {
        word: 'Auf wiedersehen!',
        bedeutung: ['الى اللقاء','مرحبا'],
        currectBedeutungIndex: 0,
 
    },
    {
        word: 'Wie geht es Ihnen?',
        bedeutung: ['كيف حال حضرتك؟','اين انت'],
        currectBedeutungIndex: 0,
     
    },
    {
        word: 'Ich heiße...',
        bedeutung: ['...انا اسمي','انا ذاهب'],
        currectBedeutungIndex: 0,
     
    },
    {
        word: 'Ich heiße Ali!',
        bedeutung: ['!انا اسمي علي','مرحبا بك'],
        currectBedeutungIndex: 0,
    
    },
    {
        word: 'Wie heißen Sie?',
        bedeutung: ['ما اسم حضرتك؟','كيف حالك؟'],
        currectBedeutungIndex: 0,
   
    },
];

export default fou



{/**

import React, { useState, useEffect } from 'react';
import './partFour.css';
//import words from '../data/words';
//import wordsPartFour from '../data/wordsPartFour';
//import fou from '../data/fou';

const PartFour = () => {
  const [boxPosition, setBoxPosition] = useState({ x: 5, y: 3 });
  const containerSize = { width: 350, height: 400 };
  const boxSize = { width: 50, height: 50 };
  const [gameOver, setGameOver] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [boxesClicked, setBoxesClicked] = useState(0);
  const totalBoxes = 9;

  const fou = [
    {
        word: 'Hallo',
        bedeutung: ['مرحبا','اهلا'],
        currectBedeutungIndex: 0,
      
    },
    {
        word: 'Guten Morgen',
        bedeutung: ['صباح الخير','مرحبا'],
        currectBedeutungIndex: 0,
   
    },
    {
        word: 'Guten Tag',
        bedeutung: ['نهارك سعيد','مرحبا'],
        currectBedeutungIndex: 0,
      
    },
    {
        word: 'Guten Abend',
        bedeutung: ['مساء الخير','صباح الخير'],
        currectBedeutungIndex: 0,
      
    },
    {
        word: 'Auf wiedersehen!',
        bedeutung: ['الى اللقاء','مرحبا'],
        currectBedeutungIndex: 0,
 
    },
    {
        word: 'Wie geht es Ihnen?',
        bedeutung: ['كيف حال حضرتك؟','اين انت'],
        currectBedeutungIndex: 0,
     
    },
    {
        word: 'Ich heiße...',
        bedeutung: ['...انا اسمي','انا ذاهب'],
        currectBedeutungIndex: 0,
     
    },
    {
        word: 'Ich heiße Ali!',
        bedeutung: ['!انا اسمي علي','مرحبا بك'],
        currectBedeutungIndex: 0,
    
    },
    {
        word: 'Wie heißen Sie?',
        bedeutung: ['ما اسم حضرتك؟','كيف حالك؟'],
        currectBedeutungIndex: 0,
   
    },
];



  useEffect(() => {
    if (!gameOver) {
      const intervalId = setInterval(() => {
        const maxX = containerSize.width - boxSize.width;
        const maxY = containerSize.height - boxSize.height;
        const nextX = Math.floor(Math.random() * maxX);
        const nextY = Math.floor(Math.random() * maxY);
        setBoxPosition({ x: nextX, y: nextY });
      }, 16000);
      return () => clearInterval(intervalId);
    }
  }, [gameOver]);


  const currentWord = fou[currentWordIndex]
  const currentMeaning = currentWord.bedeutung[0];
 const handleBoxClick = (event) => {
  if (!gameOver) {
    const box = event.target;
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
  
  
  const handleRefreshClick = () => {
    setBoxPosition({ x: 0, y: 0 });
    setGameOver(false);
    setBoxesClicked(0);
    setCurrentWordIndex(0);
  }; 

  

  return (
    <div className='part-four-container'>
      <div>
          <p className='bedeutung-container' key={0}>{currentMeaning}</p>
      </div>

      {!gameOver && (
        <div className='word-space'>
          <div
            className='hallo'
            data-word="مرحبا"
            style={{
              top: `${boxPosition.y * Math.floor(Math.random() * 4.3)}px`,
              left: `${boxPosition.x * Math.floor(Math.random() * 5)}px`,
            }}
            onClick={handleBoxClick}
             >hallo</div>

          <div
            className='gutenMorgen'
            data-word="صباح الخير"
            style={{
              top: `${boxPosition.y * Math.floor(Math.random() * 4.4)}px`,
              left: `${boxPosition.x * Math.floor(Math.random() * 5)}px`,
            }}
            onClick={handleBoxClick}
          > Guten Morgen</div>

          <div
            className='gutenTag'
            data-word="نهارك سعيد"
            style={{
              top: `${boxPosition.y * Math.floor(Math.random() * 3.3)}px`,
              left: `${boxPosition.x * Math.floor(Math.random() * 6)}px`,
            }}
            onClick={handleBoxClick}
          >Guten Tag</div>

<div
            className='gutenAbend'
            data-word="مساء الخير"
            style={{
              top: `${boxPosition.y * Math.floor(Math.random() * 5.2)}px`,
              left: `${boxPosition.x * Math.floor(Math.random() * 6.1)}px`,
            }}
            onClick={handleBoxClick}
          >Guten Abend</div>
      
      <div
            className='aufWiedersehen'
            data-word="الى اللقاء"
            style={{
              top: `${boxPosition.y * Math.floor(Math.random() * 5.3)}px`,
              left: `${boxPosition.x * Math.floor(Math.random() * 6.2)}px`,
            }}
            onClick={handleBoxClick}
          >Auf wiedersehen!</div>

<div
            className='WieGehtsIhnen'
            data-word="كيف حال حضرتك؟"
            style={{
              top: `${boxPosition.y * Math.floor(Math.random() * 5.4)}px`,
              left: `${boxPosition.x * Math.floor(Math.random() * 6.3)}px`,
            }}
            onClick={handleBoxClick}
          >Wie geht es Ihnen?</div>

<div
            className='ichHeiß'
            data-word="...انا اسمي"
            style={{
              top: `${boxPosition.y * Math.floor(Math.random() * 5.5)}px`,
              left: `${boxPosition.x * Math.floor(Math.random() * 7.4)}px`,
            }}
            onClick={handleBoxClick}
          >Ich heiße...</div>

<div
            className='ichHeißAli'
            data-word="!انا اسمي علي"
            style={{
              top: `${boxPosition.y * Math.floor(Math.random() * 5.6)}px`,
              left: `${boxPosition.x * Math.floor(Math.random() * 5.5)}px`,
            }}
            onClick={handleBoxClick}
          >Ich heiße Ali!</div>

<div
            className='wieHeißenSie'
            data-word="ما اسم حضرتك؟"
            style={{
              top: `${boxPosition.y * Math.floor(Math.random() * 5.7)}px`,
              left: `${boxPosition.x * Math.floor(Math.random() * 4.6)}px`,
            }}
            onClick={handleBoxClick}
          >Wie heißen Sie?</div>

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

export default PartFour;
//export {fou}

*/}