import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-main">
      <div className="contact-title">
        <h1 className="contact-main-title">Contact Me</h1>{" "}
        <div className="underline"></div>
      </div>
      <div className="contact-desc">
        <div className="circles-container">
          <div className="circles"></div>{" "}
          <div className="circle-line" style={{ height: "170px" }}></div>
        </div>
        <div className="desc-container">
          <h6 className="history-title">Personal Details</h6>
          <ul className="remove-dots">
            <li>Email : shahrukhaltaf123@gmail.com</li>
            <li>Phone : +923335712658</li>
            <li>Whatsapp : +971561491729</li>
            <li>
              LinkedIn :{" "}
              <a href="https://www.linkedin.com/in/shahrukh-altaf-779896188/">
                www.linkedin.com/in/shahrukh-altaf-779896188/
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
