import React from 'react';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <img src={`${process.env.PUBLIC_URL}/giphy.gif`} alt="" />
      <h1>SOFTWARE-DEFINED EDGE INFRASTRUCTURE</h1>
      <p>Full-stack Data-Driven Wireless Network Application</p>
    </div>
  );
}

export default HeroSection;
