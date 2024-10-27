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
              Web developer with a problem-solving focus towards the development
              of application and alsopassionate about crafting sites with a
              focus on accessibility, stylish UI’s and no friction UX. Focused
              on utilizing the power of web fundamentals
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
