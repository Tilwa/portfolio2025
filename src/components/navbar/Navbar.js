import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaHome } from "react-icons/fa";
import { FaEnvelopeOpen } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <Link to="/home" id="home-icon">
        <div className="navbar-home-icon">
          <FaHome />
        </div>
      </Link>
      <nav className="navbar-menu">
        <ul>
          <li>
            <Link to="/experience">Experience</Link>
          </li>
          <li>
            <Link to="/education">Education</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="hire-me-btn">
        <a href="mailto:shahrukhaltaf123@gmail.com?subject=Hire%20Me">
          <button id="hire-me">
            Hire Me
            <div className="hire-me-icon">
              <FaEnvelopeOpen />
            </div>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
