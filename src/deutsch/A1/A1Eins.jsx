import React, { useState } from 'react'
import Data from '../data/Data'

function A1Eins() {

  const [count, setCount] = useState(0);

  const list1 = Data.map(gree => <>
    <p key={gree.id}>{gree.hallo}</p>
    <p>{gree.hallo1}</p>
    </>
    )
    const list2 = Data.map(gree => <>
      <p key={gree.id}>{gree.ichBin}</p>
      <p>{gree.ichbi}</p>
      </>
      )
      const list3 = Data.map(gree => <>
        <p key={gree.id}>{gree.ichBin1}</p>
        <p>{gree.ichbi1}</p>
        </>
        )

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

    const listTow = Data.map(gree => <>
      <p key={gree.id}>{gree.bot}</p>
      <p>{gree.user}</p>
      </>
      ) 
    
  const components = [
        <div>{list1}</div>,
        <div>{list2}</div>,
        <div>{list3}</div>,
      <div>{list}</div>,
      <div>{listOne}</div>,
      <div>{listTow}</div>,
      
  ]


  return (
    <div>
    {
        // render component from our components array
        components[count]
    }

    {/* show previous button if we are not on first element */}
    {count > 0 && <button onClick={() => setCount(count - 1)}>prev</button>}

    {/* hide next button if we are at the last element */}
    {count < components.length - 1 && <button onClick={() => setCount(count + 1)}>next</button>}
</div>
  )
}

export default A1Eins