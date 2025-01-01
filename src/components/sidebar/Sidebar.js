import React from "react";
import "./Sidebar.css";
import ProfilePic from "../../resources/images/profilePic2.png";
import { GiSunglasses } from "react-icons/gi";
import { FaDownload } from "react-icons/fa";
const Sidebar = () => {
  return (
    <div className="sidebar-main">
      <div>
        <h1 className="sidebar-title">Shahrukh Altaf</h1>
        <p className="sidebar-designation">Front-end developer</p>
      </div>

      <img className="sidebar-img" src={ProfilePic} alt="profile" />
      <div className="sidebar-txt">
        <div className="timeline">
          <div className="timeline-item">
            <div className="icon">
              <GiSunglasses id="glasses-img" />
            </div>
            <div className="line" style={{ height: "10px" }}></div>
            <div className="circle"></div> <div className="line"></div>
            <div className="circle"></div> <div className="line"></div>
            <div className="circle"></div> <div className="line"></div>{" "}
            <div className="circle"></div>{" "}
            <div className="line" style={{ height: "5px" }}></div>
          </div>
        </div>
        <div className="sidebar-right-txt">
          <h6 className="sidebar-right-txt-style">
            <p className="sidebar-txt-title">Name</p> : Shahrukh Altaf
          </h6>
          <h6 className="sidebar-right-txt-style">
            {" "}
            <p className="sidebar-txt-title">Birthday</p> : 22/Feb/1993
          </h6>
          <h6 className="sidebar-right-txt-style">
            <p className="sidebar-txt-title">Position</p>: Front-end developer
          </h6>
          <h6 className="sidebar-right-txt-style">
            <p className="sidebar-txt-title">Mail</p> :
            shahrukhaltaf123@gmail.com
          </h6>
        </div>
      </div>
      <div className="sidebar-btns">
        <div>
          <a
            href="https://www.linkedin.com/in/shahrukh-altaf-779896188/"
            style={{ color: "black", textDecoration: "none" }}
          >
            <i className="devicon-linkedin-plain social-icons"></i>
          </a>
          <a
            href="https://x.com/ShahrukhAltaf3"
            style={{ color: "black", textDecoration: "none" }}
          >
            <i className="devicon-twitter-original colored social-icons"></i>
          </a>
          <a
            href="https://www.facebook.com/"
            style={{ color: "black", textDecoration: "none" }}
          >
            <i className="devicon-facebook-plain  social-icons"></i>
          </a>

          <a
            href="https://github.com/Tilwa"
            style={{ color: "black", textDecoration: "none" }}
          >
            <i className="devicon-github-original colored social-icons"></i>
          </a>
        </div>
        <a
          href="https://drive.google.com/file/d/1w0TQ_oKr3ZRab1n6Z_TxL9V2x2qINvzp/view?usp=sharing"
          style={{ textDecoration: "none" }}
        >
          <div id="download-cv">
            Download CV{" "}
            <div className="download-icon">
              <FaDownload />
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
