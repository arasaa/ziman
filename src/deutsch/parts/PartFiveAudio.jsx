import React from 'react'
import hallo from '../sounds/hallo.mp3'

const PartFiveAudio = () => {

  function play(){
    new Audio(hallo).play()
  }
  return (
    <div>
    <h2>Audio</h2>
    <audio src="hallo.mp3" controls />
    <button onClick={play}>play</button>
  </div>
  )
}

export default PartFiveAudio