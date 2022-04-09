import React from "react";
import "../Doctors video chat/videochat.css";

import Home from "../Doctors video chat/Home/Home.js";
import {ServicesContainer,ServicesH1,ServicesWrapper} from "./VideoChatElements";
import App from "../react-chat-appp/App"
import App2 from "./App2"

const Videochat = () => {
  return (
    <ServicesContainer id="doctors">
  <ServicesH1>Video Chat</ServicesH1>
  
    <ServicesWrapper>
          
      <Home/>
      
     <App2/>
     <App/>
   
     </ServicesWrapper>

     </ServicesContainer> 
    
   );
};

export default Videochat;
