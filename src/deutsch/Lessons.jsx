import React, { useState } from 'react';
import A1Leeson1 from './A1Leeson1';

const Lessons = () => {

  const [show, setShow] =useState(false);
 const showA1 =()=>{
  if(show === true){
    setShow(false)
  }else{
    setShow(true)
  }
  
 }

 const [hide, setHeide] =useState(false);
 const heideA1 =()=>{
  if(hide === true){
    setHeide(false)
  }else{
    setHeide(true)
  }
  
 }

  return (
    <div>
      
        <button onClick={showA1} onChange={heideA1} className='add-button'>A1</button>
        {
          show && (<A1Leeson1 />)
        }
        <button>2</button>
        <button>3</button>
        <div>
        </div>
    </div>
  )
}

export default Lessons
