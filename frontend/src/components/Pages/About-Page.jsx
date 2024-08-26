import React from "react";
import Sidebar from "../utilities/Sidebar";
import Footer from "../utilities/footer";
import AboutDiscription from '../utilities/About-discription'
import Timeline from "../utilities/Timeline";
import Tech from "../utilities/Tech";
import Navbar from "../utilities/Navbar";

export default function Aboutpage() {

    window.scrollTo(0,0);

  return (
    <div className="aboutPage">
      <Sidebar />
      <Navbar />
      
      <AboutDiscription />
      <Timeline />
      <Tech />

      <Footer />
    </div>
  );
}
