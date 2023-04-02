import React from 'react'
import './partTow.css'
import DataE from '../data/DataE'



const PartTow = () => {

  const hallo = DataE.map(gree => <>
    <p key={gree.id}>{gree.halloo}</p>
    <p>{gree.bedeutun}</p>
    </>
    )
  
  return (
    <div className='list'>{hallo} iiiiiiii</div>
  )
}

export default PartTow