import React, { useState } from "react";
import "./Portfolio.css";
import { projects } from "../../resources/projects/projects";
import Imaging from "../../resources/images/images.png";
import { FaEye } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import { Link } from "react-router-dom";
import ImageSliderPopup from "../../components/ImageSliderPopup/ImageSliderPopup";

const categories = ["All", "HTML & CSS", "JavaScript", "ReactJS", "NodeJS"];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="portfolio-container">
      <div className="portfolio-title">
        <h1 className="portfolio-main-title">Portfolio</h1>{" "}
        <div className="underline"></div>
      </div>
      <div className="portfolio-main">
        {/* Filter Options */}
        <div className="filter-buttons">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-button ${
                selectedCategory === category ? "active" : ""
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="posts-container">
          {filteredProjects.map((project) => (
            <div key={project.id} className="post-card">
              <img src={Imaging} alt={project.title} />
              <h3>{project.title}</h3>
              <div class="icon-container">
                <div class="icon">
                  <FaEye />
                </div>
                <div class="icon">
                  <FaLink />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
