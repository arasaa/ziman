/* import logo from './logo.svg'; */
import React from 'react';
//import Chatbot from 'react-chatbot-kit';
import './App.css';
//import config from './chatBot/config';
//import ActionProvider from './chatBot/ActionProvider';
//import MessageParser from './chatBot/MessageParser';
import PartFiveAudio from './deutsch/parts/PartFiveAudio';
import PartSex from './deutsch/parts/PartSex';
import PartSeven from './deutsch/parts/partSeven';
//import text from '../src/deutsch/sounds/text.mp3'
import Lessons from './deutsch/Lessons';
import PartEightChatbot from '../src/deutsch/parts/PartEightChatbot';
import PartFour from './deutsch/parts/PartFour';


{/**

     <div style={{maxWidth: "300px"}}>
        <Chatbot config={config} 
        messageParser={MessageParser}
        actionProvider={ActionProvider}
        />
        </div>


*/}

function App() {
  return (
    <div className="#">
      <PartFiveAudio />
     <Lessons />

      
  {/**  <PartFiveAudio />
   * 
    <PartSex /> 
    <PartSeven />
   
     <PartSeven />
    <PartFiveAudio />
    <PartEightChatbot />*/}
   

    </div>
  );
}

export default App;
