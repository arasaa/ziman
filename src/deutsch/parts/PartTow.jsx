import React from 'react'
import './partTow.css';
import DataE from '../data/DataE'



const PartTow = () => {


    const habo = DataE.map(gree => <div className='pic'>
      <img className='pic' src={gree.img} alt='pico'/>
      <p></p>
    
      </div>
      )
  
  return (
    <div className='list'>
    <p>{habo}</p>
      </div>
    
  )
}

export default PartTow