import React, { useState } from "react";
import PartTow from "./PartTow";
import { words } from "../data/words";
import "./tee.css";

function PartOne() {
  const [count, setCount] = useState(0);
  const [isShown, setIsShown] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const handelNext = () => {
    setCurrentIndex(currentIndex + 1);
  };

  const handleNextClick = () => {
    setCount((count) => count + 1);
  };

  const handleButtonClick = () => {
    // hide current words element
    const currentWords = document.getElementsByClassName(`word-${count}`);
    for (let i = 0; i < currentWords.length; i++) {
      currentWords[i].style.display = "none";
    }
    setIsShown(true);
  };

  const renderGreeting = (word, index) => (
    <div
      className={`p1Container ${word.className}`}
      key={word.word}
      style={{ color: word.color }}
    >
      <p className="words-elements">
        <span className="span-words-elements">{word.word}</span>
      </p>
      <p>{word.bedeutung[word.currectBedeutungIndex]}</p>
    </div>
  );

  const wordsWithClassName = words.map((word, index) => {
    return { ...word, className: `word-${index}` };
  });

  return (
    <div className="partOneTestContainer">
      {wordsWithClassName.slice(0, count + 1).map((word, index) => (
        <div
          key={word.word}
          className={`word-animation ${index === count ? "appear" : index < count ? "disappear-none" : "disappear"
          }`}
        >
          {renderGreeting(word, index)}
        </div>
      ))}

      {count > 0 && (
        <button
          className="partOneButtons prev-partOneButtons"
          onClick={() => setCount((count) => count - 1)}
        >
          prev
        </button>
      )}

      {count < words.length - 1 && (
        <button className="partOneButtons next-partOneButtons" onClick={handleNextClick}>
          next
        </button>
      )}

      {count === words.length - 1 && (
        <button className="partOneButtons next-partOneButtons" onClick={handleButtonClick}>
          nextt
        </button>
      )}
      {isShown && <PartTow className="partTowa1" />}
    </div>
  );
}

export default PartOne;
export { words };













{/**import React, { useState } from "react";
import PartTow from "./PartTow";
import { words } from "../data/words";
//import "./partTest.css";

function PartOne() {
  const [count, setCount] = useState(0);
  const [isShown, setIsShown] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const handelNext = () =>{
    setCurrentIndex(currentIndex + 1);
  }

  const handleNextClick = () => {
    setCount((count) => count + 1);
  };

  const handleButtonClick = () => {
    if (count < words.length - 1) {
      setCount((count) => count + 1);
    } else {
      setIsShown(!isShown);
    }
  };

  const renderGreeting = (word, index) => (
    <div
      className={`p1Container ${word.className}`}
      key={word.word}
      style={{ color: word.color }}
    >
      <p className="words-elements">
        <span className="span-words-elements">{word.word}</span>
      </p>
      <p>{word.bedeutung[word.currectBedeutungIndex]}</p>
    </div>
  );

  const wordsWithClassName = words.map((word, index) => {
    return { ...word, className: `word-${index}` };
  });

  return (
    <div className="partOneTestContainer">
      {wordsWithClassName.slice(0, count + 1).map((word, index) => (
        <div
          key={word.word}
          className={`word-animation ${word.className} ${
            index === count ? "appear" : index < count ? "" : "disappear"
          }`}
        >
          {renderGreeting(word, index)}
        </div>
      ))}

      {count > 0 && (
        <button
          className="partOneButtons prev-partOneButtons"
          onClick={() => setCount((count) => count - 1)}
        >
          prev
        </button>
      )}

      {count < words.length - 1 && (
        <button className="partOneButtons next-partOneButtons" onClick={handleNextClick}>
          next
        </button>
      )}

      {count === words.length - 1 && (
        <button className="partOneButtons next-partOneButtons" onClick={handleButtonClick}>
          nextt
        </button>
        
      ) }
      {isShown && ( <PartTow /> )}
    </div>
  );
}

export default PartOne;
export { words };*/}