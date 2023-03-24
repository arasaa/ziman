import React, { useState } from 'react';
import A1Leeson1 from './A1Leeson1';
import A1Eins from './A1/A1Eins';

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
    setHeide(false)
  }
  
 }
 const [showResults, setShowResults] = React.useState(false)
  const onClick = () => setShowResults(true)

  return (
    <div>
      
        <button onClick={showA1} onChange={onClick} className='add-button'>A1</button>
        
        {
          show && (<A1Eins />)
        }
        
    
    </div>
  )
}

export default Lessons
