import React, { useState } from 'react'
import "./lektion.css"
import LektionEins from './lektionen/LektionEins';

const A1Leeson1 = () => {
  const [show, setShow] =useState(false);
  const showA1 =()=>{
   if(show == true){
     setShow(false)
   }else{
     setShow(true)
   }
   
  }
  return (
    <div className='#'>
      
      <button onClick={showA1} className='add-button'>Lektion Eins</button>
        {
          show && (<LektionEins />)
        }
      <button>lektion zwei</button>
      <button>lektion drei</button>
      <button>lektion vier</button>
      <button>lektion funf</button>
      
    </div>
  )
}

export default A1Leeson1