import React, { useState } from "react";

import "./option.css"

const Options = (props) => {
  //injecting ther handler here is to show 
  //the component onClicj with the maus
  const options = [
    {
      text: "Javascript",
      handler: props.actionProvider.handleJavascriptQuiz,
      id: 1,
    },
    { text: "Python", handler: () => {}, id: 2 },
    { text: "Golg", handler: () => {}, id: 3 },
    {text: "A1",
     handler: props.actionProvider.handleA1,
     id: 5},
  ];

  const [visible, setVisible] = useState(true);

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  )); 

  return <div className="options-container">
    <button className="option-button" onClick={() => setVisible(!visible)}>
      {visible ? buttonsMarkup : 'back'}
    </button>
  
    
    </div>;
};

export default Options;

