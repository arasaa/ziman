import React, { useState } from 'react'



const LektionEins = () => {
  const greet = [
    {
        greeding: "Hallo User",
        start: "lass uns starten, click Next um zu starten",
        id: 1,
    },
 
    {
        givingWord: "Kennenlernen",
        wordExplanation: "التعارف",
        id: 2,
    },
    {
        bot: "Ich bin ZimanBot, und du?",
        user: "",
        id: 3,
    }
];

  const [next, setNext] = useState(false);
  const handleNext =() =>{
    setNext()
  }

  const list = greet.map(gree => <>
  {gree.greeding},
  <button onClick={handleNext}>next</button>,
  {gree.start},<hr></hr>
  {gree.givingWord}
  </>
  
  )

  return (
    <div>
      <p>Guten Morgen</p>
      <p>صباح الخير</p>
      
      {list}
      <p>Guten </p>
      <p> الخير</p>
     
    </div>
  )
}

export default LektionEins