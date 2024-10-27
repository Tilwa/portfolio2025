import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="skills-main">
      <div className="skills-title">
        <h1 className="skills-main-title">Skills</h1>
        <div className="skills-underline"></div>
      </div>

      {/* first bars section starting */}
      <div className="skills-bars">
        <div className="skills-bars-columns">
          <div className="bar-top">
            <div>HTML, HTML5</div>
            <div>95 %</div>
          </div>
          <div className="bar-color">
            <div className="percentages"></div>
          </div>
        </div>
        <div className="skills-bars-columns">
          <div className="bar-top">
            <div>CSS, CSS3</div>
            <div>90 %</div>
          </div>
          <div className="bar-color">
            <div className="percentages" style={{ width: "90%" }}></div>
          </div>
        </div>
      </div>
      {/* first bars section ending */}
      {/* first bars section starting */}
      <div className="skills-bars">
        <div className="skills-bars-columns">
          <div className="bar-top">
            <div>JAVASCRIPT</div>
            <div>75 %</div>
          </div>
          <div className="bar-color">
            <div className="percentages" style={{ width: "75%" }}></div>
          </div>
        </div>
        <div className="skills-bars-columns">
          <div className="bar-top">
            <div>React.js</div>
            <div>65 %</div>
          </div>
          <div className="bar-color">
            <div className="percentages" style={{ width: "65%" }}></div>
          </div>
        </div>
      </div>
      {/* first bars section ending */}
      {/* first bars section starting */}
      <div className="skills-bars">
        <div className="skills-bars-columns">
          <div className="bar-top">
            <div>Bootstrap</div>
            <div>90 %</div>
          </div>
          <div className="bar-color">
            <div className="percentages" style={{ width: "90%" }}></div>
          </div>
        </div>
        <div className="skills-bars-columns">
          <div className="bar-top">
            <div>Node.js</div>
            <div>50 %</div>
          </div>
          <div className="bar-color">
            <div className="percentages" style={{ width: "50%" }}></div>
          </div>
        </div>
      </div>
      {/* first bars section ending */}
      {/* first bars section starting */}
      <div className="skills-bars">
        <div className="skills-bars-columns">
          <div className="bar-top">
            <div>Git and GitHub</div>
            <div>65 %</div>
          </div>
          <div className="bar-color">
            <div className="percentages" style={{ width: "65%" }}></div>
          </div>
        </div>
        <div className="skills-bars-columns"></div>
      </div>
      {/* first bars section ending */}
      {/* first bars section starting */}
      <div className="skills-bars">
        <div className="skills-bars-columns">
          <div className="bar-top">
            <div>OOP</div>
            <div>60 %</div>
          </div>
          <div className="bar-color">
            <div className="percentages" style={{ width: "60%" }}></div>
          </div>
        </div>
        <div className="skills-bars-columns"></div>
      </div>
      {/* first bars section ending */}
    </div>
  );
};

export default Skills;
