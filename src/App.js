/* import logo from './logo.svg'; */
import React from 'react';
import Chatbot from 'react-chatbot-kit';
import './App.css';
import config from './chatBot/config';
import ActionProvider from './chatBot/ActionProvider';
import MessageParser from './chatBot/MessageParser';
import PartFiveAudio from './deutsch/parts/PartFiveAudio';


function App() {
  return (
    <div className="App">
     
      <div style={{maxWidth: "300px"}}>
        <Chatbot config={config} 
        messageParser={MessageParser}
        actionProvider={ActionProvider}
        />
      </div>
    <div><PartFiveAudio /></div>
    </div>
  );
}

export default App;
