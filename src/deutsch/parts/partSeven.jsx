import React, { useState, useEffect } from 'react';
//import vorstellung from '../sounds/vorstellung.mp3'



const PartSeven = () => {
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
    const words = text.split(' ');

    const totalDuration = 30; // Total duration in seconds
    const wordDuration = totalDuration / words.length;

    let totalTime = 0;
    let index = 0;

    // Iterate over the words and assign the same duration to each word
    for (let i = 0; i < words.length; i++) {
      const word = words[i];

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

  const text = "Hallo.-Hallo. Wie geht es Ihnen?-Mir geht es gut. Dankeschön und Ihnen? Mir geht es auch gut, danke. -Ich habe eine Frage. Bitte!-Wie heißen Sie?Ich heiße Ali und wie heißen Sie?-Ich heiße Lisa. Woher kommen Sie Ali?Ich komme aus Syrien und Sie?-Ich komme aus Deutschland";
  //const audioSrc = {vorstellung};

  return (
    <div>
      <p>
        {text.split(' ').map((word, index) => (
          <span
            key={index}
            className={index <= highlightedIndex ? 'highlighted' : ''}
            style={{
              backgroundColor: index <= highlightedIndex ? 'yellow' : 'transparent',
            }}
          >
            {word}{' '}
          </span>
        ))}
      </p>
      <audio
        id="audio"
        //src={vorstellung}
        onEnded={() => {
          setIsPlaying(false);
          setHighlightedIndex(text.split(' ').length - 1);
        }}
      ></audio>
      <button onClick={handlePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
    </div>
  );
};

export default PartSeven;


