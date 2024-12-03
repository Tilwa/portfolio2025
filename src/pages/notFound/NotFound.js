import React from "react";
import "./NotFound.css";
import MyImg from "../../resources/images/notFound.png";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="error-main">
      <div className="not-found-container">
        <div className="content">
          <img
            src={MyImg}
            alt="Page Not Found Illustration"
            className="illustration"
          />
          <h1 className="error-heading">404</h1>
          <p className="error-para">
            Oops! The page you're looking for doesn't exist.
          </p>
          <Link to="/portfolio2025"> Go Back Home</Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
