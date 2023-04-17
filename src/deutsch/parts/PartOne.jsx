import React, { useState } from "react";
import PartTow from "./PartTow";
import { words } from "../data/words";
import "./tee.css";

function PartOne() {
  const [count, setCount] = useState(0);
  const [isPartOneShown, setIsPartOneShown] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handelNext = () => {
    setCurrentIndex(currentIndex + 1);
  };

  const handleNextClick = () => {
    setCount((count) => count + 1);
  };

  const handleButtonClick = () => {
    setIsPartOneShown(false);
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
      <p className="bedeutung">{word.bedeutung[word.currectBedeutungIndex]}</p>
    </div>
  );

  const wordsWithClassName = words.map((word, index) => {
    return { ...word, className: `word-${index}` };
  });

  return (
    <>
      {isPartOneShown && (
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

       

          {count < words.length - 1 && (
            <button className="partOneButtons next-partOneButtons " onClick={handleNextClick}>
             <span className="partOneButtons-next"> next </span>
            </button>
          )}
             {count > 0 && (
            <button
              className="partOneButtons prev-partOneButtons"
              onClick={() => setCount((count) => count - 1)}
            >
             <span className="partOneButtons-prev">prev</span> 
            </button>
          )}

          {count === words.length - 1 && (
            <button className="partOneButtons next-partOneButtons" onClick={handleButtonClick}>
              nächste
            </button>
          )}
        </div>
      )}

      {!isPartOneShown && <PartTow className="partTowa1" />}
    </>
  );
}

export default PartOne;
export { words };
