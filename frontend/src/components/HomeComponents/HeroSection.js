import React from "react";
import { Link } from 'react-router-dom';
import "./HeroSection.css";
import backgroundImage from "../../images/bg.jpg"

const HeroSection = () => {
  return (
    <section className="hero-section"style={{ backgroundImage: `url(${backgroundImage})` }} >
      <div className="container">
        <div className="text-content">
          <h1 className="title">
          Bridging the Gap between Farmers and Market
          </h1>
          <p className="description">
          Eliminating middlemen and securing fair prices for Farmers through direct Market access.
          </p>
          <div className="button-group">
            <Link to="/admin/addFood">
            <button className="btn primary-btn">Get Started</button>
            </Link>
            <Link to = "/homepage">
            <button className="btn secondary-btn">Learn More</button>
            </Link>
          </div>
        </div>
        <div className="image-container">
          <img
            className="hero-image"
            alt="hero"
            src="/images/heroImage.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
