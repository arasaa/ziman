/* import logo from './logo.svg'; */
import React from 'react';
import Chatbot from 'react-chatbot-kit';
import './App.css';
import config from './chatBot/config';
import ActionProvider from './chatBot/ActionProvider';
import MessageParser from './chatBot/MessageParser';
//import ParFour from './deutsch/parts/PartFour';
import Testp from './deutsch/parts/Testp'
import PartOneTest from './deutsch/parts/PartOneTest'
import ThreeTest from './deutsch/parts/ThreeTest';


function App() {
  return (
    <div className="App">
     
      <div style={{maxWidth: "300px"}}>
        <Chatbot config={config} 
        messageParser={MessageParser}
        actionProvider={ActionProvider}
        />
      </div>
      <ThreeTest />
    {/*<div><Testp /></div>*/}
    </div>
  );
}

export default App;
