import React from "react";
import "./Experience.css";
const Experience = () => {
  return (
    <div className="experience-main">
      <div className="experience-title">
        <h1 className="experience-main-title">Work Experience</h1>{" "}
        <div className="underline"></div>
      </div>
      <div className="experience-desc">
        <div className="circles-container">
          <div className="circles"></div>{" "}
          <div className="circle-line" style={{ height: "370px" }}></div>
          <div className="circles"></div>{" "}
          <div className="circle-line" style={{ height: "190px" }}></div>
        </div>
        <div className="desc-container">
          <h6 className="history-title"> 04/2022 – 04/2024 – Web Developer</h6>
          <ul className="remove-dots">
            <li>
              Worked as a Web Developer for Fasbazar, a multivendor store, a
              logistics tracking website, and three other business websites
            </li>
            <li>
              Responsibilities included updating the design and development of
              UI for all websites, maintaining and reporting website bugs,
              managing e-commerce operations, handling portals, product listing,
              data scraping, documentation, and testing
            </li>
            <li>
              Conducted detailed analysis of mobile app and website modules,
              ensuring timely completion of all assigned tasks
            </li>
            <li>
              Also managed hosting, uploading, and updating all online
              business-related content for these websites
            </li>
          </ul>

          <h6 className="history-title top-margin-title">
            08/2021 - 02/2022 – Faheem’s Technology
          </h6>
          <ul className="remove-dots">
            <li>Worked on React JS as a Front –end developer</li>
            <li>
              Developed landing page responsive designs along with sign in and
              sign up forms etc
            </li>
            <li>Worked with restful APIs, Hooks, and redux</li>
            <li>Designed user interfaces in Figma and implemented</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
