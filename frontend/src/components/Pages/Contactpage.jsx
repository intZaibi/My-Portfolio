import React from 'react'
import Sidebar from '../utilities/Sidebar.jsx'
import Form from '../utilities/ContactForm.jsx'
import Footer from '../utilities/footer.jsx'
import Navbar from '../utilities/Navbar.jsx'

export default function Contactpage( { isChatbotVisible } ) {

    window.scrollTo(0,0); // to be scrolled to top onload

  return (
      <div className="contactpage">
        <Sidebar />
        <Navbar />

        <Form isChatbotVisible={isChatbotVisible} />

        <Footer />
      </div>

  )
}
