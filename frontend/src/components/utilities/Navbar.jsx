import React from "react";

export default function Navbar() {

  const toggle = () => {
    const menuSVG = document.querySelector(".menu-icon")
    const xSvg = document.querySelector(".menu-x-icon")
    const menubar = document.querySelector(".sidebar-wrapper")
    const cvLink = document.querySelector('.cv')
    

    if(xSvg.classList.contains("disable")){
      xSvg.style.setProperty(`animation`, `icon-rotation .3s`)
      
      menubar.style.setProperty(`animation`, `navbar-open 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both`)
      
      xSvg.classList.remove('disable')
      cvLink.classList.remove('disable')
      menuSVG.classList.add('disable')
      
    } else {
      menuSVG.style.setProperty(`animation`, `icon-rotation .3s`)
      
      menubar.style.setProperty(`animation`, `navbar-close 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`)
      
      xSvg.classList.add('disable')
      setTimeout(() => {
        cvLink.classList.add('disable')
      }, 300);
      menuSVG.classList.remove('disable')

    }
  }

  return (
    <div className="navbar-wrapper">
      <div className="navbar-container">
        <div className="logo">
          <span style={{color: "#f4f4f4"}}>S</span>
          <span style={{color: "#048CF8"}}>A</span>
        </div>
            <svg
              className="menu-icon "
              height="25px"
              width="25px"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              onClick={toggle}
            >
              <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
            </svg>
            <svg onClick={toggle} className="menu-x-icon disable" fill="currentcolor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/></svg>
      </div>
    </div>
  );
}
