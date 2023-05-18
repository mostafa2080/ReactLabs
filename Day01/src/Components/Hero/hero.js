import React from 'react';
import heroImage from '../../Images/mostafa.png';

const HeroSection = () => (
  <section className="hero-section">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-6">
          <h1>Mostafa Shaaban</h1>
          <p>Backend Developer</p>
          <button className="btn btn-primary">Contact Me</button>
        </div>
        <div className="col-md-6">
          <img src={heroImage} alt="Hero" className="img-fluid" />
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;