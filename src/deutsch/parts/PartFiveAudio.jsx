import React, { useEffect, useState } from 'react';
import './partFieve.css';
import hallo from '../sounds/hallo.mp3';
import aufWiederSehen from '../sounds/aufWiederSehen.mp3';
import gutenAbend from '../sounds/gutenAbend.mp3';
import gutenMorgen from '../sounds/gutenMorgen.mp3';
import ichHeise from '../sounds/ichHeise.mp3';
import gutenTag from '../sounds/gutenTag.mp3';
import ichHeiseAli from '../sounds/ichHeiseAli.mp3';
import wieGehtsIhnen from '../sounds/wieGehtsIhnen.mp3';
import wieHeisenSie from '../sounds/wieHeisenSie.mp3';

const PartFiveAudio = () => {
  const [count, setCount] = useState(0);
  const [isPaused, setIsPaused] = useState(true);
  const [audio, setAudio] = useState(null);

  const audioList = [
    { path: hallo, word: 'hallo' },
    { path: gutenMorgen, word: 'guten Morgen' },
    { path: gutenTag, word: 'guten Tag' },
    { path: gutenAbend, word: 'guten Abend' },
    { path: aufWiederSehen, word: 'auf wieder sehen' },
    { path: wieGehtsIhnen, word: 'wie geht es Ihnen' },
    { path: ichHeise, word: 'ich heiß' },
    { path: ichHeiseAli, word: 'ich heiße Ali' },
    { path: wieHeisenSie, word: 'wie heißen Sie?' },
  ];

  const handleNext = () => {
    if (count < audioList.length - 1) {
      setCount((count) => count + 1);
      setIsPaused(true);
    }
  };

  const playAudio = () => {
    if (!audio) {
      const newAudio = new Audio(audioList[count].path);
      newAudio.addEventListener('ended', () => {
        setIsPaused(true);
      });
      setAudio(newAudio);
    }

    if (audio.paused) {
      audio.play();
      setIsPaused(false);
    } else {
      audio.pause();
      setIsPaused(true);
    }
  };

  useEffect(() => {
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
    setAudio(new Audio(audioList[count].path));
  }, [count]);

  useEffect(() => {
    return () => {
      if (audio) {
        audio.removeEventListener('ended', () => {
          setIsPaused(true);
        });
      }
    };
  }, [audio]);

  return (
    <div className='part-fieve-container'>
      <div className='wor-play-container'>
        <p className='audio-word'>{audioList[count].word}</p>
        <button
          className={`audio-play-button ${audio && audio.paused ? 'play' : 'paused'}`}
          onClick={playAudio}
        >
          {audio && audio.paused ? 'Play' : 'Pause'}
        </button>
        <button className='audio-next-button' onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default PartFiveAudio;
