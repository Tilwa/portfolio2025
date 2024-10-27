import React, { useState } from "react";
import "./ImageSliderPopup.css";
import { FaTimes, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const ImageSliderPopup = ({ images, isOpen, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!isOpen) return null;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-btn" onClick={onClose}>
          <FaTimes />
        </button>
        <div className="slider-content">
          <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
        </div>
        <button className="prev-btn" onClick={handlePrev}>
          <FaArrowLeft />
        </button>
        <button className="next-btn" onClick={handleNext}>
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default ImageSliderPopup;
