import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaHome } from "react-icons/fa";
import { FaEnvelopeOpen } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <button className="navbar-home-icon">
        <FaHome />
      </button>
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
        <button id="hire-me">
          Hire Me
          <div className="hire-me-icon">
            <FaEnvelopeOpen />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
