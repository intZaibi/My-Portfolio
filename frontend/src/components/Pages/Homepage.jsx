import React from "react";
import { Link } from "react-router-dom";
import Content from "../utilities/Content.jsx";
import Sidebar from '../utilities/Sidebar.jsx';
import Footer from "../utilities/footer.jsx";
import Navbar from "../utilities/Navbar.jsx";

export default function Homepage() {
  
      window.scrollTo(0,0);

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
          <Link className="cv-link" to="/">
            Download CV &gt;
          </Link>
        </div>
      </div>
      
      <Content />
      
      <Footer/>
    </div>
  );
}
