import React from 'react';
import './Hero.css';
import images from '../../assets/images/group_images.png';

function Hero() {
  return (
    <section className="hero-container">
      <div className="hero-image-container">
        <img className="hero-image" src={images} alt="group of images" />
      </div>
      <div className="hero-text-container">
        <h1 className="hero-title">Online Experiences</h1>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </section>
  );
}

export default Hero;
