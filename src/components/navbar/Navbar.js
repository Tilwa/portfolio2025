import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaHome } from "react-icons/fa";
import { FaEnvelopeOpen } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDrawer = () => {
    setIsOpenDrawer(!isOpenDrawer);
  };

  const handleClose = () => {
    setIsOpenDrawer(false);
  };
  return (
    <div className="navbar-container">
      <Link to="/portfolio2025" id="home-icon">
        <div className="navbar-home-icon">
          <FaHome />
        </div>
      </Link>

      {/* slide drawer */}
      <div id="home-icon-mobile">
        <Link
          to="/portfolio2025"
          onClick={(e) => {
            e.preventDefault();
            toggleDrawer();
          }}
        >
          <div className="navbar-home-icon-mobile">
            <BsPersonFill />
          </div>
        </Link>

        {isOpenDrawer && <div className="overlay" onClick={handleClose}></div>}

        <div className={`drawer ${isOpenDrawer ? "open" : ""}`}>
          <Sidebar />
        </div>
      </div>

      <nav className="navbar-menu">
        <ul>
          <li>
            <Link to="/portfolio2025/experience">Experience</Link>
          </li>
          <li>
            <Link to="/portfolio2025/about">About</Link>
          </li>
          <li>
            <Link to="/portfolio2025/education">Education</Link>
          </li>
          <li>
            <Link to="/portfolio2025/skills">Skills</Link>
          </li>
          <li>
            <Link to="/portfolio2025/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/portfolio2025/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="hire-me-btn">
        <button
          id="hire-me"
          onClick={() => {
            window.location.href =
              "https://www.linkedin.com/in/shahrukh-altaf-779896188/";
          }}
        >
          Hire Me
          <div className="hire-me-icon">
            <FaEnvelopeOpen />
          </div>
        </button>
      </div>
      <div className="burger-menu">
        {/* Burger Icon */}
        <div
          className={`burger-icon ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          {isOpen ? "✖" : "☰"}
        </div>

        {/* Menu List */}
        {isOpen && (
          <div className="menu-list">
            <Link to="/portfolio2025" id="profile-icon">
              <div className="navbar-profile-icon">
                <FaHome />
              </div>
            </Link>
            <nav className="list-links">
              <ul>
                <li>
                  <Link to="/portfolio2025/experience">Experience</Link>
                </li>
                <li>
                  <Link to="/portfolio2025/education">Education</Link>
                </li>
                <li>
                  <Link to="/portfolio2025/skills">Skills</Link>
                </li>
                <li>
                  <Link to="/portfolio2025/portfolio">Portfolio</Link>
                </li>
                <li>
                  <Link to="/portfolio2025/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
