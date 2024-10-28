// ImageSliderPopup.js
import React, { useState } from "react";
import "./ImageSliderPopup.css";
import { FaTimes, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const ImageSliderPopup = ({ images, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPreviousImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slider-popup-overlay">
      <div className="slider-popup-content">
        <button className="close-button" onClick={onClose}>
          <FaTimes />
        </button>

        {/* Left Arrow */}
        <button className="arrow-button left" onClick={goToPreviousImage}>
          <FaArrowLeft />
        </button>

        {/* Image Display */}
        <div className="slider-image-container">
          <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
        </div>

        {/* Right Arrow */}
        <button className="arrow-button right" onClick={goToNextImage}>
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default ImageSliderPopup;
