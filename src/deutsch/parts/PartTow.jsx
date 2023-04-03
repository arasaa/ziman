import React, { useState } from 'react'
import './partTow.css';
import imagesData from '../data/imagesData'



const PartTow = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const handelNextClick = () => {
    setCurrentIndex(currentIndex + 1);
  }
  const currentImage = imagesData[currentIndex];

{/**   const imageElements = imagesData.map((imageData) =>(
  <div key={imageData.id} className={currentIndex === imageData.id - 1 ? 'active' : ''}>
    <img src={imageData.src} alt={`image ${imageData.id}`} />
    <p>{imageData.word}</p>
    <p>{imageData.bedeutung}</p>
  </div>
  ));*/}
 
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
     <div className='elements-container' >
      <img className='image-container' src={currentImage.src} alt={`image ${currentImage.id}`} />
      <p className='word-container'>{currentImage.word}</p>
    <p>{currentImage.bedeutung}</p>
     </div>
     <div className='partTow-button-container'>
      {currentIndex < imagesData.length - 1 && (
        <button onClick={handelNextClick}>next</button>
      )}
     {currentIndex === imagesData.length -1 && (
      <p>could add button here</p>
     )}
      </div>
    
      </div>
    
  )
}

export default PartTow