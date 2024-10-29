import React, { useState } from "react";
import "./Portfolio.css";
import { projects } from "../../resources/projects/projects";
import Imaging from "../../resources/images/demo1.png";
import { FaEye } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import ImageSliderPopup from "../../components/ImageSliderPopup/ImageSliderPopup";

const categories = ["All", "HTML & CSS", "JavaScript", "ReactJS", "NodeJS"];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const openPopup = (project) => {
    setCurrentProject(project);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setCurrentProject(null);
  };

  return (
    <div className="portfolio-container">
      <div className="portfolio-title">
        <h1 className="portfolio-main-title">Portfolio</h1>
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
              <img src={Imaging} alt={project.title} id="front-banner" />
              <h4 className="p-title">{project.title}</h4>
              <div className="icon-container">
                <div className="icon" onClick={() => openPopup(project)}>
                  <FaEye />
                </div>
                <div className="icon">
                  <a
                    className="icon"
                    href="https://github.com/Tilwa/vocabulary-builder"
                  >
                    <FaLink />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Slider Popup */}
      {isPopupOpen && (
        <ImageSliderPopup
          images={currentProject?.images || []}
          onClose={closePopup}
        />
      )}
    </div>
  );
};

export default Portfolio;
