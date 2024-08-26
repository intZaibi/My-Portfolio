import React, { useState, useEffect } from 'react'
import axios from 'axios';

export default function ContactForm( { isChatbotVisible } ) {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const form = document.querySelector(".contact-form")


  useEffect(() => {
    const openChatBtn = document.querySelector('.openChat-btn')
    
      if(!isChatbotVisible){
        setTimeout(() => {
          openChatBtn.innerHTML = 'Open Chat'
        }, 300);
      } else {
        setTimeout(() => {
          openChatBtn.innerHTML = 'Close Chat'
        }, 300) } 
  
  }, [isChatbotVisible])

  const handleChange = (e) => {
    if(e.target.name === 'name')
      setName(e.target.value)
    else if(e.target.name === 'email')
      setEmail(e.target.value)
    else if(e.target.name === 'message')
      setMessage(e.target.value)
  }
  
  const submitForm = (e) => {
    e.preventDefault();
    console.log(name, email, message)
    
    console.log(form)
    form.innerHTML = 
      `<p class="thanks-response">Thank you! we've got your message! we'll get back to you soon! &#128077;</p>`
    
    axios.post('http://localhost:4000/contact', {
      name: name,
      email: email,
      message: message
    })
    .then(res => console.log('Received your message'))
    .catch(err => console.log(err));
  }

  const toggleIt = () => {
    
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

      setTimeout(() => {
        openChatBtn.innerHTML = 'Close Chat'
      }, 300);

    } else {
      msgSvg.style.setProperty(`animation`, `icon-transformation .3s`)
      
      chatbot.style.setProperty(`animation`, `chatbot-animation-out 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`)
      
      xSvg.classList.add('disable')
      msgSvg.classList.remove('disable')
  
      setTimeout(() => {
        openChatBtn.innerHTML = 'Open Chat'
        chatbot.classList.add('disable')
      }, 300);
  
    }
  }

  return (
    <div className='contactForm-wrapper'>
      <div className="form-container">
        <h2 className='contactForm-heading'>Contact</h2>
        <p>Send me a message and I will get back to you as soon as possible!</p>
        <hr/>
        <form onSubmit={submitForm} action="mailto:shahzaibalisomroo@example.com" method="post" className="contact-form">
          <p>Send a message</p>
            <div className="form-group">
                <input type="text" id="name" name="name" placeholder='Your Name' required onChange={handleChange}/>
                <input type="email" id="email" name="email" placeholder='Your Email' required onChange={handleChange}/>
            </div>
            <div className="form-group">
                <textarea id="message" name="message" rows="7" placeholder='Leave a message...' required onChange={handleChange}></textarea>
            </div>
            <div className="submit-wrapper">
                <button type="submit" className="contactForm-submit-btn">Send</button>
            </div>
        </form>
        <hr/>
        <div className="chatbtn-wrapper">
                <button className="openChat-btn" onClick={ toggleIt } >Open Chat</button>
            </div>
      </div>
    </div>
  )
}


