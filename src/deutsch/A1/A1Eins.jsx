import React, { useState } from 'react'
import Data from '../data/Data';
import PartTow from '../../components/PartTow';
import './a1.css'

function A1Eins() {

  const [count, setCount] = useState(0);

  const hallo = Data.map(gree => <>
    <p key={gree.id}>{gree.hallo}</p>
    <p>{gree.marhaba}</p>
    </>
    )
    const gutenTag = Data.map(gree => <>
      <p key={gree.id}>{gree.gutenTag}</p>
      <p>{gree.naharukSaid}</p>
      </>
      )
      const gutenAbend = Data.map(gree => <>
        <p key={gree.id}>{gree.gutenAbend}</p>
        <p>{gree.massAlkhir}</p>
        </>
        )

  const AufwiederSehen = Data.map(gree => <>
    <p key={gree.id}>{gree.AufwiederSehen}</p>
    <p>{gree.ilaAlliqa}</p>
    </>
    )

  const wieGehtIhnen = Data.map(gree => <>
    <p key={gree.id}>{gree.wieGehtIhnen}</p>
    <p>{gree.kaifHalluk}</p>
    </>
    ) 

    const ichHeisse = Data.map(gree => <>
      <p key={gree.id}>{gree.ichHeisse}</p>
      <p>{gree.anaIsmi}</p>
      </>
      ) 
      const ichHeisseAli = Data.map(gree => <>
        <p key={gree.id}>{gree.ichHeisseAli}</p>
        <p>{gree.anaIsmiAli}</p>
        </>
        ) 
        const wieHeissenSie = Data.map(gree => <>
          <p key={gree.id}>{gree.wieHeissenSie}</p>
          <p>{gree.maIsmuk}</p>
          </>
          ) 

      
  const components = [
        <div>{hallo}</div>,
        <div>{gutenTag}</div>,
        <div>{gutenAbend}</div>,
      <div>{AufwiederSehen}</div>,
      <div>{wieGehtIhnen}</div>,
      <div>{ichHeisse}</div>,
      <div>{ichHeisseAli}</div>,
      <div>{wieHeissenSie}</div>,
      
  ]


  const [isShown, setIsShown] = useState(false);
  const handleClick = event => {
    setIsShown(current => !current);
  };

  //hiding the button of the part one and displaying the PartTow component
  const btn = document.getElementById('btn');
  function hideButton(){
    btn.style.display = 'none';
    const box = document.getElementById('box');
    box.style.display = 'block';
  }

  const part =() =>{
  
  }

  return (
    <>
   
    {
        // render component from our components array
        components[count]
        
    }
    {/**{count < 0 && <button onClick={() => setCount(count - 1)}>prev</button>} */}
    {/* show previous button if we are not on first element */}
    {count > components.length - 2 && <button id='btn'  onClick={() => {handleClick(); hideButton()}}>next</button>}
    {/**{isShown && <PartTow />}*/}

    {/* hide next button if we are at the last element */}
    {count < components.length - 1 && <button onClick={() => setCount(count + 1 )}>next</button>}
    <div className='partTowa1' id='box' style={{backgroundColor:'green', display: 'none', position:'sticky'}}><PartTow /></div>

    

</>
  )
}

export default A1Eins