import React, { useState } from 'react'
import './partTow.css';
import imagesData from '../data/imagesData'



const PartTow = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const handelNextClick = () => {
    setCurrentIndex(currentIndex + 1);
  }
  const currentImage = imagesData[currentIndex];
  const currentWord = imagesData[currentIndex];
  const currentBedeutung = imagesData[currentIndex];
 
{/**
    const picList = DataE.map(item =>
      item.img ? (
      <div className={`picsc-${item.id}`}>
      <img className='pic' key={item.id} src={item.img} alt='pico'/>
     </div>
     ) : null
    );
 */}
  return (
    <div className='part-tow-container'>
      <img 
      className='part-tow-image'
      src={currentImage.src}
     
      alt={`image ${currentImage.id}`}
      />
      <button onClick={handelNextClick}>next</button>
    
      </div>
    
  )
}

export default PartTow