import React from "react";
import Content from "../utilities/Content.jsx";
import Sidebar from '../utilities/Sidebar.jsx';
import Footer from "../utilities/footer.jsx";
import Navbar from "../utilities/Navbar.jsx";
import CV from '../../assets/Muhammad-Shahzaib-Ali-Resume.pdf'

export default function Homepage() {
  
      window.scrollTo(0,0); // to be scrolled to top onload

  return (
    <div className="homepage">

      <Sidebar anime="true"/>
      <Navbar />
      
      <div className="header-container">
        <div className="header-wrapper">
          <div className="headings">
            <h1>Hi, I'm Shahzaib Ali</h1>
            <p>Full stack web developer based in Pakistan.</p>
          </div>
          <a className="cv-link" href={CV} download="Muhammad-Shahzaib-Ali-Resume">
            Download CV &gt;
          </a>
        </div>
      </div>
      
      <Content />
      
      <Footer/>
    </div>
  );
}
