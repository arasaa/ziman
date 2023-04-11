import React, { useState } from 'react'
import Data from '../data/Data';
import PartTow from './PartTow';
import './partOne.css'

function ParOne() {

  const [count, setCount] = useState(0);

  const gutenMorgen = Data.map(gree => <>
    <p key={gree.id}>{gree.gutenMorgen}</p>
    <p>{gree.sabahAlkhir}</p>
  </>
  )
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
    
    <div className='p1Container p1Hallo'>{hallo}</div>,
    <div className='p1Container'>{gutenTag}</div>,
    <div className='p1Container'>{gutenMorgen}</div>,
    <div className='p1Container'>{gutenAbend}</div>,
    <div className='p1Container'>{AufwiederSehen}</div>,
    <div className='p1Container'>{wieGehtIhnen}</div>,
    <div className='p1Container'>{ichHeisse}</div>,
    <div className='p1Container'>{ichHeisseAli}</div>,
    <div className='p1Container'>{wieHeissenSie}</div>,

  ]


  const [isShown, setIsShown] = useState(false);
  const handleClick = event => {
    setIsShown(current => !current);
  };
  const hadleButtonClick = () => {
    setIsShown(true)
  }

  //hiding the button of the part one and displaying the PartTow component
  const btn = document.getElementById('btn');
  function hideButton() {
    const box = document.getElementById('box');
    box.style.display = 'block';
  }

  return (
    <>

      {
        // render component from our components array
        components[count]

      }
      {/**{count < 0 && <button onClick={() => setCount(count - 1)}>prev</button>} */}
      {/* show previous button if we are not on first element */}
      {count > components.length - 2 && <button id='btn' onClick={() => { handleClick(); hideButton() }}>next</button>}
      {/**{isShown && <PartTow />}*/}

      {/* hide next button if we are at the last element */}
      {count < components.length - 1 && <button onClick={() => setCount(count + 1)}>next</button>}

      {/** <div className='partTowa1' id='box' style={{ display: 'none'}}><PartTow /></div> */}

      <div className='partTowa1' id='box' onClick={hadleButtonClick}>
        {isShown && <PartTow />}
      </div>
    </>
  )
}

export default ParOne