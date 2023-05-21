import React, { useState } from 'react'
import './partTow.css';
import imagesData from '../data/imagesData'
import PartThree from './PartThree';
import words from '../data/words';


const PartTow = ({handleFinish}) => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showPartThree, setShowPartThree] = useState(false);
  
  const hadleFinishImages = () => {
    setShowPartThree(true);
  }

  const handelNextClick = () => {
    setCurrentIndex(currentIndex + 1);
  }
  const currentImage = imagesData[currentIndex];
  if (showPartThree) {
    return <PartThree words={words} onFinish={handleFinish}/>;
  }




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

      
        {currentIndex < imagesData.length - 1 && (
        <button className='part-tow-buttons' onClick={handelNextClick}>
        <span className=' part-tow-next-button'>nächste</span>
          </button>
        )}

        {currentIndex === imagesData.length - 1 && (
        <button className='part-tow-buttons' onClick={() => setCurrentIndex(0)}>
         <span className=' part-tow-prev-button'>Wiederholen</span> 
          </button>
        )}

          {currentIndex === imagesData.length -1 && !showPartThree &&(
            <button className='quiz-button'  onClick={hadleFinishImages}>quiz</button>
          )}
        
   

      


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