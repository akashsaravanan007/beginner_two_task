import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="About" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="Aboutbg" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Food is an Important part of a Balanced Diet
        </h1>
        <p className="primary-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <p className="primary-text">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
        <div className="about-buttons-conatiner">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            {" "}
            <BsFillPlayCircleFill />
            Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
