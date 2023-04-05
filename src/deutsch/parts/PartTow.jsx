import React, { useState } from 'react'
import './partTow.css';
import imagesData from '../data/imagesData'
import PartThree from './PartThree';
import words from '../data/words';



const PartTow = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showPartThree, setShowPartThree] = useState(false);
  const hadleFinishImages = () => {
    setShowPartThree(true);
  }
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
        <img className='image-container'
         src={currentImage.src} 
         alt={`imgData ${currentImage.id}`}
          />

        <p className='word-container'>{currentImage.word}</p>

        <p>{currentImage.bedeutung}</p>
      </div>

      <div className='partTow-button-container'>
        {currentIndex < imagesData.length - 1 && (
        <button onClick={handelNextClick}>next</button>
        )}

        {currentIndex === imagesData.length - 1 && (
        <button onClick={() => setCurrentIndex(0)}>Wiederholen</button>
        )}

          {currentIndex === imagesData.length -1 && !showPartThree &&(
            <button onClick={hadleFinishImages}>quiz</button>
          )}
        

      </div>
      <div className='partThree-container'>
        {showPartThree && <PartThree words={words} />}

      </div>


    </div>



  )
}

export default PartTow


{ /**   <div className='part-tow-container'>
     <div className='elements-container' >
      <img className='image-container' src={currentImage.src} alt={`imgData ${currentImage.id}`} />
      <p className='word-container'>{currentImage.word}</p>
    <p>{currentImage.bedeutung}</p>
     </div>
     <div className='partTow-button-container'>
      {currentIndex < imagesData.length - 1 && (
        <button onClick={handelNextClick}>next</button>
      )}
     {currentIndex === imagesData.length -1 && (
      <p>could add button here</p>,
      <button onClick={handlePartThree}>quiz</button>
     )}
    
      </div>
    
      </div>  */}