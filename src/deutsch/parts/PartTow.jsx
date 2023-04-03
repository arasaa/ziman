import React from 'react'
import './partTow.css';
import DataE from '../data/DataE'



const PartTow = () => {

  
 

    const picList = DataE.map(item =>
      item.img ? (
      <div className={`picsc-${item.id}`}>
      <img className='pic' key={item.id} src={item.img} alt='pico'/>
     </div>
     ) : null
    );

  return (
    <div className='list'>
    {picList}
    
      </div>
    
  )
}

export default PartTow