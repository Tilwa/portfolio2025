import React from "react";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div className="about-me-main">
      <div className="about-me-title">
        <h1 className="about-me-main-title">About Me</h1>{" "}
        <div className="underline"></div>
      </div>
      <div className="about-me-desc">
        <div className="circles-container">
          <div className="circles"></div>{" "}
          <div className="circle-line" style={{ height: "160px" }}></div>
        </div>
        <div className="desc-container">
          <h6 className="history-title"> Summary</h6>
          <ul className="remove-dots">
            <li>
              Innovative web developer with a problem-solving mindset, dedicated
              to designing and developing applications. Passionate about
              creating accessible websites, elegant user interfaces, and
              frictionless user experiences. Committed to harnessing the power
              of web fundamentals for impactful and efficient solutions
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
