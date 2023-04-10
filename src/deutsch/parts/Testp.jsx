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
      const word = box.getAttribute('data-word');
      const currentWord = words[currentWordIndex];
      const bedeutungIndex = currentWord.bedeutung.indexOf(word);
      if (bedeutungIndex) {
        currentWord.currectBedeutungIndex = bedeutungIndex;
        box.style.display = 'none';
        setBoxesClicked((prevBoxesClicked) => prevBoxesClicked + 1);
        console.log(`Boxes clicked: ${boxesClicked}`);
        setCurrentWordIndex((prevIndex) => prevIndex + 1);
      } else {
        box.classList.add('wrong-answer');
      }
      if (boxesClicked + 1 === totalBoxes || currentWordIndex === words.length - 1 || bedeutungIndex === +1) {
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

{/**
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

{/**
   const handleBoxClick = (event) => {
    if (!gameOver) {
      const box = event.target;
      const word = box.getAttribute('data-word');
      if (word === words[currentWordIndex].word) {
        box.style.display = 'none';
        setBoxesClicked((prevBoxesClicked) => prevBoxesClicked + 1);
        setCurrentWordIndex((prevIndex) => prevIndex + 1);
      } else {
        box.classList.add('wrong-answer');
      }
      if (boxesClicked + 1 === totalBoxes || currentWordIndex === words.length - 1) {
        setGameOver(true);
      }
    }
  };
 */}

{/**
  const hadleRightClick=(event)=>{
    const box = event.target;
    const word = box.getAttribute('data-word');
    if (word === words[currentWordIndex].word) {
      box.classList.add('wrong-answer');
    }
  }

  const handleBoxClickAndRightClick = (event) => {
    handleBoxClick(event);
    hadleRightClick(event);
  };
 */}
{/**  const handleBoxClick = (event) => {
    if (!gameOver) {
      const box = event.target;
      const word = box.getAttribute('data-word');
      if (word === words[currentWordIndex].word) {
        box.style.display = 'none';
        setBoxesClicked((prevBoxesClicked) => prevBoxesClicked + 1);
        setCurrentWordIndex((prevIndex) => prevIndex + 1);
      } else {
        box.classList.add('wrong-answer');
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
            data-word="hallo"
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
            className='danke'
            data-word="danke"
            style={{
              top: `${boxPosition.y * Math.floor(Math.random() * 5)}px`,
              left: `${boxPosition.x * Math.floor(Math.random() * 5)}px`,
            }}
            onClick={handleBoxClick}
           // onClick={(event) => handleBoxClick(event, 'danke')}
          // onClick={(event) => handleBoxClick(event)}
           //onClick={hadleRightClick}
          // onClick={handleBoxClickAndRightClick}
          >
            danke
          </div>

          <div
            className='gutenMorgen'
            data-word="gutenMorgen"
            style={{
              top: `${boxPosition.y * Math.floor(Math.random() * 5)}px`,
              left: `${boxPosition.x * Math.floor(Math.random() * 5)}px`,
            }}
            onClick={handleBoxClick}
          // onClick={(event) => handleBoxClick(event, 'gutenMorgen')}
       //   onClick={(event) => handleBoxClick(event)}
          //onClick={hadleRightClick}
         // onClick={handleBoxClickAndRightClick}
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