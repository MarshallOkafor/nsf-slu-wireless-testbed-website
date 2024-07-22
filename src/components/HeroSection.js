import React from 'react';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <img src={`${process.env.PUBLIC_URL}/hero-2.jpg`} alt="Dimly lit server room with rows of black server racks illuminated by blue lights." />
      <h1>SOFTWARE-DEFINED EDGE INFRASTRUCTURE</h1>
      <p>Full-stack Data-Driven Wireless Network Application</p>
    </div>
  );
}

export default HeroSection;
