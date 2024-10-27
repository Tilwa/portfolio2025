import React from "react";
import "./Education.css";

const Education = () => {
  return (
    <div className="education-main">
      <div className="education-title">
        <h1 className="education-main-title">Education History</h1>{" "}
        <div className="underline"></div>
      </div>
      <div className="education-desc">
        <div className="circles-container">
          <div className="circles"></div>{" "}
          <div className="circle-line" style={{ height: "177px" }}></div>
          <div className="circles"></div>{" "}
          <div className="circle-line" style={{ height: "177px" }}></div>{" "}
          <div className="circles"></div>{" "}
          <div className="circle-line" style={{ height: "165px" }}></div>
        </div>
        <div className="desc-container">
          <h6 className="history-title">
            {" "}
            Bachelor’s in Computer Science (2017 – 2021)
          </h6>
          <ul className="remove-dots">
            <li>University : Iqra University Islamabad Campus</li>

            <li>City : Islamabad</li>
            <li>Country : Pakistan</li>
            <li>Department : BSCS</li>
          </ul>

          <h6 className="history-title top-margin-title">
            Higher Secondary School Certificate (2015 – 2016)
          </h6>
          <ul className="remove-dots">
            <li>College: Islamabad Model College for Boys, I-10/1</li>
            <li>City : Islamabad</li>
            <li>Country : Pakistan</li>
            <li>Department : ICS</li>
          </ul>

          <h6 className="history-title top-margin-title">
            Secondary School Certificate (2012 – 2013)
          </h6>
          <ul className="remove-dots">
            <li>School: Govt Khan High School Rawalpindi</li>
            <li>City : Rawalpindi</li>
            <li>Country : Pakistan</li>
            <li>Department : Computer Science</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Education;
