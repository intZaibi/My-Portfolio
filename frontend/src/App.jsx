import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './components/Pages/Homepage.jsx';
import Aboutpage from './components/Pages/About-Page.jsx';
import AllProjects from './components/Pages/Projects.jsx';
import Contactpage from './components/Pages/Contactpage.jsx';
import {Chatbot} from './components/Pages/Chatbot.jsx';


function App() {

  const [isChatbotVisible, setIsChatbotVisible] = useState(false)
  

  return (
    <div className='app'>
      <Chatbot isChatbotVisible={isChatbotVisible} setIsChatbotVisible={setIsChatbotVisible} />
      <BrowserRouter>
        <Routes>
          <Route extact path='/' index element={<Homepage />} />
          <Route extact path='/AllProjects' element={<AllProjects />} />
          <Route extact path='/Aboutpage' element={<Aboutpage />} />
          <Route extact path='/Contactpage' element={<Contactpage isChatbotVisible={isChatbotVisible} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;