/* import logo from './logo.svg'; */
import React from 'react';
import Chatbot from 'react-chatbot-kit';
import './App.css';
import config from './chatBot/config';
import ActionProvider from './chatBot/ActionProvider';
import MessageParser from './chatBot/MessageParser';
//import ParFour from './deutsch/parts/PartFour';
import Testp from './deutsch/parts/Testp'


function App() {
  return (
    <div className="App">
     
      <div style={{maxWidth: "300px"}}>
        <Chatbot config={config} 
        messageParser={MessageParser}
        actionProvider={ActionProvider}
        />
      </div>
    {/**  <div  className="parthree"><Testp /></div> */ }    
    </div>
  );
}

export default App;
