import React, { useState, useEffect } from "react";
import pic from "../../assets/images/profile-pic.jpg";
import UserMsg from '../utilities/userMsg'
import axios from "axios";

export const Chatbot = ( { setIsChatbotVisible } ) => {

  const [email, setEmail] = useState("");
  const [gotEmail, setGotEmail] = useState(false);
  const returnTime = "6:00 PM";

  function getTime(){
    const time = new Date().toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    })
    return time
  }


  const prevMessages = () => {
    if(localStorage.getItem('messages') === null) {
      return (
        [{ sender: 'agent-message', currentTime: getTime(), text: "Got any questions? I'm happy to help." }]  // in case user is new or never chat then this message will be the sent as first message
      )
    } else {
      const data = JSON.parse(localStorage.getItem('messages'))
      return data
    }
    
  }
  
  const [messages, setMessages] = useState( prevMessages() );

  useEffect(() => {
    const chatbody = document.querySelector(".chat-body");
    chatbody.scrollTop = chatbody.scrollHeight; // to be scrolled to the bottom of all messages onload

    localStorage.setItem('messages', JSON.stringify(messages));
    axios.post('https://my-portfolio-backend-vyn8.onrender.com/chatbot', {
      email: email,
      messages: messages
    })
    .then(res => console.log('Received your message'))
    .catch(err => console.log(err));
    
  }, [messages])

  

  useEffect(() => {
    
    const emailbtn = document.querySelector(".msg-btn")
    const submitbtn = document.querySelector(".chat-footer-btn")
    emailbtn.disabled = true 
    submitbtn.disabled = true
    if(localStorage.getItem('Email') !== null){
      setGotEmail(true)
    }
      if(messages.length > 1 && localStorage.getItem('Email') === null){
        const bot = document.querySelector('.bot')
        bot.classList.remove('disable')
        document.getElementById("messageField").disabled = true 
      document.getElementById("messageField").placeholder = "Please first provide your Email!"
      document.getElementById("messageField").style.setProperty('cursor', 'not-allowed')
      document.querySelector(".chat-footer-btn").style.setProperty('cursor', 'not-allowed')
      }

  }, []);

  
  const toggle = () => {
      const msgSvg = document.querySelector(".toggle-btn-msg-svg")
      const chatbot = document.querySelector(".chatbot")
      const xSvg = document.querySelector(".toggle-btn-x-svg")
      const chatbody = document.querySelector(".chat-body");
      const openChatBtn = document.querySelector('.openChat-btn')

      setTimeout(() => {
        chatbody.scrollTop = chatbody.scrollHeight;
      }, 100);
      
      if(xSvg.classList.contains("disable")){
        xSvg.style.setProperty(`animation`, `icon-rotation .3s`)
        
        chatbot.style.setProperty(`animation`, `chatbot-animation-in 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both`)
        
        xSvg.classList.remove('disable')
        chatbot.classList.remove('disable')
        msgSvg.classList.add('disable')
        if(openChatBtn){
          setTimeout(() => {
            openChatBtn.innerHTML = 'Close Chat'
          }, 300);
        }

        setIsChatbotVisible(true)
        
      } else {
        msgSvg.style.setProperty(`animation`, `icon-transformation .3s`)
        
        chatbot.style.setProperty(`animation`, `chatbot-animation-out 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`)
        
        xSvg.classList.add('disable')
        msgSvg.classList.remove('disable')
        setIsChatbotVisible(false)
    
        setTimeout(() => {
          if(openChatBtn){
            openChatBtn.innerHTML = 'Open Chat'
          }
          chatbot.classList.add('disable')
        }, 300);
    
      }
    }
  

  const handleUserMessageField = (event) => {
  const submitbtn = document.querySelector(".chat-footer-btn")
    if(event.currentTarget.value.length > 0){
        submitbtn.disabled = false
        submitbtn.style.setProperty("cursor", "pointer")
      } else {
        submitbtn.disabled = true
      submitbtn.style.setProperty("cursor", "not-allowed")
    }
  }
  
  const handleEmailField = (event) => {
    const emailbtn = document.querySelector(".msg-btn")
    const isValid = event.target.checkValidity();
    const isPlaceholderShown = event.target.placeholder === event.target.value;
    if(isValid && !isPlaceholderShown){
      emailbtn.disabled = false
      emailbtn.style.setProperty("cursor", "pointer")
    } else {
      emailbtn.disabled = true
      emailbtn.style.setProperty("cursor", "not-allowed")
    }
  }

  const handleSend = () => {
    const msgInput = document.getElementById("messageField").value.trim()
    if (msgInput !== "") {
      const newMessage = { response: gotEmail, sender: 'user-message', text: msgInput, currentTime: getTime() };
      setMessages([...messages, newMessage]);
      document.getElementById("messageField").value = ""
      
      if(!gotEmail){
      setTimeout(() => {
        const bot = document.querySelector('.bot')
        bot.classList.remove('disable')
        document.getElementById("messageField").disabled = true 
      document.getElementById("messageField").placeholder = "Please first provide your Email!"
      document.getElementById("messageField").style.setProperty('cursor', 'not-allowed')
      document.querySelector(".chat-footer-btn").style.setProperty('cursor', 'not-allowed')
      }, 1000);
    }
    }
  };
  
  const handleEmailSubmit = () => {
    
    const emailInput = document.querySelector("#emailInput").value.trim()
    
    if (emailInput !== "" && email === "") {
      
      setEmail(`${emailInput}`);
      document.querySelector(".bot").innerHTML = `...`

      document.getElementById("messageField").disabled = false 
      document.getElementById("messageField").placeholder = "Write a message..."
      document.getElementById("messageField").style.setProperty('cursor', 'text')

      setTimeout(() => {
        document.querySelector(".bot").classList.add('disable') 
        const newMessage = { sender: 'agent-message', text: `Email provided: ${emailInput}. <br/>Thank you for providing your email. <br/>We'll get back to you soon.`, currentTime: getTime() };
        setMessages([...messages, newMessage]);
      }, 1000);
      
      localStorage.setItem('Email', `${emailInput}`);
      setGotEmail(true)

    } else {
      console.log("Email already is provided")
    }


  };
  

  return (
    <div className="chatbot-wrapper">
    <div className="chatbot disable">
      
      <div className="chat-container">

      <div className="chat-header">
        <div className="agent-info">
          <img src={pic} alt="Agent" className="agent-avatar" />
          <div className="agent-details">
            <span className="agent-name">Shahzaib Ali</span>
            <span className="return-time">We'll get back to you soon</span>
          </div>
        </div>
      </div>
      
      <div className="chat-body">

        <UserMsg messages = {messages} />
        
        <div className="bot disable">
        <div className="bot-response">
          <p>
            Don’t have time to wait for a response? Leave your email and we’ll
            be in touch as soon as possible.
          </p>
          <div className="chat-input">
          <input
            type="email"
            placeholder="Enter email address"
            id="emailInput"
            onChange={handleEmailField}
            />
          <button className="msg-btn" onClick={handleEmailSubmit}>
            <svg width="50%" height="50%" fill="currentcolor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="SendButton__SendIcon-sc-1f1t4za-1 ITzKP"><path d="M21.158.222L2.568 11.815c-.8.498-.749 1.215.113 1.591l4.406 1.923 10.395-9.903c1.377-1.296 1.569-1.119.426.395L8.254 18.215v4.927c0 .953.5 1.141 1.113.418l4.473-5.282 5.055 2.207c.861.376 1.643-.092 1.736-1.04l1.81-18.404c.094-.949-.484-1.317-1.283-.819" id="send__a"></path></svg>
          </button>
          </div>
        </div>
      </div>
        </div>
      
      <div className="chat-footer">
        <input
            id="messageField"
            type="text"
            placeholder="Write a message"
            onChange={handleUserMessageField}
            />
        <button onClick={handleSend} className="chat-footer-btn">
              <svg fill="currentcolor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="SendButton__SendIcon-sc-1f1t4za-1 ITzKP"><path d="M21.158.222L2.568 11.815c-.8.498-.749 1.215.113 1.591l4.406 1.923 10.395-9.903c1.377-1.296 1.569-1.119.426.395L8.254 18.215v4.927c0 .953.5 1.141 1.113.418l4.473-5.282 5.055 2.207c.861.376 1.643-.092 1.736-1.04l1.81-18.404c.094-.949-.484-1.317-1.283-.819" id="send__a"></path></svg>
        </button>
      </div>
      </div>
    </div>
    <button className="chatbot-toggle-btn" onClick={toggle}>
        <svg className="toggle-btn-msg-svg" width="50%" height="50%" fill="currentcolor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M208 352c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176c0 38.6 14.7 74.3 39.6 103.4c-3.5 9.4-8.7 17.7-14.2 24.7c-4.8 6.2-9.7 11-13.3 14.3c-1.8 1.6-3.3 2.9-4.3 3.7c-.5 .4-.9 .7-1.1 .8l-.2 .2s0 0 0 0s0 0 0 0C1 327.2-1.4 334.4 .8 340.9S9.1 352 16 352c21.8 0 43.8-5.6 62.1-12.5c9.2-3.5 17.8-7.4 25.2-11.4C134.1 343.3 169.8 352 208 352zM448 176c0 112.3-99.1 196.9-216.5 207C255.8 457.4 336.4 512 432 512c38.2 0 73.9-8.7 104.7-23.9c7.5 4 16 7.9 25.2 11.4c18.3 6.9 40.3 12.5 62.1 12.5c6.9 0 13.1-4.5 15.2-11.1c2.1-6.6-.2-13.8-5.8-17.9c0 0 0 0 0 0s0 0 0 0l-.2-.2c-.2-.2-.6-.4-1.1-.8c-1-.8-2.5-2-4.3-3.7c-3.6-3.3-8.5-8.1-13.3-14.3c-5.5-7-10.7-15.4-14.2-24.7c24.9-29 39.6-64.7 39.6-103.4c0-92.8-84.9-168.9-192.6-175.5c.4 5.1 .6 10.3 .6 15.5z"/></svg>
        <svg className="toggle-btn-x-svg disable" width="35%" height="35%" fill="currentcolor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/></svg>
      </button>
            </div>
  );
}


