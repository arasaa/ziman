import React,{useState} from 'react'
import DA1FlaschCard from './DA1FlaschCard';
import Lessons from './Lessons';

const DA1quiz = (props) => {
    console.log(props);
    let [questionIndex, setQuestionIndex] = useState(0);

    const incrementIndex = () => setQuestionIndex((prev)=> (prev += 1));

    const currentQuestion = props.questions[questionIndex];

    if(!currentQuestion) {
        return <div><Lessons/></div>
    }
  return (
    <DA1FlaschCard
    question={currentQuestion.question}
    answer={currentQuestion.answer}
  
    incrementIndex={incrementIndex} 
   

    />

  )
}

export default DA1quiz
