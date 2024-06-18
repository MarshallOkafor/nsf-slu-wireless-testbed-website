import React from 'react';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src="/videos/dc-2.mp4" autoPlay loop muted />
      <h1>SOFTWARE-DEFINED EDGE INFRASTRUCTURE</h1>
      <p>Full-stack Data-Driven Wireless Network Application</p>
    </div>
  );
}

export default HeroSection;
