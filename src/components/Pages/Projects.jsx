import React, { useEffect } from "react";
import Sidebar from "../utilities/Sidebar";
import Project2 from "../Projects/Project2";
import Footer from "../utilities/footer";
import Navbar from "../utilities/Navbar";

export default function Projects() {

  useEffect(() => {
    window.scrollTo(0,0); // to be scrolled to top onload
}, [])

  const handleMouseMove = (event) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const translateX = (x / rect.height - 0.5) * 7;
    const translateY = (y / rect.width - 0.5) * 10;

    card.style.setProperty("--translateX", `${translateX}px`);
    card.style.setProperty("--translateY", `${translateY}px`);

    const lightX = (x / rect.width) * 100;
    const lightY = (y / rect.height) * 100;

    card.style.setProperty("--lightX", `${lightX}%`);
    card.style.setProperty("--lightY", `${lightY}%`);
  };

  const handleMouseLeave = (event) => {
    const card = event.currentTarget;
    card.style.setProperty("--translateX", `0`);
    card.style.setProperty("--translateY", `0`);
    card.style.setProperty("--lightX", `50%`);
    card.style.setProperty("--lightY", `50%`);
  };

  useEffect(() => {
    document.querySelectorAll(".card-wrapper").forEach((card) => {
      card.style.setProperty("--lightX", `50%`);
      card.style.setProperty("--lightY", `50%`);
    });
  }, []);

  return (
    <>
      <div className="project-page">
        <Sidebar />
        <Navbar />
        <div>
          <h2 className="projects-page-heading">All Projects</h2>
        </div>

        <div className="noProjects disable">
          <p>No project available here yet! <br /> Please visit my <a href="https://github.com/intZaibi/" target="_blank">Github</a> account! </p>
        </div>

        <div className="card-container projectpage-card-container">
          <div
            className="card-wrapper project-page-card"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className="card-content"
              style={{ padding: "2rem 2rem 1.5rem" }}
            >
              {/* <Project2 anime="true" /> */}
              <Project2 Project="Ecommerce-Website" image={"/project-ecommerce.png"} link="https://ecommerce-eight-mocha.vercel.app/" anime="true" />
            </div>
          </div>

          <div
            className="card-wrapper project-page-card"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className="card-content"
              style={{ padding: "2rem 2rem 1.5rem" }}
            >
              <Project2 Project="Noon Quran" tags={["WordPress", "Next.JS", "PayPal", "Strip", "Nodemailer"]} image={"/NoonQuran.png"} link="https://noonquran.com/" anime="true"/>
            </div>
          </div>

          <div
            className="card-wrapper project-page-card"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className="card-content"
              style={{ padding: "2rem 2rem 1.5rem" }}
            >
              <Project2 Project="TourMate" tags={["Next.js", "Open AI", "Wikimedia", "Material UI"]} image={"/TourMate.png"} link="https://tour-mate-bay.vercel.app/" anime="true"/>
            </div>
          </div>

          <div
            className="card-wrapper project-page-card"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className="card-content"
              style={{ padding: "2rem 2rem 1.5rem" }}
            >
              <Project2 Project="Sim Owner Details" tags={["Wordpress", "GoogleMap", "Spexo Theme", "Lottieflies"]} image={"/BloggingWordpress1.png"} link="https://cyan-goat-812431.hostingersite.com/" anime="true"/>
            </div>
          </div>

          <div
            className="card-wrapper project-page-card"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className="card-content"
              style={{ padding: "2rem 2rem 1.5rem" }}
            >
              <Project2 Project="Attendance Portal With Qr-Code" tags={["Next.js", "QR-Scanner", "WebSocket", "MERN Stack"]} image={"/AttendancePortal.png"} anime="true"/>
            </div>
          </div>

          <div
            className="card-wrapper project-page-card"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className="card-content"
              style={{ padding: "2rem 2rem 1.5rem" }}
            >
              <Project2 Project="Ragger" tags={["Next.js", "RAG", "Agentic SDK", "Vector DB", "OpenAI"]} image={"/Ragger.png"} anime="true"/>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

