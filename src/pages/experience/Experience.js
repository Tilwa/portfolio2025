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
        </div>
        <div className="desc-container">
          <h6 className="history-title"> 04/2022 – 04/2024 – Web Developer</h6>
          <ul className="remove-dots">
            <li>
              Developed and maintained websites for Hans Logistics FZE,
              including a multivendor store, a logistics tracking platform, and
              three other business websites
            </li>
            <li>
              Responsibilities included updating UI designs, developing user
              interfaces, resolving website bugs, managing e-commerce
              operations, handling portals, product listing, data scraping,
              documentation, and testing
            </li>
            <li>
              Performed in-depth analysis of mobile app and website modules to
              ensure timely task completion and project delivery
            </li>
            <li>
              Managed hosting, uploading, and regular updates of all online
              business content, ensuring seamless operations and optimal website
              performance
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
