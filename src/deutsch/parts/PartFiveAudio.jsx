import React, { useEffect, useState } from 'react';
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

  const audioList = [
    { path: hallo, word: 'hallo', play: () => new Audio(hallo).play() },
    { path: gutenMorgen, word: 'guten Morgen', play: () => new Audio(gutenMorgen).play() },
    { path: gutenTag, word: 'guten Tag', play: () => new Audio(gutenTag).play() },
    { path: gutenAbend, word: 'guten Abend', play: () => new Audio(gutenAbend).play() },
    { path: aufWiederSehen, word: 'auf wieder sehen', play: () => new Audio(aufWiederSehen).play() },
    { path: wieGehtsIhnen, word: 'wie geht es Ihnen', play: () => new Audio(wieGehtsIhnen).play() },
    { path: ichHeise, word: 'ich heiß', play: () => new Audio(ichHeise).play() },
    { path: ichHeiseAli, word: 'ich heiße Ali', play: () => new Audio(ichHeiseAli).play() },
    { path: wieHeisenSie, word: 'wie heißen Sie?', play: () => new Audio(wieHeisenSie).play() },
  ];

  const handleNext = () => {
    setCount((count) => count + 1);
  };

{/*  useEffect(() => {
    playAudio(); // Play the first audio element automatically when the component mounts
  }, []);*/}
  const playAudio = () => {
    audioList[count].play();
    setCount((count) => count + 1); // Increment count after playing audio
  };

  return (
    <div>
      <h2>Audio</h2>
      
      <button onClick={playAudio}>Play</button>
      <p>Word: {audioList[count].word}</p>
    </div>
  );
};

export default PartFiveAudio;
