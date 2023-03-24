import React, { useState } from 'react'
import Data from '../data/Data'

const EmblaCarousel = () => {
  const list = Data.map(gree => <>
    <p key={gree.id}>{gree.greeding}</p>
    <p>{gree.start}</p>
    </>
    )
  
    const listOne = Data.map(gree => <>
      <p key={gree.id}>{gree.givingWord}</p>
      <p>{gree.wordExplanation}</p>
      </>
      ) 

  const [count, setCount] = useState(0);
    
  const components = [
      <div>{list}</div>,
      <div>{listOne}</div>,
      <div>3</div>,
      <div>4</div>
  ]
  
  return <div>
      {
          // render component from our components array
          components[count]
      }
  
      {/* show previous button if we are not on first element */}
      {count > 0 && <button onClick={() => setCount(count - 1)}>prev</button>}
  
      {/* hide next button if we are at the last element */}
      {count < components.length - 1 && <button onClick={() => setCount(count + 1)}>next</button>}
  </div>
  }

export default EmblaCarousel





