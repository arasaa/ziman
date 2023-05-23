/* import logo from './logo.svg'; */
import React from 'react';
import Chatbot from 'react-chatbot-kit';
import './App.css';
import config from './chatBot/config';
import ActionProvider from './chatBot/ActionProvider';
import MessageParser from './chatBot/MessageParser';
import PartFiveAudio from './deutsch/parts/PartFiveAudio';
import PartSex from './deutsch/parts/PartSex';
import PartSeven from './deutsch/parts/partSeven';
//import text from '../src/deutsch/sounds/text.mp3'
import Lessons from './deutsch/Lessons';
import PartEightChatbot from '../src/deutsch/parts/PartEightChatbot';


function App() {
  return (
    <div className="App">
     
      <div style={{maxWidth: "300px"}}>
        <Chatbot config={config} 
        messageParser={MessageParser}
        actionProvider={ActionProvider}
        />
      </div>
  {/**  <PartFiveAudio />
    <PartSex /> 
    <PartSeven />
    <Lessons />
    */}
    <PartEightChatbot />

    </div>
  );
}

export default App;
