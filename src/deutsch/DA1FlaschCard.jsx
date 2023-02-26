import React, {useState, useEffect} from 'react'

import "./dA1.css"


const DA1FlaschCard = ({question, answer, incrementIndex}) => {
const [showAnswer, setShowAnswer] = useState(false);

useEffect(() => setShowAnswer(false),[question]);
  return (
    <>
    <div className='da-flashcard'
    onClick={() => setShowAnswer(!showAnswer)}>
        {!showAnswer && question}
        {showAnswer && answer}
    </div>
    {showAnswer &&(
        <button onClick={incrementIndex} className='flashcard-button'>
            Next question
        </button>
    )}
    </>
  )
}

export default DA1FlaschCard