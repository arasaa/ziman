import React, { useState, useEffect } from 'react';

const PartSeven = ({ text, audioSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  
  useEffect(() => {
    const audioElement = document.getElementById('audio');

    const handleTimeUpdate = () => {
      setCurrentTime(audioElement.currentTime);
    };

    audioElement.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      audioElement.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);
  
  useEffect(() => {
    // Find the index of the word to highlight based on the current time
    const newIndex = findHighlightedIndex();
    setHighlightedIndex(newIndex);
  }, [currentTime]);

  const findHighlightedIndex = () => {
    // Split the text into words
    const words = text.split(' ');

    let totalTime = 0;
    let index = 0;

    // Iterate over the words and calculate their durations
    for (let i = 0; i < words.length; i++) {
      const word = words[i];

      // Estimate the word duration based on the number of characters
      const wordDuration = Math.max(word.length * 0.15, 0.5);

      // Check if the current time falls within the word duration
      if (currentTime >= totalTime && currentTime < totalTime + wordDuration) {
        return index;
      }

      totalTime += wordDuration;
      index++;
    }

    // If the current time is beyond the last word, highlight the last word
    return index - 1;
  };

  const handlePlayPause = () => {
    const audioElement = document.getElementById('audio');

    if (isPlaying) {
      audioElement.pause();
    } else {
      audioElement.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <p>
        {text.split(' ').map((word, index) => (
          <span key={index} className={highlightedIndex === index ? 'highlighted' : ''}>
            {word}{' '}
          </span>
        ))}
      </p>
      <audio id="audio" src={audioSrc}></audio>
      <button onClick={handlePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
    </div>
  );
};

export default PartSeven;
