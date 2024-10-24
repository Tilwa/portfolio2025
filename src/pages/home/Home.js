import React from "react";
import "./Home.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";

import Experience from "../experience/Experience";
import Education from "../education/Education";
import Skills from "../skills/Skills";
import Portfolio from "../portfolio/Portfolio";
import Contact from "../contact/Contact";
import Error from "../error/Error";
import AboutMe from "../../components/aboutMe/AboutMe";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-left-right-container">
        <div className="home-left-container">
          <Sidebar />
        </div>
        <div className="home-right-container">
          <div className="home-right-navbar-container">
            <Navbar />
          </div>
          <div className="home-right-bottom-container">
            {/* Routes inside the home page */}
            <Routes>
              <Route path="/" element={<AboutMe />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/education" element={<Education />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
