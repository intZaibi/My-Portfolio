import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Project1 from "../Projects/Project1.jsx";
import Reviews from "./Reviews.jsx";

export default function Content() {
  const handleMouseMove = (event) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect(); //Position of card
    const x = event.clientX - rect.left; //mouse position relative to card
    const y = event.clientY - rect.top;

    const translateX = ((x / rect.width) - 0.5) * 7; //here 0.5 is to maintain balance between both ends width otherwise it will translate to one side.
    const translateY = ((y / rect.height) - 0.5) * 10; //and 7 and 10 are for pixel adjustment that how much it should be translated

    card.style.setProperty('--translateX', `${translateX}px`); //card translation effect on hover
    card.style.setProperty('--translateY', `${translateY}px`);

    const lightX = (x / rect.width) * 100; // same case here
    const lightY = (y / rect.height) * 100;

    card.style.setProperty('--lightX', `${lightX}%`); //card light effect on hover
    card.style.setProperty('--lightY', `${lightY}%`);
  };

  const handleMouseLeave = (event) => {     // to reset the translations and lights
    const card = event.currentTarget;
    card.style.setProperty('--translateX', `0`);
    card.style.setProperty('--translateY', `0`);
    card.style.setProperty('--lightX', `50%`);
    card.style.setProperty('--lightY', `50%`);
  };
  
  useEffect(() => {
    document.querySelectorAll('.card-wrapper').forEach(card => {      // To set light position of card on load
      card.style.setProperty('--lightX', `50%`);
      card.style.setProperty('--lightY', `50%`);
    });
  }, []);

  return (
    <div className="card-container">
      <div className="small-grid">
        <div className="card-wrapper card1" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
          <div className="card-content">
            <h2 className="card-title-big">10+</h2>
            <h2 className="card-title-small">Projects done</h2>
          </div>
        </div>
        
        <div className="card-wrapper card2" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
        <div className="card-content">
            <h2 className="card-title-big">10k+</h2>
            <h2 className="card-title-small">Line of Code</h2>
          </div>
        </div>

        <div className="card-wrapper card4" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
          <div className="card-content">
            <h2 className="card-title-big">1.5</h2>
            <h2 className="card-title-small">Years Experience</h2>
          </div>
        </div>

        <div className="card-wrapper card5" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
        <div className="card-content">
            <Link className="card-title-big true" to="/Contactpage">Book a call
            <div className="circle-60-arrow">
              <div className="icon-embed-custom">
                <svg viewBox="0 0 29 30" fill="none">
                  <path
                    d="M22.2087 10.5989C22.3392 9.85936 21.8446 9.15304 21.105 9.02276L11.6379 7.35519C10.8983 7.22491 10.1917 7.71966 10.0612 8.45923C9.93062 9.19881 10.4252 9.90512 11.1648 10.0354L17.4048 11.1315L6.72613 18.6087C6.11005 19.0401 5.96071 19.8862 6.39193 20.502C6.82316 21.1179 7.66929 21.2669 8.28536 20.8356L18.9605 13.3607L17.8633 19.5944C17.7327 20.3339 18.2273 21.0403 18.9669 21.1705C19.7065 21.3008 20.4131 20.8061 20.5436 20.0665L22.2146 10.6L22.2087 10.5989Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
            </Link>
          </div>
        </div>
      </div>

      
      <div className="card-wrapper card3" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
        <div className="card-content">
          <h2 className="card-title-big">About me</h2>
          <h2 className="card-title-small">Hey there! I'm Shahzaib Ali, a motivated full stack developer with over 1.5 year of experience in creating websites and applications. Skilled in JS, React, NextJS, Express, NodeJS, MySQL.<br /> I focus on delivering high-quality user experiences and staying updated with industry trends. <br /> <hr />
          Let’s collaborate to bring innovative digital solutions to life!</h2>
        </div>
      </div>


      <div className="card-wrapper card6" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
        <div className="card-content">
          <Project1/>
        </div>
      </div>

      <div className="card-wrapper card7" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
        <div className="card-content">
          <Reviews/>
        </div>
      </div>
    </div>
  );
}
