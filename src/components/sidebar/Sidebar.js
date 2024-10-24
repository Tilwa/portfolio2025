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

      <img className="sidebar-img" src={ProfilePic} />
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
            <p className="sidebar-txt-title">Position</p> : Front-end developer
          </h6>
          <h6 className="sidebar-right-txt-style">
            <p className="sidebar-txt-title">Email</p> :
            shahrukhaltaf123@gmail.com
          </h6>
        </div>
      </div>
      <div className="sidebar-btns">
        <div>
          <i class="devicon-linkedin-plain social-icons"></i>

          <i class="devicon-twitter-original colored social-icons"></i>
          <i class="devicon-facebook-plain  social-icons"></i>

          <i class="devicon-github-original colored social-icons"></i>
        </div>
        <button id="download-cv">
          Download CV{" "}
          <div className="download-icon">
            <FaDownload />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
